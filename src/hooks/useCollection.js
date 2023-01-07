import {useContract} from "./useContract"
import useStorage from "./useStorage"

export const useCollection = () => {
  const {erc721Contract} = useContract()
  const {deployCollection, listNft} = erc721Contract()
  const {uploadOnIpfs, downloadJSONFromIpfs} = useStorage()

  const createCollection = async (values, listingType, nftDetails) => {
    console.log(listingType, nftDetails)
    await deployCollection(values.name, values.collectionSymbol)
      .then((res) => {
        if (listingType === "nft") {
          uploadOnIpfs(nftDetails).then(async (url) => {
            const data = await downloadJSONFromIpfs(url)
            listNft(res.address, url)
            console.log(data)
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return {createCollection}

}
