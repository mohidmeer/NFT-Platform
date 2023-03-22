import { useContext } from "react";
import { ChainsInfo } from "../config/config-chains";
import { ApplicationContext } from "../Provider/ApplicationProvider";
import { AuthContext } from "../Provider/AuthProvider";
import { decimalConverter, formatValues } from "../utils/global";
import { useCollectionApi } from "./useCollectionApi";
import { useContract } from "./useContract";
import { useNft } from "./useNft";
import useStorage from "./useStorage";

export const useCollection = () => {
  const { setAppLoading } = useContext(ApplicationContext);
  const { erc721Contract, marketplaceContract } = useContract();
  const { deployCollection, setStages, setClaimStage } = erc721Contract();
  const { uploadOnIpfs, downloadJSONFromIpfs } = useStorage();
  const { collection } = useCollectionApi();
  const { createNewCollection } = collection();
  const { mintNft, putNftForAuction } = useNft();

  const { address, chain } = useContext(AuthContext);

  const createCollection = async (
    values,
    listingType,
    nftDetails,
    phases,
    dropData,
    isLive
  ) => {
    await deployCollection(values.name, values.collectionSymbol)
      .then((res) => {
        setAppLoading(true);
        const collectionAddress = res.address;
        uploadOnIpfs(nftDetails)
          .then(async (url) => {
            const data = await downloadJSONFromIpfs(url);
            createNewCollection(collectionAddress, values)
              .then(async () => {
                if (listingType === "nft") {
                  await mintNft(collectionAddress, url, nftDetails, data);
                } else if (listingType === "auction") {
                  await putNftForAuction(
                    collectionAddress,
                    url,
                    nftDetails,
                    data
                  );
                } else {
                  if (!isLive) {
                    await setClaimStage([
                      dropData.price,
                      dropData.globalWalletLimit,
                      dropData.maxMintableSupply,
                      dropData.startTimeUnixSeconds,
                      dropData.endTimeUnixSeconds,
                      dropData.isWhitelist,
                    ]);
                  } else {
                    await setStages(phases);
                  }
                }
              })
              .catch((err) => {
                console.log(err);
                setAppLoading(false);
              });
          })
          .catch((err) => {
            setAppLoading(false);
          });
      })
      .catch((err) => {
        console.log(err);
        setAppLoading(false);
      });
  };

  return { createCollection };
};
