import {gql} from "@apollo/client";

export const CREATE_COLLECTION = gql`
mutation CreateCollection($characteristics: JSON, $team: JSON, $creatorAddress: String, $discordServer: String, $whitepaper: String, $blockchain: String, $copyright: String, $websiteUrl: String, $collectionName: String, $collectionAddress: String, $collectionSymbol: String, $shortDescription: String, $primaryCategory: String, $secondaryCategory: String, $collectionImage: String, $roadmap: String, $slug: String, $twitterAccount: String) {
  createCollection(characteristics: $characteristics, creatorAddress: $creatorAddress, discordServer: $discordServer, whitepaper: $whitepaper, blockchain: $blockchain, copyright: $copyright, websiteUrl: $websiteUrl, collectionName: $collectionName, collectionAddress: $collectionAddress, collectionSymbol: $collectionSymbol, shortDescription: $shortDescription, primaryCategory: $primaryCategory, secondaryCategory: $secondaryCategory, collectionImage: $collectionImage, roadmap: $roadmap, slug: $slug, twitterAccount: $twitterAccount, team: $team) {
    _id
  }
}
`
