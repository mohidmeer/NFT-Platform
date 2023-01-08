import {useMutation} from "@apollo/client"
import {useContext} from "react"
import {CREATE_COLLECTION} from "../graphql/mutations/collectionMutations"
import {CREATE_NFT} from "../graphql/mutations/nftMutations"
import {AuthContext} from "../Provider/AuthProvider"
import {formatValues} from "../utils/global"
import {useContract} from "./useContract"
import useStorage from "./useStorage"

export const useCollection = () => {
  const {erc721Contract} = useContract()
  const {deployCollection, listNft} = erc721Contract()
  const {uploadOnIpfs, downloadJSONFromIpfs} = useStorage()

  const [CreateCollection] = useMutation(CREATE_COLLECTION)
  const [CreateNft] = useMutation(CREATE_NFT)

  const {address, chain} = useContext(AuthContext)

  const createCollection = async (values, listingType, nftDetails) => {
    console.log(values)
    await deployCollection(values.name, values.collectionSymbol)
      .then((res) => {
        console.log(res.address)
        if (listingType === "nft") {
          uploadOnIpfs(nftDetails).then(async (url) => {
            const data = await downloadJSONFromIpfs(url)
            CreateCollection({
              variables:
              {
                "blockchain": values.blockchain,
                "copyright": values.copyright,
                "websiteUrl": values.websiteUrl,
                "collectionName": values.name,
                "collectionAddress": res.address,
                "collectionSymbol": values.collectionSymbol,
                "shortDescription": values.shortDescription,
                "primaryCategory": values.primaryCategory,
                "secondaryCategory": values.secondaryCategory,
                "collectionImage": values.image,
                "whitepaper": values.whitepaper,
                "roadmap": values.roadmap,
                "creatorAddress": address,
                // "twitterAccount": "TEst",
                // "discordServer": "TEst"
              }
            })
            listNft(res.address, url)
              .then((nft) => {
                console.log(nft)
                console.log(nftDetails)
                CreateNft({
                  variables: {
                    "name": nftDetails.name,
                    "description": nftDetails.description,
                    "tokenId": parseInt(formatValues(nft.events[0]?.args?.tokenId)),
                    "imageUrl": data.image,
                    "metadataUrl": url,
                    "price": 5,
                    "royalty": 4,
                    "collectionAddress": res.address,
                    "network": chain.network,
                    "chainId": chain.id
                  }
                })
              })
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
