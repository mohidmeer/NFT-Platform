import {createContext, useState} from "react";
import {useAccount, useConnect, useDisconnect, useNetwork, useProvider, useSigner, useSignMessage} from "wagmi";
import {useUser} from "../hooks/useUser";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const {chain} = useNetwork();
  const {address, isConnected, connector} = useAccount();
  const {connect, connectAsync, connectors, isLoading, connectorName} = useConnect();
  const provider = useProvider({chain})
  const {disconnect} = useDisconnect();
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState(null)
  const {addNewWallet} = useUser()
  const {data: signer} = useSigner()
  const {signMessage} = useSignMessage({
    onSuccess() {
      console.log(address)
      console.log(connector.name)
      addNewWallet(connector.name, address, user._id).then((res) => {
        closeModal()
      })
    }
  })

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function connectWallet(connector) {
    console.log("hello")
    connectAsync({connector: connector}).then(
      () => closeModal()
    )
  }

  function linkWallet() {
    const message = `Click "Sign" or "Approve" only means you have proved this wallet is owned by you. This request will not trigger any blockchain transaction or cost any gas fee. Use of our website and service are subject to our Terms of Service: https://magiceden.io/terms-of-service.pdf and Privacy Policy: https://magiceden.io/privacy-policy.pdf`

    signMessage({message})
    // connectAsync({connector: connector})
    //   .then((res) => {
    //     addNewWallet(res.connector.name, res.account, user._id).then((res) => {
    //       closeModal()
    //     })
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
  }

  return (
    <AuthContext.Provider
      value={{
        connect: connect,
        chain: chain,
        disconnect: disconnect,
        connectAsync: connectAsync,
        isConnected: isConnected,
        connectors: connectors,
        address: address,
        isLoading: isLoading,
        provider: provider,
        openModal: openModal,
        closeModal: closeModal,
        isOpen: isOpen,
        connectWallet: connectWallet,
        linkWallet: linkWallet,
        setUser: setUser,
        user: user,
        signer: signer
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
