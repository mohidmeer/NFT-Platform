import { gql } from "@apollo/client";

export const GET_ALL_COLLECTIONS = gql`
query GetFilteredCollections($blockchain: String) {
  getFilteredCollections(blockchain: $blockchain) {
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
      slug
    }
  }
`

export const GET_SINGLE_COLLECTION = gql`
query CollectionNfts($collectionAddress: String) {
  getSingleCollection(collectionAddress: $collectionAddress) {
    _id
    blockchain
    copyright
    websiteUrl
    collectionName
    collectionAddress
    collectionSymbol
    shortDescription
    primaryCategory
    secondaryCategory
    collectionImage
    whitepaper
    roadmap
    slug
    twitterAccount
    discordServer
    creatorAddress
    team {
      name
      position
      linkedin
      kycVerified 
    } 
    characteristics {
      type
      name
    }
  }

  collectionNfts(collectionAddress: $collectionAddress) {
    _id
    chainId
    collectionAddress
    description
    imageUrl
    metadataUrl
    name
    network
    price
    royalty
    tokenId
    price
    ownerAddress
    listingId
    isMarketplace
  }
}
`