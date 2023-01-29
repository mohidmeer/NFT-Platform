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
    wallets {
      _id
      walletAddress
      walletType
    }
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

export const CHECK_WALLET_LINKED = gql`
mutation Query($userId: String, $walletAddress: String) {
  checkWalletLinked(userId: $userId, walletAddress: $walletAddress)
}`

export const UPDATE_USER = gql`
mutation UpdateUser($userId: String, $displayName: String, $username: String, $email: String, $telegram: String, $twitter: String, $bio: String) {
  updateUser(userId: $userId, displayName: $displayName, username: $username, email: $email, telegram: $telegram, twitter: $twitter, bio: $bio) {
    _id
  }
}`
