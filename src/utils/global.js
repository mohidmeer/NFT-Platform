import {ethers} from "ethers";

export const truncateAddress = (address) => {
  if (!address) return "No Account";
  const match = address.match(
    /^(0x[a-zA-Z0-9]{3})[a-zA-Z0-9]+([a-zA-Z0-9]{3})$/
  );
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};

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
