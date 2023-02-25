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
query CollectionNfts($collectionAddress: String, $chainId: Int, $creatorAddress: String) {
  getSingleCollection(collectionAddress: $collectionAddress, chainId: $chainId, creatorAddress: $creatorAddress) {
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
  }

  collectionNfts(collectionAddress: $collectionAddress) {
    _id
    name
    description
    tokenId
    imageUrl
    metadataUrl
    royalty
    collectionAddress
    creatorAddress
    ownerAddress
    network
    chainId
    nftType
    listingMetadata {
      _id
      startTime
      endTime
      listingId
      price
      isMarketplace
    }
  }
}
`

export const GET_USER_COLLECTIONS = gql`
query GetAllUserCollections($userId: String) {
  getAllUserCollections(userId: $userId) {
    _id
    collectionAddress
    collectionName
  }
}`