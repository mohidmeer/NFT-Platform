import {useMutation} from "@apollo/client"
import {useContext} from "react"
import {CREATE_COLLECTION} from "../graphql/mutations/collectionMutations"
import {CREATE_AUCTION_NFT, CREATE_LISTING_NFT} from "../graphql/mutations/nftMutations"
import { GET_ALL_COLLECTIONS } from "../graphql/queries/collectionQueries"
import { AUCTION_NFTS } from "../graphql/queries/nftQueries"
import {AuthContext} from "../Provider/AuthProvider"

export const useCollectionApi = () => {
  const {chain, address} = useContext(AuthContext)
  const [CreateCollection] = useMutation(CREATE_COLLECTION)
  const [CreateListingNft] = useMutation(CREATE_LISTING_NFT)
  const [CreateAuctionNft] = useMutation(CREATE_AUCTION_NFT)

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

    const createNewListingNft = (tokenId, url, image, nftDetails, collectionAddress, nftType, listingId, isMarketplace, startTime) => {
      return CreateListingNft({
        variables: {
          "name": nftDetails.name,
          "description": nftDetails.description,
          "tokenId": tokenId,
          "imageUrl": image,
          "metadataUrl": url,
          "royalty": parseFloat(nftDetails?.royalties),
          "collectionAddress": collectionAddress,
          "creatorAddress": address,
          "ownerAddress": address,
          "network": chain.network,
          "chainId": chain.id,
          "nftType": nftType,
          "startTime": startTime.toString(),
          "endTime": nftDetails.endTime.toString(),
          "isMarketplace": isMarketplace,
          "price": parseFloat(nftDetails?.price),
          "listingId": listingId
        },
        refetchQueries: [
          {
            query: GET_ALL_COLLECTIONS,
            variables: {
              "blockchain": ""
            }
          }
        ]
      })
    }

    const createNewAuctionNft = (url, image, nftDetails, collectionAddress, nftType) => {
      return CreateAuctionNft({
        variables: {
          "name": nftDetails.name,
          "description": nftDetails.description,
          "imageUrl": image,
          "metadataUrl": url,
          "royalty": parseFloat(nftDetails?.royalties),
          "collectionAddress": collectionAddress,
          "creatorAddress": address,
          "ownerAddress": address,
          "network": chain.network,
          "chainId": chain.id,
          "nftType": nftType,
          "startTime": nftDetails.startTime.toString(),
          "endTime": nftDetails.endTime.toString(),
          "minBidAmount": nftDetails.minBidAmount
        },
        refetchQueries: [
          {
            query: AUCTION_NFTS
          }
        ]
      })
    }
    
    return {createNewCollection, createNewListingNft, createNewAuctionNft}
  }

  return {collection}
}
