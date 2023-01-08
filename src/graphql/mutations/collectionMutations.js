import {gql} from "@apollo/client";

export const CREATE_COLLECTION = gql`
mutation CreateCollection($blockchain: String, $copyright: String, $websiteUrl: String, $collectionName: String, $collectionAddress: String, $collectionSymbol: String, $shortDescription: String, $primaryCategory: String, $secondaryCategory: String, $collectionImage: String, $whitepaper: String, $roadmap: String, $twitterAccount: String, $discordServer: String, $creatorAddress: String) {
  createCollection(blockchain: $blockchain, copyright: $copyright, websiteUrl: $websiteUrl, collectionName: $collectionName, collectionAddress: $collectionAddress, collectionSymbol: $collectionSymbol, shortDescription: $shortDescription, primaryCategory: $primaryCategory, secondaryCategory: $secondaryCategory, collectionImage: $collectionImage, whitepaper: $whitepaper, roadmap: $roadmap, twitterAccount: $twitterAccount, discordServer: $discordServer, creatorAddress: $creatorAddress) {
    _id
  }
}
`
