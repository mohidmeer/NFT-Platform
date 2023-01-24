import {useContext} from "react"
import {ChainsInfo} from "../config/config-chains"
import {ApplicationContext} from "../Provider/ApplicationProvider"
import {AuthContext} from "../Provider/AuthProvider"
import {decimalConverter, formatValues} from "../utils/global"
import {useCollectionApi} from "./useCollectionApi"
import {useContract} from "./useContract"

export const useNft = () => {
  const {setAppLoading} = useContext(ApplicationContext)
  const {erc721Contract, marketplaceContract} = useContract()
  const {mintOwnerNft, approveMarketPlace, initializeAuction} = erc721Contract()
  const {directListNft} = marketplaceContract()
  const {collection} = useCollectionApi()
  const {createNewNft} = collection()

  const {chain} = useContext(AuthContext)

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
                console.log(listingData)
                const tokenId = parseInt(formatValues(nft.events[0]?.args?.tokenId))
                console.log(tokenId)
                createNewNft(tokenId, url, data.image, nftDetails, collectionAddress, "list")
                  .then(() => {
                    setAppLoading(false)
                  })
                  .catch(() => {
                    setAppLoading(false)
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

  return {mintNft, putNftForAuction}
}
