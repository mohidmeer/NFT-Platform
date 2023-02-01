import { useMutation } from "@apollo/client"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { ChainsInfo } from "../config/config-chains"
import { PLACE_BID, PURCHASE_NFT, PUT_ON_SALE } from "../graphql/mutations/nftMutations"
import { GET_SINGLE_COLLECTION } from "../graphql/queries/collectionQueries"
import { SINGLE_AUCTION_NFTS } from "../graphql/queries/nftQueries"
import { ApplicationContext } from "../Provider/ApplicationProvider"
import { AuthContext } from "../Provider/AuthProvider"
import { decimalConverter, formatValues } from "../utils/global"
import { useCollectionApi } from "./useCollectionApi"
import { useContract } from "./useContract"

export const useNft = () => {
  const navigate = useNavigate()
  const { setAppLoading } = useContext(ApplicationContext)
  const { erc721Contract, marketplaceContract, erc20Contract } = useContract()
  const { mintOwnerNft, approveMarketPlace, initializeAuction, placeBid } = erc721Contract()
  const { directListNft, buyNft } = marketplaceContract()
  const { approveCollection } = erc20Contract()
  const { collection } = useCollectionApi()
  const { createNewListingNft, createNewAuctionNft } = collection()
  const [purchaseNft] = useMutation(PURCHASE_NFT)
  const [putOnSale] = useMutation(PUT_ON_SALE)
  const [placeNftBid] = useMutation(PLACE_BID)
  const { address } = useContext(AuthContext)
  const { chain } = useContext(AuthContext)

  const mintNft = async (collectionAddress, url, nftDetails, data) => {
    mintOwnerNft(collectionAddress, url)
      .then((nft) => {
        console.log(nft.events[0]?.args?.tokenId)
        const tokenId = parseInt(nft.events[0]?.args?.tokenId._hex)
        const startTime = parseInt(new Date().getTime() / 1000)
        const endTime = nftDetails.endTime
        const quantityToList = 1
        const currencyToAccept = ChainsInfo[chain.id].NATIVE_CURRENCY
        const reservePrice = 0
        const buyoutPrice = decimalConverter(nftDetails.price)
        const listingParams = [collectionAddress, tokenId, startTime, endTime, quantityToList, currencyToAccept, reservePrice, buyoutPrice, "0"]

        approveMarketPlace(collectionAddress, tokenId)
          .then((res) => {
            directListNft(listingParams)
              .then((listingData) => {
                const listingId = parseInt(listingData.events[0].args[0]._hex)
                createNewListingNft(tokenId, url, data.image, nftDetails, collectionAddress, "list", listingId, true, startTime)
                  .then(() => {
                    setAppLoading(false)
                    navigate(`/collection/${collectionAddress}`)
                    toast.success('Successfully Created Collection!', {
                      position: "top-right",
                      autoClose: 3000,
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    });
                  })
                  .catch(() => {
                    setAppLoading(false)
                  })
              })
              .catch((err) => {
                console.log(err)
                setAppLoading(false)
              })
          })
          .catch((err) => {
            console.log(err)
            setAppLoading(false)
          })
      })
  }

  const putNftForAuction = async (contractAddress, ipfsUri, nftDetails, data) => {
    console.log(
      contractAddress,
      decimalConverter(nftDetails.minBidAmount),
      ipfsUri,
      nftDetails.startTime,
      nftDetails.endTime
    )
    console.log(contractAddress)

    await initializeAuction(
      contractAddress,
      decimalConverter(nftDetails.minBidAmount),
      ipfsUri,
      nftDetails.startTime,
      nftDetails.endTime
    )
      .then(async (res) => {
        await approveCollection(contractAddress)
          .then(async () => {
            createNewAuctionNft(ipfsUri, data.image, nftDetails, contractAddress, "auction")
              .then(() => {
                approveCollection()
                navigate(`/auctions/${contractAddress}`)
                toast.success('Successfully Created Auction!', {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });

                setAppLoading(false)
              })
              .catch(() => {
                setAppLoading(false)
              })
          })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch((err) => {
        console.log(err)
        setAppLoading(false)
      })
  }

  const handleBuyNft = async (listingId, price, collectionAddress, tokenId, listingMetadataId) => {
    setAppLoading(true)
    await buyNft(listingId, decimalConverter(price))
      .then((res) => {
        purchaseNft({
          variables: {
            collectionAddress: collectionAddress,
            tokenId: tokenId,
            ownerAddress: address,
            price: price,
            listingMetadataId: listingMetadataId
          },
          refetchQueries: [
            {
              query: GET_SINGLE_COLLECTION,
              variables: {
                collectionAddress: collectionAddress
              }
            }
          ]
        })
          .then((data) => {
            setAppLoading(false)
          })
          .catch((err) => {
            setAppLoading(false)
          })
      })
      .catch((err) => {
        console.log(err)
        setAppLoading(false)
      })
  }

  const handlePutNftOnSale = async (listingParams, collectionAddress, tokenId, price, endTime, listingMetadataId, handleSaleModal) => {
    setAppLoading(true)
    approveMarketPlace(collectionAddress, tokenId)
      .then(() => {
        directListNft(listingParams)
          .then((res) => {
            const listingId = parseInt(res.events[0].args[0]._hex)
            putOnSale({
              variables: {
                listingMetadataId: listingMetadataId,
                price: price,
                endTime: endTime.toString(),
                listingId: listingId
              },
              refetchQueries: [
                {
                  query: GET_SINGLE_COLLECTION,
                  variables: {
                    collectionAddress: collectionAddress
                  }
                }
              ]
            })
              .then((data) => {
                setAppLoading(false)
                handleSaleModal(false)
              })
              .catch((err) => {
                setAppLoading(false)
                handleSaleModal(false)
              })
          })
          .catch((err) => {
            setAppLoading(false)
          })
      })
      .catch((err) => {
        console.log(err)
        setAppLoading(false)
      })
  }

  const handlePlaceBid = async (collectionAddress, bid, auctionMetadataId, handleBidModal) => {
    setAppLoading(true)
    await approveCollection(collectionAddress)
      .then(async () => {
        // await approveCollection(address)
        //   .then(async () => {
        await placeBid(collectionAddress, decimalConverter(bid))
          .then(() => {
            placeNftBid({
              variables: {
                "bidAmount": bid,
                "bidderAddress": address,
                "auctionMetadataId": auctionMetadataId
              },
              refetchQueries: [
                {
                  query: SINGLE_AUCTION_NFTS,
                  variables: {
                    collectionAddress: collectionAddress
                  }
                }
              ]
            })
              .then(() => {
                setAppLoading(false)
                handleBidModal(false)
              })
              .catch(() => {
                setAppLoading(false)
              })
          })
          .catch(() => {
            setAppLoading(false)
          })

      })
    // })

  }

  return { mintNft, putNftForAuction, handleBuyNft, handlePutNftOnSale, handlePlaceBid }
}