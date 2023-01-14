import { gql } from "@apollo/client";

export const GET_ALL_COLLECTIONS = gql`
query GetAllCollections {
    getAllCollections {
      _id
      blockchain
      collectionAddress
      collectionImage
      collectionName
      collectionSymbol
      copyright
      creatorAddress
      discordServer
      primaryCategory
      roadmap
      secondaryCategory
      shortDescription
      twitterAccount
      websiteUrl
      whitepaper
    }
  }
`