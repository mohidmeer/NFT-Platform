import {useLazyQuery, useMutation} from "@apollo/client"
import {useContext} from "react"
import {useNavigate} from "react-router-dom"
import {useSignMessage} from "wagmi"
import {CREATE_USER, LOGIN} from "../graphql/mutations/userMutations"
import {LOGOUT} from "../graphql/queries/userQueries"
import {AuthContext} from "../Provider/AuthProvider"

export const useAuth = () => {
  const [Login, {error: loginError, loading: loginLoading}] = useMutation(LOGIN)
  const [CreateUser, {error: createError}] = useMutation(CREATE_USER)
  const [Logout] = useLazyQuery(LOGOUT)
  const {address, disconnect, setUser} = useContext(AuthContext)
  const navigate = useNavigate()
  const {signMessage} = useSignMessage({
    async onSuccess() {
      await signInUser()
    }
  })
  const message = `Click "Sign" or "Approve" only means you have proved this wallet is owned by you. This request will not trigger any blockchain transaction or cost any gas fee. Use of our website and service are subject to our Terms of Service: https://magiceden.io/terms-of-service.pdf and Privacy Policy: https://magiceden.io/privacy-policy.pdf`

  const signUser = () => {
    return signMessage({
      message
    });
  }

  const signInUser = async () => {
    await Login({
      variables: {
        walletAddress: address
      },
      onCompleted: (data) => {
        console.log(data)
        if (!data.loginUser) {
          navigate("/plans")
        } else {
          setUser(data.loginUser)
        }
      }
    })
      .then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
  }

  const signUpUser = async (planName) => {
    await CreateUser({
      variables: {
        walletAddress: address,
        planName: planName
      }
    })
      .then((res) => {
        console.log(res)
        navigate("/profile")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const signOut = () => {
    disconnect();
    Logout();
    setUser(null)
  }

  return {signUser, signInUser, signUpUser, signOut}
}

