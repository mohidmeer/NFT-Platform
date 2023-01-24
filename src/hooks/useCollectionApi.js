import {useMutation} from "@apollo/client"
import {useContext} from "react"
import {CREATE_COLLECTION} from "../graphql/mutations/collectionMutations"
import {CREATE_NFT} from "../graphql/mutations/nftMutations"
import {AuthContext} from "../Provider/AuthProvider"

export const useCollectionApi = () => {
  const {chain, address} = useContext(AuthContext)
  const [CreateCollection] = useMutation(CREATE_COLLECTION)
  const [CreateNft] = useMutation(CREATE_NFT)

  const collection = () => {
    const createNewCollection = (collectionAddress, values) => {
      return CreateCollection({
        variables:
        {
          "blockchain": chain.name.toLowerCase(),
          "copyright": values.copyright,
          "websiteUrl": values.websiteUrl,
          "collectionName": values.name,
          "collectionAddress": collectionAddress,
          "collectionSymbol": values.collectionSymbol,
          "shortDescription": values.shortDescription,
          "primaryCategory": values.primaryCategory,
          "secondaryCategory": values.secondaryCategory,
          "collectionImage": values.image,
          "whitepaper": values.whitepaper,
          "roadmap": values.roadmap,
          "creatorAddress": address,
          "characteristics": values.characteristics,
          "team": values.team
          // "twitterAccount": "TEst",
          // "discordServer": "TEst"
        }
      })
    }

    const createNewNft = (tokenId, url, image, nftDetails, collectionAddress, nftType) => {
      return CreateNft({
        variables: {
          "name": nftDetails.name,
          "description": nftDetails.description,
          "tokenId": tokenId ? tokenId : null,
          "imageUrl": image,
          "metadataUrl": url,
          "price": 5,
          "royalty": 4,
          "collectionAddress": collectionAddress,
          "network": chain.network,
          "chainId": chain.id,
          "nftType": nftType,
          "endTime": nftDetails.endTime.toString(),
          "currentBid": 0.0,
          "creatorAddress": address,
          "ownerAddress": address
        }
      })
    }
    return {createNewCollection, createNewNft}
  }

  return {collection}
}
