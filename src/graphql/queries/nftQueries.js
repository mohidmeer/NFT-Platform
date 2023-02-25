import { gql } from "@apollo/client";

export const AUCTION_NFTS = gql`query AuctionNfts {
  auctionNfts {
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
    auctionMetadata {
      _id
      startTime
      endTime
      roadmap
      team
      description
      minimumBid
      bids {
        _id
        bidAmount
        bidderAddress
        createdAt
      }
    }
  }
}`

export const SINGLE_AUCTION_NFTS = gql`
query SingleAuctionNft($collectionAddress: String) {
  singleAuctionNft(collectionAddress: $collectionAddress) {
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
    auctionMetadata {
      _id
      startTime
      endTime
      roadmap
      team
      description
      minimumBid
      bids {
        _id
        bidAmount
        bidderAddress
        createdAt
      }
    }
  }
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
  }

}
`
export const GET_OWNER_NFTS = gql`
query GetOwnerNfts($ownerAddress: String, $network: String) {
  getOwnerNfts(ownerAddress: $ownerAddress, network: $network) {
    token_address
    token_id
    amount
    owner_of
    token_hash
    name
    symbol
    token_uri
    metadata
  }
}`