import axios from "axios";
import { BigNumber, ethers } from "ethers";
import moment from "moment"
import { ChainsInfo } from "../config/config-chains";

export const truncateAddress = (address) => {
  if (!address) return "No Account";
  const match = address.match(
    /^(0x[a-zA-Z0-9]{3})[a-zA-Z0-9]+([a-zA-Z0-9]{3})$/
  );
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};

export const decimalConverter = (value) => {
  return ethers.utils.parseUnits(value.toString(), "ether")
}

export const formatValues = (value) => {
  const returnValue = ethers.utils.formatEther(value)
  return returnValue;
}

export const deleteArrayElement = (stateArray, index) => {
  const array = [...stateArray]

  if (index > -1) {
    array.splice(index, 1);
  }

  return array;
}

export const getCountDown = (endTime) => {
  const currentTime = parseInt(Date.now() / 1000)
  const timeDiff = endTime - currentTime
  const remainingTime = moment.duration(timeDiff, "seconds")
  return remainingTime
}

export const getFormatedDate = (date) => {
  const d = Date(date)
  return moment(d).format("DD/MM/YYYY")
}

export const usdPrice = (nftChainId) => {
  let price;
  axios.get("https://cex.io/api/last_price/" +
    ChainsInfo[nftChainId]?.CURRENCY_SYMBOL +
    "/USD"
  ).then((res) => {
    return res.data.lprice
  })
  return price
}