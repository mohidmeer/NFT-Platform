import {gql} from "@apollo/client";

export const LOGIN = gql`
mutation Mutation($walletAddress: String!) {
  loginUser(walletAddress: $walletAddress) {
    _id
    displayName
    username
    email
    telegram
    twitter
    bio
  }
}
`

export const CREATE_USER = gql`
mutation Mutation($walletAddress: String!, $planName: String!) {
  signUpUser(walletAddress: $walletAddress, subType: $planName) {
    displayName
    username
    email
    telegram
    twitter
    bio
  }
}`

export const LINK_WALLET = gql`
mutation Mutation($userId: String, $walletType: String, $walletAddress: String) {
  linkWallet(userId: $userId, walletType: $walletType, walletAddress: $walletAddress) {
    bio
    _id
    displayName
    email
    twitter
    telegram
    username
    wallets {
      _id
      walletAddress
      walletType
    }
  }
}
`
