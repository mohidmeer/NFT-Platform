import {gql} from "@apollo/client";

export const AUCTION_NFTS = gql`query AuctionNfts {
    auctionNfts {
      _id
      name
      description
      tokenId
      imageUrl
      metadataUrl
      price
      royalty
      collectionAddress
      network
      chainId
      nftType
      endTime
      collection {
        slug
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
    price
    royalty
    collectionAddress
    network
    chainId
    nftType
    endTime
    currentBid
    creatorAddress
    ownerAddress
    creator {
      displayName
    }
    bids {
      _id
    }
  }
}
`
