import React from 'react'
import { MdAdd } from 'react-icons/md'
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
        src={Auction}
      />
      
      <div class="w-full text-sm  flex flex-col items-center rounded-b-xl ">
        <span class="text-white-1">Star Atlas: CORE</span>
        <span class="text-pink-600 flex items-center space-x-2 text-xs">
          <span>Star Atlas: CORE Epi...</span>
        </span>
        <div class="">
        
        </div>
      </div>
      <button className=' block bg-pink-600 mt-2 w-full font-bold rounded-lg py-1 px-3'>
      <div className='flex justify-center  text-white '><MdAdd className='mt-1'/>  <span>Join </span> </div>

      </button>
    </div>
  </Link>
  )
}

export default Items