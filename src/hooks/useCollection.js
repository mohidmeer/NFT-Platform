import {useContract} from "./useContract"

export const useCollection = () => {
  const {deployCollection} = useContract()

  const createCollection = async (values) => {
    await deployCollection(values.name, values.symbol)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return {createCollection}

}
