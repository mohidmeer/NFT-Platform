import React from 'react'
import { Link } from 'react-router-dom'
import Auction from '../../../../Assets/NFTs/Auctionsgif.gif'
const Items = () => {
  return (
    <Link cLinksName="" >
    <div class="relative rounded-xl bg-dark p-1 border border-dark-2 overflow-hidden">
    <img
        draggable="false"
        loading="lazy"
        class="  rounded-xl"
src={Auction}      />
      
      <div class="w-full text-sm  flex flex-col items-center rounded-b-xl ">
        <span class="text-white-1">Star Atlas: CORE Epi...</span>
        <span class="text-pink-600 flex items-center space-x-2 text-xs">
          <span>Star Atlas: CORE Epi...</span>
        </span>
        <div class=" text-xs py-1 px-2 mt-3 gap-2 flex  space-x-2">
          <span class="bg-dark-2 p-1 px-2 rounded ">Jan 12, 2023</span>
        </div>
      </div>
    </div>
  </Link>
  )
}

export default Items