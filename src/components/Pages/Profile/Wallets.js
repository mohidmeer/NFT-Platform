import {Listbox} from '@headlessui/react';
import {ChevronUpIcon} from '@heroicons/react/20/solid';
import React, {useContext, useState} from 'react'
import {RiArrowUpSLine} from 'react-icons/ri';
import {AuthContext} from '../../../Provider/AuthProvider';
import ConnectWalletModal from '../../Modals/ConnectWalletModal';
const timeline = [
  {id: 1, name: "All Chains ", unavailable: false},
  {id: 2, name: "Etherium ", unavailable: false},
  {id: 3, name: "Polygon ", unavailable: false},
  {id: 4, name: "BNB", unavailable: false},
  {id: 5, name: "Solana", unavailable: false},
  {},

];
const Wallets = () => {
  const [selectedTime, setSelectedTime] = useState(timeline[0]);
  const {user, linkWallet, openModal, address} = useContext(AuthContext);

  return (
    <div>
      <Listbox
        as="div"
        className={
          " w-44 mt-4 ml-4   relative "
        }
        value={selectedTime}
        onChange={setSelectedTime}>

        <Listbox.Button className={'p-3  border border-white  justify-between  text-sm font-medium  rounded flex  w-full  '}>
          <p>{selectedTime.name}</p>  <RiArrowUpSLine className={` ml-auto  ui-open:rotate-180 text-xl  `} />
        </Listbox.Button>
        <Listbox.Options as="div" className={'absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md  bg-dark-2 shadow-lg  ring-opacity-5 focus:outline-none'}>
          {timeline.map((timeline) => (
            <Listbox.Option
              className={' block px-4 py-1 text-sm hover:bg-app mt-2'}
              key={timeline.id}
              value={timeline}
              disabled={timeline.unavailable}
            >
              {timeline.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
      <div class="px-4 pt-10">
        <h1 class="font-bold text-3xl">Manage Wallets</h1>
        <div class="max-w-[600px] mt-2">
          <p class="text- leading-[21px] text-light-gray-500">Link your wallets to accumulate points in the Rewards Hub and enjoy better rewards. Points can be accumulated across all your wallets. Wallets linked to this profile are only visible to you. <a class="text-green-500 font-bold hover:text-pink-600 underline text-xs" target="_blank" rel="noreferrer">Read More</a></p>
        </div>
        <div class="max-w-[574px] rounded-[20px] p-6 mt-6 border border-solid border-gray-300">
          <div>
            <h3 class="text-white-1 font-bold">How to link wallet</h3>
            <div class="flex justify-between mt-4 flex-col sm:flex-row gap-2">
              <p class="text-sm text-light-gray-500">Go to your wallet extension and switch to the wallet you wish to link to this profile.</p>
              <button type="button" class=" bg-pink-600 w-1/2 inline-flex justify-center items-center rounded-md text-white" onClick={openModal}>Link wallet</button>
            </div>
          </div>
          <hr class="bg-gray-400  my-6 h-[2px]" />
          <div>
            <ul>
              {user?.wallets?.map((d, i) => (
                <li class="flex justify-between">
                  <div class="flex flex-col gap-2">
                    <div class="flex flex-wrap gap-2">
                      <span class="font-bold break-all">{d.walletAddress}</span>
                      {(address.toLowerCase() === d.walletAddress) && <div><span class="border rounded px-[5px] py-1 mx-2 inline-flex items-center text-white-2 text-center leading-none uppercase border-green-700 text-white font-bold bg-green-600/75 ">ACTIVE</span></div>}
                    </div>
                    <div>Etherium</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <hr class="bg-gray-400  my-6  h-[2px]" />
        </div>
      </div>
      <ConnectWalletModal link={true} />
    </div >

  )
}

export default Wallets
