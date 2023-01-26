import { gql } from "@apollo/client";

export const CREATE_NFT = gql`
mutation CreateCollection(
  $name: String!, 
  $description: String!, 
  $tokenId: Int, 
  $imageUrl: String!, 
  $metadataUrl: String!, 
  $price: Float, 
  $royalty: Float!, 
  $collectionAddress: String!, 
  $network: String!, 
  $chainId: Int!, 
  $nftType: String!, 
  $endTime: String, 
  $currentBid: Float
  $ownerAddress: String
  $creatorAddress: String
  $listingId: Int
  $isMarketplace: Boolean 
) {
  createNft(
    name: $name, 
    description: $description, 
    tokenId: $tokenId, 
    imageUrl: $imageUrl, 
    metadataUrl: $metadataUrl, 
    price: $price, 
    royalty: $royalty, 
    collectionAddress: $collectionAddress, 
    network: $network,
    chainId: $chainId, 
    nftType: $nftType,
    endTime: $endTime,
    ownerAddress: $ownerAddress,
    creatorAddress: $creatorAddress,
    currentBid: $currentBid
    listingId: $listingId
    isMarketplace: $isMarketplace
  ) {
    _id
  }
}
`
export const PURCHASE_NFT = gql`
mutation PurchaseNft($collectionAddress: String, $tokenId: Int, $ownerAddress: String) {
  purchaseNft(collectionAddress: $collectionAddress, tokenId: $tokenId, ownerAddress: $ownerAddress) {
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
    listingId
    isMarketplace
  }
}`

export const PUT_ON_SALE = gql`
mutation PutNftOnSale($collectionAddress: String, $tokenId: Int, $price: Float, $endTime: String, $listingId: Int) {
  putNftOnSale(collectionAddress: $collectionAddress, tokenId: $tokenId, price: $price, endTime: $endTime, listingId: $listingId) {
    _id
  }
}
`

export const PLACE_BID = gql`
mutation PutNftOnSale($bidAmount: Float, $bidderAddress: String, $nftId: String) {
  placeBid(bidAmount: $bidAmount, bidderAddress: $bidderAddress, nftId: $nftId) {
    _id
  }
}`