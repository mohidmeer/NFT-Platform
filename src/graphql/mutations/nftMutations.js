import { gql } from "@apollo/client";

export const CREATE_LISTING_NFT = gql`
mutation CreateListingNft(
    $name: String!, 
    $imageUrl: String!, 
    $metadataUrl: String!, 
    $royalty: Float!, 
    $collectionAddress: String!, 
    $network: String!, 
    $chainId: Int!, 
    $nftType: String!, 
    $description: String!, 
    $tokenId: Int, 
    $creatorAddress: String, 
    $ownerAddress: String, 
    $startTime: String, 
    $listingId: Int, 
    $endTime: String,
    $price: Float, 
    $isMarketplace: Boolean
  ) {
  createListingNft(
      name: $name, 
      imageUrl: $imageUrl, 
      metadataUrl: $metadataUrl, 
      royalty: $royalty, 
      collectionAddress: $collectionAddress, 
      network: $network, 
      chainId: $chainId, 
      nftType: $nftType, 
      description: $description, 
      tokenId: $tokenId, 
      creatorAddress: $creatorAddress, 
      ownerAddress: $ownerAddress, 
      startTime: $startTime, 
      listingId: $listingId, 
      endTime: $endTime, 
      price: $price, 
      isMarketplace: $isMarketplace
    ) {
    _id
  }
}`

export const CREATE_AUCTION_NFT = gql `
mutation CreateAuctionNft(
    $name: String!, 
    $description: String!, 
    $imageUrl: String!, 
    $metadataUrl: String!, 
    $royalty: Float!, 
    $collectionAddress: String!, 
    $network: String!, 
    $chainId: Int!, 
    $nftType: String!, 
    $tokenId: Int, 
    $ownerAddress: String, 
    $creatorAddress: String, 
    $startTime: String, 
    $endTime: String, 
    $minimumBid: Float, 
    $roadmap: String, 
    $team: JSON
  ) {
  createAuctionNft(
    name: $name, 
    description: $description, 
    imageUrl: $imageUrl, 
    metadataUrl: $metadataUrl, 
    royalty: $royalty, 
    collectionAddress: $collectionAddress, 
    network: $network, 
    chainId: $chainId, 
    nftType: $nftType, 
    tokenId: $tokenId, 
    ownerAddress: $ownerAddress, 
    creatorAddress: $creatorAddress, 
    startTime: $startTime, 
    endTime: $endTime, 
    minimumBid: $minimumBid, 
    roadmap: $roadmap, 
    team: $team
  ) {
    _id
  }
}
`

export const PURCHASE_NFT = gql`
mutation PurchaseNft($collectionAddress: String, $tokenId: Int, $ownerAddress: String, $price: Float, $listingMetadataId: String) {
  purchaseNft(collectionAddress: $collectionAddress, tokenId: $tokenId, ownerAddress: $ownerAddress, price: $price, listingMetadataId: $listingMetadataId) {
    _id
  }
}`

export const PUT_ON_SALE = gql`
mutation PutNftOnSale($price: Float, $endTime: String, $listingId: Int, $listingMetadataId: String) {
  putNftOnSale(price: $price, endTime: $endTime, listingId: $listingId, listingMetadataId: $listingMetadataId) {
    _id
  }
}
`

export const PLACE_BID = gql`
mutation PlaceBid($bidAmount: Float, $bidderAddress: String,, $auctionMetadataId: String) {
  placeBid(bidAmount: $bidAmount, bidderAddress: $bidderAddress, auctionMetadataId: $auctionMetadataId) {
    _id
    bidAmount
    bidderAddress
    createdAt
  }
}
`