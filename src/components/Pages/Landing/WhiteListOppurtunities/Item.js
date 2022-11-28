import React from 'react'
import { FaDiscord ,FaTwitter} from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import Auction from '../../../../Assets/NFTs/Auctionsgif.gif'
const Item = () => {
  return (
    <a className="" >
      <div class="relative rounded-xl bg-dark p-1 border border-dark-2 overflow-hidden">
      <img
          draggable="false"
          loading="lazy"
          class="  rounded-xl"
          src={Auction}        />
        
        <div class="w-full text-sm  flex flex-col items-center rounded-b-xl ">
          <span class="text-white-1">Star Atlas: CORE Epi...</span>
          <span class="text-pink-600 flex items-center space-x-2 text-xs">
            <span>Star Atlas: CORE Epi...</span>
          </span>
          <div class="bg-dark-2 text-xs py-1 px-2 mt-3 text-white space-x-2">
            <span class="text-green-500">LIVE</span>
          </div>
        </div>
      </div>
    </a>
  )
}

export default Item