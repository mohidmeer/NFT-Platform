import {createContext} from "react";
import {useAccount, useConnect, useDisconnect, useNetwork, useProvider} from "wagmi";

export const WalletConnectContext = createContext();

const WalletConnectProvider = ({children}) => {
  const {chain} = useNetwork();
  const {address, isConnected} = useAccount();
  const {connect, connectAsync, connectors, isLoading, pendingConnector} = useConnect();
  const provider = useProvider({chain})
  const {disconnect} = useDisconnect();

  const connectMetamask = (connector) => {
    connectAsync({connector: connector}).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <WalletConnectContext.Provider
      value={{
        connectMetamask: connectMetamask,
        connect: connect,
        chain: chain,
        disconnect: disconnect,
        connectAsync: connectAsync,
        isConnected: isConnected,
        connectors: connectors,
        address: address,
        pendingConnector: pendingConnector,
        isLoading: isLoading,
        provider: provider
      }}
    >
      {children}
    </WalletConnectContext.Provider>
  )
}

export default WalletConnectProvider;
