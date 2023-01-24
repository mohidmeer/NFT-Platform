import {useMutation} from "@apollo/client"
import {LINK_WALLET} from "../graphql/mutations/userMutations"
import { CHECK_USER_LOGGED_IN } from "../graphql/queries/userQueries"

export const useUser = () => {
  const [LinkWallet, {error: linkError}] = useMutation(LINK_WALLET)

  const addNewWallet = () => {
    const call = (connectorName, walletAddress, userId) => {
      console.log("lfksd")
      LinkWallet({
        variables: {
          walletAddress: walletAddress,
          walletType: connectorName,
          userId: userId
        },
        onCompleted: (data) => {
          console.log(data)
        },
        refetchQueries: () => [
          {
            query: CHECK_USER_LOGGED_IN,
          }
        ]
      })
    }
    return {linkError, call}
  }

  return {addNewWallet}
}
