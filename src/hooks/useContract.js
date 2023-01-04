import {ContractFactory} from "ethers"
import {useContext} from "react"
import CollectionAbi from "../constants/abi/collection.abi.json"
import {CollectionBytecode} from "../constants/bytecode/collection.bytecode"
import {AuthContext} from "../Provider/AuthProvider"

export const useContract = () => {
  const {signer} = useContext(AuthContext)
  const collectionContract = () => {
    const deployCollection = async (name, symbol) => {
      const collectionFactory = new ContractFactory(CollectionAbi, CollectionBytecode, signer)
      let collectionContract = await collectionFactory.deploy(name, symbol)
      return collectionContract.deployed()
    }

    return {deployCollection}
  }

  return {collectionContract}
}
