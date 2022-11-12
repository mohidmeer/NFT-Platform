import React from 'react'
import { FaDiscord ,FaTwitter} from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
const Item = () => {
  return (
    <div className="bg-dark-2 border-dark border p-3"> 
    <div class="relative h-48">
      <img
        src="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://creator-hub-prod.s3.us-east-2.amazonaws.com/degencups_pfp_1667145432580.png"
        draggable="false"
        class=" h-48 object-cover w-full absolute rounded-xl"
      />
    </div>
    <div class="mt-6 flex-col flex gap-y-2">
      <div class="w-fit p-2 bg-dark inline-block rounded w-fit-content text-white-2 text-xs font-medium">
        AUG 28, 11:00 PM
      </div>
      <h5 class="font-extrabold text-white text-3xl truncate cursor-pointer hover:opacity-80 ">
        Flip.GG
      </h5>
    </div>
    <div className='hidden gap-1 mt-3 sm:hidden md:hidden lg:flex'>
         <a className='flex justify-items-center text-sm gap-1 border border-dark p-1 rounded-xl   '><FaDiscord className=' mt-1'/><span className=''>Discord</span></a>
         <a className='flex justify-items-center text-sm gap-1 border border-dark p-1 rounded-xl   '><FaTwitter className=' mt-1'/><span className=''>Twitter</span></a>
         <a className='flex justify-items-center text-sm gap-1 border border-dark p-1 rounded-xl   '><TfiWorld className=' mt-1'/><span className=''>Website</span></a>
    </div>
    <div class="flex flex-col gap-y-2 pt-6">
      <div class="w-full bg-gray-200 h-1">
       <div class="bg-pink-600 h-1 " style={{width:'40%'}} ></div>
      </div>
      <div class="flex items-center justify-between text-sm">
      <span class="text-white">Number of Spots</span>
      <span class="flex items-center gap-1">
      <span class="text-white font-bold">3%</span>
      <span class="text-gray-400">(152/4525)</span>
      </span>

     </div>
   </div>
   <button type="button" class="inline-flex bg-pink-600 w-full p-2 justify-center items-center rounded-md text-white mt-4 font-bold text-sm">Register for WL</button>

   </div>
  )
}

export default Item