import {ContractFactory, ethers} from "ethers"
import {useContext} from "react"
import CollectionAbi from "../constants/abi/collection.abi.json"
import {CollectionBytecode} from "../constants/bytecode/collection.bytecode"
import {AuthContext} from "../Provider/AuthProvider"

export const useContract = () => {
  const {signer, address} = useContext(AuthContext)

  const erc721Contract = () => {
    const deployCollection = async (name, symbol) => {
      const collectionFactory = new ContractFactory(CollectionAbi, CollectionBytecode, signer)
      let collectionContract = await collectionFactory.deploy(name, symbol)
      return collectionContract.deployed()
    }

    const listNft = async (contractAddress, ipfsUri) => {
      console.log(contractAddress)
      const collectionContract = new ethers.Contract(contractAddress, CollectionAbi, signer);
      const data = await collectionContract.ownerMint(address, ipfsUri)
      return data.wait();
    }

    return {deployCollection, listNft}
  }

  return {erc721Contract}
}
