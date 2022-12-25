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
    _id
    displayName
    username
    email
    telegram
    twitter
    bio
  }
}`
