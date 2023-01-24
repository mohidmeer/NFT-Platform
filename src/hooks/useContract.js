import {ContractFactory, ethers} from "ethers"
import {useContext} from "react"
import {ChainsInfo} from "../config/config-chains"
import CollectionAbi from "../constants/abi/collection.abi.json"
import MarketplaceAbi from "../constants/abi/marketplace.abi.json"
import {CollectionBytecode} from "../constants/bytecode/collection.bytecode"
import {AuthContext} from "../Provider/AuthProvider"

export const useContract = () => {
  const {signer, address, chain} = useContext(AuthContext)

  const erc721Contract = () => {
    const deployCollection = async (name, symbol) => {
      const collectionFactory = new ContractFactory(CollectionAbi, CollectionBytecode, signer)
      let collectionContract = await collectionFactory.deploy(name, symbol)
      return collectionContract.deployed()
    }

    const mintOwnerNft = async (contractAddress, ipfsUri) => {
      const collectionContract = new ethers.Contract(contractAddress, CollectionAbi, signer);
      const data = await collectionContract.ownerMint(address, ipfsUri)
      return data.wait();
    }

    const approveMarketPlace = async (collectionAddress, tokenId) => {
      const collectionContract = new ethers.Contract(collectionAddress, CollectionAbi, signer);
      const data = await collectionContract.approve(ChainsInfo[chain.id].MARKETPLACE_CONTRACT, tokenId)
      return data.wait();
    }

    const initializeAuction = async (contractAddress, minBidAmout, ipfsUri, startTime, endTime) => {
      const collectionContract = new ethers.Contract(contractAddress, CollectionAbi, signer);
      const data = await collectionContract.initAuction(ipfsUri, minBidAmout, startTime, endTime, ChainsInfo[chain.id].NATIVE_CURRENCY)
      return data.wait();
    }

    return {deployCollection, mintOwnerNft, approveMarketPlace, initializeAuction}
  }

  const marketplaceContract = () => {
    const directListNft = async (args) => {
      const marketplaceContract = new ethers.Contract(ChainsInfo[chain.id].MARKETPLACE_CONTRACT, MarketplaceAbi, signer)
      const data = await marketplaceContract.createListing(args)
      return data.wait()
    }
    return {directListNft}
  }

  return {erc721Contract, marketplaceContract}
}
