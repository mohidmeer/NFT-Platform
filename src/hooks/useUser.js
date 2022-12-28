import {useMutation} from "@apollo/client"
import {LINK_WALLET} from "../graphql/mutations/userMutations"

export const useUser = () => {
  const [LinkWallet] = useMutation(LINK_WALLET)

  const addNewWallet = async (connectorName, walletAddress, userId) => {
    return LinkWallet({
      variables: {
        walletAddress: walletAddress,
        walletType: connectorName,
        userId: userId
      },
      onCompleted: (data) => {
        console.log(data)
      }
    })
  }
  return {addNewWallet}
}
