import {BigNumber, ethers} from "ethers";
import moment from "moment"

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

export function calculateGasMargin(value, margin = 1000) {
  return value
    // .mul(BigNumber.from(10000).add(BigNumber.from(margin)))
    // .div(BigNumber.from(10000));
}