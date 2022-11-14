import React from 'react'

const item = () => {
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
        <div class="bg-dark-2 text-xs py-1 px-2 mt-3 text-white space-x-2">
          <span class="text-green-500">Jan 12, 2023</span>
        </div>
      </div>
    </div>
  </a>
  )
}

export default item