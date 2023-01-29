import {createContext} from "react";
import {configureChains, createClient, WagmiConfig} from "wagmi";
import {WalletConnectConnector} from "wagmi/connectors/walletConnect";
import {MetaMaskConnector} from "wagmi/connectors/metaMask";
import {publicProvider} from "wagmi/providers/public";
import {goerli, bscTestnet, polygonMumbai, bsc, localhost} from "@wagmi/chains";
import {CoinbaseWalletConnector} from 'wagmi/connectors/coinbaseWallet'

const {chains, webSocketProvider, provider} = configureChains([goerli, polygonMumbai, bscTestnet, bsc, localhost], [publicProvider()])

const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({chains}),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      }
    }),
    new CoinbaseWalletConnector({chains})
  ],
  provider,
  webSocketProvider
})

export const WalletContext = createContext()

const WalletProvider = ({children}) => {
  return (
    <WalletContext.Provider>
      <WagmiConfig client={client}>{children}</WagmiConfig>
    </WalletContext.Provider>
  )
}

export default WalletProvider;
