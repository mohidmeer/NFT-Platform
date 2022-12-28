import {gql} from "@apollo/client";

export const CHECK_USER_LOGGED_IN = gql`
query Query {
  checkUserLoggedIn {
    wallets {
      _id
      walletAddress
      walletType
    }
    _id
    bio
    displayName
    email
    telegram
    twitter
    username
  }
}
`

export const LOGOUT = gql`
query Query {
  logout
}
`
