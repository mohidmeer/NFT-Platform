import React from 'react'
import { Link } from 'react-router-dom'

const Items = () => {
  return (
    <div className=' rounded-xl bg-dark p-2  '>
        <div class="relative h-44 ">
       <img
        src="https://img-cdn.magiceden.dev/rs:fill:252:189:0:0/plain/https://bafybeiecbnwxqtasgaowivu3b7xqjmvc44amxdcvjo3rmxxcgprm63bdby.ipfs.dweb.link"
        draggable="false"
        class=" h-44 object-cover w-full absolute rounded-xl"
      />
     </div>

     <div className='mt-2'>
      <h3 className='text-sm font-bold  text-pink-600 '>The Aquarium Casino</h3>
      <p className='text-sm'>The Biggest Collaborative Multiplyer in the metaverse</p>
     </div>
     <div className='mt-4 gap-2 flex'>
        <Link className='p-2 bg-dark-2 rounded text-sm font-bold '>Learn More</Link>
        <Link className='p-2 border-pink-600 border text-sm  rounded hover:bg-pink-600 font-bold '>Jump In</Link>
    </div>


    </div>
  )
}

export default Items