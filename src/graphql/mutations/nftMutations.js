import {gql} from "@apollo/client";

export const CREATE_NFT = gql`
mutation CreateCollection($name: String!, $description: String!, $tokenId: Int!, $imageUrl: String!, $metadataUrl: String!, $price: Float!, $royalty: Float!, $collectionAddress: String!, $network: String!, $chainId: Int!, $nftType: String!) {
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
    nftType: $nftType
  ) {
    _id
  }
}
`
