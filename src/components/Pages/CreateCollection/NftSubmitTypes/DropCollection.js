import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { deleteArrayElement } from "../../../../utils/global";

const DropCollection = ({
  openPhaseModal,
  phases,
  setPhases,
  isLive,
  setIsLive,
  setDropData,
  dropData,
  handleSubmit,
}) => {
  const [exptime, setExptime] = useState("");
  const [transaction, setTransaction] = useState(false);
  const handleChange = (event) => {
    setExptime(event.target.value);
  };
  const handletransaction = () => {
    setTransaction(!transaction);
    console.log(transaction);
  };

  return (
    <div className="lg:w-1/3 lg:ml-auto">
      <h3 className="font-semibold text-3xl text-center mb-4">
        Drop Collection
      </h3>

      <div className="flex justify-between w-[80%] mx-auto">
        <div onClick={() => setIsLive(false)}>
          <input type="radio" name="claimable" checked={!isLive} />
          <label htmlFor="claimable" className="mx-2">
            Claimable Drop
          </label>
        </div>
        <div onClick={() => setIsLive(true)}>
          <input type="radio" name="live" checked={isLive} />
          <label className="mx-2" htmlFor="live">
            Live Drop
          </label>
        </div>
      </div>
      {!isLive ? (
        <div className="w-full p-3">
          <form className="w-full">
            <input
              type={"number"}
              className="w-full px-2 py-2 rounded-lg"
              placeholder="Enter Price"
              onChange={(e) =>
                setDropData({ ...dropData, price: e.target.value })
              }
              required
            />
            <input
              type={"number"}
              className="w-full px-2 py-2 rounded-lg"
              placeholder="Max Mintable Supply"
              onChange={(e) =>
                setDropData({ ...dropData, maxMintableSupply: e.target.value })
              }
              required
            />
            <input
              type={"number"}
              className="w-full px-2 py-2 mt-2 rounded-lg"
              placeholder="Global Wallet Limit"
              onChange={(e) =>
                setDropData({ ...dropData, globalWalletLimit: e.target.value })
              }
              required
            />
            <input
              type={"date"}
              className="w-full px-2 py-2 mt-2 rounded-lg"
              placeholder="Start Time"
              onChange={(e) =>
                setDropData({
                  ...dropData,
                  startTimeUnixSeconds: parseInt(
                    new Date(e.target.value).getTime() / 1000
                  ),
                })
              }
              required
            />
            <input
              type={"date"}
              className="w-full px-2 py-2 mt-2 rounded-lg"
              placeholder="End Time"
              onChange={(e) =>
                setDropData({
                  ...dropData,
                  endTimeUnixSeconds: parseInt(
                    new Date(e.target.value).getTime() / 1000
                  ),
                })
              }
              required
            />
            <div classname="flex items-center mb-4">
              <input
                onChange={(e) => {
                  console.log(e.target.value);

                  setDropData({
                    ...dropData,
                    isWhitelist: e.target.value == "on" ? true : false,
                  });
                }}
                id="default-checkbox"
                type="checkbox"
                classname="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlfor="default-checkbox"
                classname="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Enable Whitelist
              </label>
            </div>

            <button
              onClick={(e) => handleSubmit(e)}
              type="submit"
              className="mt-2 p-3 flex justify-center rounded-lg text-white font-bold text-sm bg-pink-600 w-full"
            >
              Create Claimable Drop
            </button>
          </form>
        </div>
      ) : (
        <>
          <div className="p-3">
            {phases.map((d, i) => (
              <div className="bg-white flex justify-between py-2 px-4 rounded-lg mt-3">
                <p>{d.phaseName}</p>
                <button
                  className="text-red-500"
                  onClick={() => {
                    setPhases(deleteArrayElement(phases, i));
                  }}
                >
                  <FaRegTrashAlt />
                </button>
              </div>
            ))}
            <button
              onClick={() => {
                openPhaseModal();
              }}
              className="mt-2 p-3 flex justify-center rounded-lg text-white font-bold text-sm bg-pink-600 w-full"
            >
              Add Phases
            </button>

            {phases.length !== 0 && (
              <button
                onClick={() => {
                  handleSubmit();
                }}
                className="mt-2 p-3 flex justify-center rounded-lg text-white font-bold text-sm bg-pink-600 w-full"
              >
                Submit Live Drop
              </button>
            )}
          </div>
        </>
      )}
      {/*<div class="mb-4">
          <label class="block mb-2 font-bold  text-gray-900 ">Date of Listing Expiration</label>
          <input onChange={handleChange} type='datetime-local' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l block w-full p-2.5 focus:border-pink-600 focus:outline-none " required />
          <p className="text-xs font-bold">Expiration Time:&nbsp; {exptime} </p>
        </div>
        <div class="mb-4">
          <label class="block mb-2 font-bold  text-gray-900 ">How much do you want to charge to claim NFTs?</label>
          <input type='number' defaultValue={1} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l block w-full p-2.5 focus:border-pink-600 focus:outline-none " required />
        </div>
        <label for="countries" class="block mb-2 font-bold  text-gray-900">Who can claim NFTs during this phase?</label>
        <select id="countries" className="mb-4  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 outline-none">
          <option selected>Any wallet</option>
          <option value="US">Matic</option>
          <option value="CA">Poly</option>
          <option value="FR">BNB</option>
          <option value="DE">Metamask</option>
        </select>
        <div class="mb-4">
          <label class="block mb-2 font-bold  text-gray-900 ">How many NFTs can be claimed per transaction?</label>
          <input type='number' defaultValue={1} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l block w-full p-2.5 focus:border-pink-600 focus:outline-none " required />
        </div>
        <div class="mb-4">
          <label class="block mb-2 font-bold  text-gray-900 ">How many NFTs will you drop in this phase?</label>
          <input type='number' defaultValue={1} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l block w-full p-2.5 focus:border-pink-600 focus:outline-none " required />
        </div>
        <label for="countries" class="block mb-2 font-bold  text-gray-900">What currency you want to use?</label>
        <select id="countries" className="mb-4  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 outline-none">
          <option selected>Any wallet</option>
          <option value="US">Matic</option>
          <option value="CA">Poly</option>
          <option value="FR">BNB</option>
          <option value="DE">Metamask</option>
        </select>
        <div class="mb-4">
          <label class="block mb-2 font-bold  text-gray-900 ">How many seconds do wallets have to wait in between claiming ?</label>
          <input disabled={transaction} placeholder={transaction ? 'Unlimited' : 'e.g 1000'} type='number' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l block w-full p-2.5 focus:border-pink-600 focus:outline-none " required />
        </div>
        <div class="flex items-center mb-4">
          <input onChange={handletransaction} checked={transaction} type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
          <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Select this to only allow one claim transaction per wallet</label>
        </div>
*/}
    </div>
  );
};

export default DropCollection;
