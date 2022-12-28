import {ContractFactory} from "ethers"
import {useContext} from "react"
import CollectionAbi from "../constants/abi/collection.abi.json"
import {CollectionBytecode} from "../constants/bytecode/collection.bytecode"
import {AuthContext} from "../Provider/AuthProvider"

export const useContract = () => {
  const {signer} = useContext(AuthContext)
  const collectionContract = () => {
    const deployCollection = (values) => {
      console.log(signer)
      // const collectionFactory = new ContractFactory(CollectionAbi, CollectionBytecode, signer)
    }

    return {deployCollection}
  }

  return {collectionContract}
}
