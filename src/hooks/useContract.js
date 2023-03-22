import { ContractFactory, ethers } from "ethers";
import { useContext } from "react";
import { ChainsInfo } from "../config/config-chains";
import CollectionAbi from "../constants/abi/collection.abi.json";
import MarketplaceAbi from "../constants/abi/marketplace.abi.json";
import { CollectionBytecode } from "../constants/bytecode/collection.bytecode";
import { AuthContext } from "../Provider/AuthProvider";
import erc20ABI from "../constants/abi/erc20.abi.json";
import { MaxUint256 } from "@ethersproject/constants";

export const useContract = () => {
  const { signer, address, chain } = useContext(AuthContext);

  const erc20Contract = () => {
    const approveCollection = async (collectionAddress) => {
      console.log(chain.id);
      const erc20Contract = new ethers.Contract(
        ChainsInfo[chain.id].AUCTION_TOKEN,
        erc20ABI,
        signer
      );
      console.log(collectionAddress);
      const data = await erc20Contract.approve(collectionAddress, MaxUint256);
      return data.wait();
    };

    return { approveCollection };
  };

  const erc721Contract = () => {
    const deployCollection = async (name, symbol) => {
      const collectionFactory = new ContractFactory(
        CollectionAbi,
        CollectionBytecode,
        signer
      );
      let collectionContract = await collectionFactory.deploy(name, symbol);
      return collectionContract.deployed();
    };

    const mintOwnerNft = async (contractAddress, ipfsUri) => {
      const collectionContract = new ethers.Contract(
        contractAddress,
        CollectionAbi,
        signer
      );
      const data = await collectionContract.ownerMint(address, ipfsUri);
      return data.wait();
    };

    const approveMarketPlace = async (collectionAddress, tokenId) => {
      const collectionContract = new ethers.Contract(
        collectionAddress,
        CollectionAbi,
        signer
      );
      const data = await collectionContract.approve(
        ChainsInfo[chain.id].MARKETPLACE_CONTRACT,
        tokenId
      );
      return data.wait();
    };

    const initializeAuction = async (
      contractAddress,
      minBidAmout,
      ipfsUri,
      startTime,
      endTime
    ) => {
      const collectionContract = new ethers.Contract(
        contractAddress,
        CollectionAbi,
        signer
      );
      const data = await collectionContract.initAuction(
        ipfsUri,
        minBidAmout,
        startTime,
        endTime,
        ChainsInfo[chain.id].AUCTION_TOKEN
      );
      return data.wait();
    };

    const placeBid = async (contractAddress, bid) => {
      const collectionContract = new ethers.Contract(
        contractAddress,
        CollectionAbi,
        signer
      );
      const data = await collectionContract.placeBid(bid);
      return data.wait();
    };

    const claimAuction = async (collectionAddress) => {
      const collectionContract = new ethers.Contract(
        collectionAddress,
        CollectionAbi,
        signer
      );
      const data = await collectionContract.claimAuction();
      return data.wait();
    };

    const setStages = async (collectionAddress, stages) => {
      const collectionContract = new ethers.Contract(
        collectionAddress,
        CollectionAbi,
        signer
      );
      const data = await collectionContract.setStages(stages);
      return data.wait();
    };
    const setClaimStage = async (collectionAddress, stage) => {
      const collectionContract = new ethers.Contract(
        collectionAddress,
        CollectionAbi,
        signer
      );
      const data = await collectionContract.setClaimStage(stage);
      return data.wait();
    };
    return {
      deployCollection,
      mintOwnerNft,
      approveMarketPlace,
      initializeAuction,
      placeBid,
      claimAuction,
      setStages,
      setClaimStage,
    };
  };

  const marketplaceContract = () => {
    const directListNft = async (args) => {
      const marketplaceContract = new ethers.Contract(
        ChainsInfo[chain.id].MARKETPLACE_CONTRACT,
        MarketplaceAbi,
        signer
      );
      const data = await marketplaceContract.createListing(args);
      return data.wait();
    };

    const buyNft = async (listingId, price) => {
      console.log(parseInt(price._hex));
      const marketplaceContract = new ethers.Contract(
        ChainsInfo[chain.id].MARKETPLACE_CONTRACT,
        MarketplaceAbi,
        signer
      );
      const data = await marketplaceContract.buy(
        listingId,
        address,
        1,
        ChainsInfo[chain.id].NATIVE_CURRENCY,
        price,
        {
          value: price,
        }
      );
      return data.wait();
    };

    return { directListNft, buyNft };
  };

  return { erc721Contract, marketplaceContract, erc20Contract };
};
