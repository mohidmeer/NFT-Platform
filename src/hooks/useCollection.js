import {useContext} from "react"
import {ChainsInfo} from "../config/config-chains"
import {AuthContext} from "../Provider/AuthProvider"
import {decimalConverter, formatValues} from "../utils/global"
import {useCollectionApi} from "./useCollectionApi"
import {useContract} from "./useContract"
import { useNft } from "./useNft"
import useStorage from "./useStorage"

export const useCollection = () => {
  const {erc721Contract, marketplaceContract} = useContract()
  const {deployCollection} = erc721Contract()
  const {uploadOnIpfs, downloadJSONFromIpfs} = useStorage()
  const {collection} = useCollectionApi()
  const {createNewCollection, createNewNft} = collection()
  const {mintNft} = useNft()

  const {address, chain} = useContext(AuthContext)

  const createCollection = async (values, listingType, nftDetails) => {
    console.log(listingType, nftDetails)
    await deployCollection(values.name, values.collectionSymbol)
      .then((res) => {
        const collectionAddress = res.address
        if (listingType === "nft") {
          uploadOnIpfs(nftDetails).then(async (url) => {
            const data = await downloadJSONFromIpfs(url)
            createNewCollection(collectionAddress, values).then(async () => {
              await mintNft(collectionAddress, url, nftDetails, data)
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
