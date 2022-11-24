import React from 'react'
import { Link } from 'react-router-dom'
import Youtube from '../../../../youtue.png'

const Items = () => {
  return (
    <Link clLinkssName="" >
    <div class="relative rounded-xl bg-dark p-1 border border-dark-2 overflow-hidden">
    <img
        draggable="false"
        loading="lazy"
        class="  rounded-xl"
        src={Youtube}
      />
      
      <div class="w-full text-sm  flex flex-col items-center rounded-b-xl ">
        <span class="text-pink-600 flex items-center space-x-2 text-xs">
          <span>LIVE</span>
        </span>
        <div class=" text-xs py-1 px-2 mt-3 gap-2 flex  space-x-2">
         
        </div>
      </div>
    </div>
  </Link>
  )
}

export default Items