import { useContext } from "react"
import { ChainsInfo } from "../config/config-chains"
import { AuthContext } from "../Provider/AuthProvider"
import { decimalConverter, formatValues } from "../utils/global"
import { useCollectionApi } from "./useCollectionApi"
import { useContract } from "./useContract"

export const useNft = () => {
    const { erc721Contract, marketplaceContract } = useContract()
    const { mintOwnerNft, approveMarketPlace } = erc721Contract()
    const {directListNft} = marketplaceContract()
    const {collection} = useCollectionApi()
    const {createNewNft} = collection()

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

                approveMarketPlace(collectionAddress, tokenId)
                    .then((res) => {
                        directListNft(listingParams)
                            .then((listingData) => {
                                const tokenId = parseInt(formatValues(nft.events[0]?.args?.tokenId))
                                createNewNft(tokenId, url, data.image, nftDetails, collectionAddress, "list")
                            })
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })
    }

    return { mintNft }
}