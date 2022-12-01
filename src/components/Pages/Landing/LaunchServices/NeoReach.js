import React from 'react'
import { Link } from 'react-router-dom'
import Auction from '../../../../Assets/Brands/neoreach.png'
const NeoReach = () => {
  return (
    <Link cLinksName="" >
    <div class="shadow-xl relative rounded-xl bg-dark p-1 border border-dark-2 overflow-hidden">
    <img
        draggable="false"
        loading="lazy"
        class="  rounded-xl"
src={Auction}      />
      <div class="w-full text-sm  flex flex-col items-center rounded-b-xl mt-auto  ">
        
        <button className=' block bg-pink-600 mt-2 w-full font-bold rounded-lg py-1 px-3'>
        <div className='flex justify-center  text-white '>Connect </div>
 
        </button>
       </div>
      
    </div>
  </Link>
  )
}

export default NeoReach