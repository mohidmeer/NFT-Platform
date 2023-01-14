import {useContext} from "react"
import {ChainsInfo} from "../config/config-chains"
import {AuthContext} from "../Provider/AuthProvider"
import {decimalConverter, formatValues} from "../utils/global"
import {useCollectionApi} from "./useCollectionApi"
import {useContract} from "./useContract"
import useStorage from "./useStorage"

export const useCollection = () => {
  const {erc721Contract, marketplaceContract} = useContract()
  const {deployCollection, mintOwnerNft, approveMarketPlace} = erc721Contract()
  const {directListNft} = marketplaceContract()
  const {uploadOnIpfs, downloadJSONFromIpfs} = useStorage()
  const {collection} = useCollectionApi()
  const {createNewCollection, createNewNft} = collection()

  const {address, chain} = useContext(AuthContext)

  const createCollection = async (values, listingType, nftDetails) => {
    console.log(listingType, nftDetails)
    await deployCollection(values.name, values.collectionSymbol)
      .then((res) => {
        const collectionAddress = res.address
        if (listingType === "nft") {
          uploadOnIpfs(nftDetails).then(async (url) => {
            const data = await downloadJSONFromIpfs(url)
            createNewCollection(collectionAddress, values).then(() => {
              mintOwnerNft(res.address, url)
                .then((nft) => {
                  console.log(nft)
                  const collectionAddress = res.address
                  const tokenId = parseInt(formatValues(nft.events[0]?.args?.tokenId))
                  const startTime = parseInt(new Date().getTime() / 1000)
                  const endTime = nftDetails.endTime
                  const quantityToList = 1
                  const currencyToAccept = ChainsInfo[chain.id].NATIVE_CURRENCY
                  const reservePrice = 0
                  const buyoutPrice = decimalConverter(nftDetails.price)

                  const listingParams = [collectionAddress, tokenId, startTime, endTime, quantityToList, currencyToAccept, reservePrice, buyoutPrice, "0"]

                  approveMarketPlace(collectionAddress, tokenId)
                    .then((res) => {
                      console.log(res)
                      directListNft(listingParams)
                        .then((listingData) => {
                          console.log(listingData)
                          const tokenId = parseInt(formatValues(nft.events[0]?.args?.tokenId))
                          createNewNft(tokenId, url, data.image, nftDetails, collectionAddress)
                        })
                    })
                    .catch((err) => {
                      console.log(err)
                    })
                })
            })
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return {createCollection}

}
