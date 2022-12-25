import {gql} from "@apollo/client";

export const CHECK_USER_LOGGED_IN = gql`
query CheckUserLoggedIn {
  checkUserLoggedIn {
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

export const LOGOUT = gql`
query Query {
  logout
}
`
