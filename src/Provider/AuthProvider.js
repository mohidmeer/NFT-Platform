import {createContext, useState} from "react";
import {useAccount, useConnect, useDisconnect, useNetwork, useProvider, useSignMessage} from "wagmi";
import {verifyMessage} from 'ethers/lib/utils'
import {useAuth} from "../hooks/useAuth";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const {chain} = useNetwork();
  const {address, isConnected} = useAccount();
  const {connect, connectAsync, connectors, isLoading} = useConnect();
  const provider = useProvider({chain})
  const {disconnect} = useDisconnect();
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState(null)

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
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
        setUser: setUser,
        user: user
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
