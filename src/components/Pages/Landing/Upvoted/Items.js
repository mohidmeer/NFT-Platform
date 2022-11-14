import React from 'react'
import { AiFillHeart } from "react-icons/ai";
const Items = () => {
  return (
    <a className="" >
    <div class="relative rounded-xl bg-dark p-1 border border-dark-2 overflow-hidden">
    <img
        draggable="false"
        loading="lazy"
        class="  rounded-xl"
        src="https://img-cdn.magiceden.dev/rs:fill:252:189:0:0/plain/https://bafybeiecbnwxqtasgaowivu3b7xqjmvc44amxdcvjo3rmxxcgprm63bdby.ipfs.dweb.link/"
      />
      
      <div class="w-full text-sm  flex flex-col items-center rounded-b-xl ">
        <span class="text-white-1">Star Atlas: CORE Epi...</span>
        <span class="text-pink-600 flex items-center space-x-2 text-xs">
          <span>Star Atlas: CORE Epi...</span>
        </span>
        <div class=" text-xs py-1 px-2 mt-3 gap-2 flex text-white space-x-2">
          <span class="bg-dark-2 p-1 px-2 rounded flex text-pink-600"><AiFillHeart className='mt-[2px] mr-1 ' / > <span>56877</span> </span>
          <span class="bg-dark-2 p-1 px-2 rounded text-gray-200">Jan 12, 2023</span>
        </div>
      </div>
    </div>
  </a>
  )
}

export default Items