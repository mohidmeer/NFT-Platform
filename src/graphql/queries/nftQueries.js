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
query GetOwnerListedNfts($ownerAddress: String) {
  getOwnerNfts(ownerAddress: $ownerAddress) {
    totalItems {
      _id
      startTime
      endTime
      listingId
      price
      isMarketplace
      nft {
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
    listedItems {
      _id
      startTime
      endTime
      listingId
      price
      isMarketplace
      nft {
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
    unlistedItems
  }
}`