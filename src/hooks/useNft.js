import { useMutation } from "@apollo/client"
import { useContext } from "react"
import { ChainsInfo } from "../config/config-chains"
import { PLACE_BID, PURCHASE_NFT, PUT_ON_SALE } from "../graphql/mutations/nftMutations"
import { ApplicationContext } from "../Provider/ApplicationProvider"
import { AuthContext } from "../Provider/AuthProvider"
import { decimalConverter, formatValues } from "../utils/global"
import { useCollectionApi } from "./useCollectionApi"
import { useContract } from "./useContract"

export const useNft = () => {
  const { setAppLoading } = useContext(ApplicationContext)
  const { erc721Contract, marketplaceContract } = useContract()
  const { mintOwnerNft, approveMarketPlace, initializeAuction, placeBid } = erc721Contract()
  const { directListNft, buyNft } = marketplaceContract()
  const { collection } = useCollectionApi()
  const { createNewNft } = collection()
  const [purchaseNft] = useMutation(PURCHASE_NFT)
  const [putOnSale] = useMutation(PUT_ON_SALE)
  const [placeNftBid] = useMutation(PLACE_BID)
  const { address } = useContext(AuthContext)
  const { chain } = useContext(AuthContext)

  const mintNft = async (collectionAddress, url, nftDetails, data) => {
    mintOwnerNft(collectionAddress, url)
      .then((nft) => {
        const tokenId = parseInt(formatValues(nft.events[0]?.args?.tokenId))
        const startTime = parseInt(new Date().getTime() / 1000)
        const endTime = nftDetails.endTime
        const quantityToList = 1
        const currencyToAccept = ChainsInfo[chain.id].NATIVE_CURRENCY
        const reservePrice = 0
        const buyoutPrice = decimalConverter(nftDetails.price)
        const listingParams = [collectionAddress, tokenId, startTime, endTime, quantityToList, currencyToAccept, reservePrice, buyoutPrice, "0"]

        console.log(tokenId)
        approveMarketPlace(collectionAddress, tokenId)
          .then((res) => {
            directListNft(listingParams)
              .then((listingData) => {
                const listingId = parseInt(listingData.events[0].args[0]._hex)
                createNewNft(tokenId, url, data.image, nftDetails, collectionAddress, "list", listingId, true)
                  .then(() => {
                    setAppLoading(false)
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

    await initializeAuction(
      contractAddress,
      decimalConverter(nftDetails.minBidAmount),
      ipfsUri,
      nftDetails.startTime,
      nftDetails.endTime
    )
      .then((res) => {
        console.log(res)
        createNewNft(null, ipfsUri, data.image, nftDetails, contractAddress, "auction")
          .then(() => {
            setAppLoading(false)
          })
          .catch(() => {
            setAppLoading(false)
          })
      })
      .catch((err) => {
        console.log(err)
        setAppLoading(false)
      })
  }

  const handleBuyNft = async (listingId, price, collectionAddress, tokenId) => {
    await buyNft(listingId, decimalConverter(price))
      .then((res) => {
        purchaseNft({
          variables: {
            collectionAddress: collectionAddress,
            tokenId: tokenId,
            ownerAddress: address
          }
        })
          .then((data) => {
            console.log(data)
          })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handlePutNftOnSale = async (listingParams, collectionAddress, tokenId, price, endTime) => {
    approveMarketPlace(collectionAddress, tokenId).then(() => {
      directListNft(listingParams)
        .then((res) => {
          const listingId = parseInt(res.events[0].args[0]._hex)
          console.log(listingId)
          putOnSale({
            variables: {
              collectionAddress: collectionAddress,
              tokenId: tokenId,
              price: price,
              endTime: endTime.toString(),
              listingId: listingId
            }
          }).then((data) => {
            console.log(data)
          })
        })
        .catch((err) => {
          console.log(err)
        })
    })
      .catch((err) => {
        console.log(err)
      })
  }

  const handlePlaceBid = async (collectionAddress, bid, nftId) => {
    await placeBid(collectionAddress, decimalConverter(bid)).then(() => {
      placeNftBid({
        variables: {
          "bidAmount": bid,
          "bidderAddress": address,
          "nftId": nftId        
        }
      })
    })
  }

  return { mintNft, putNftForAuction, handleBuyNft, handlePutNftOnSale, handlePlaceBid }
}