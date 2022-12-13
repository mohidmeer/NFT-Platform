import React from 'react'
import { Link } from 'react-router-dom'

const Items = () => {
  return (
    <div className='bg-white rounded-lg  h-fit p-2 shadow-xl  '>
       
        <img draggable="false" src="https://img-cdn.magiceden.dev/rs:fill:250:250:0:0/plain/https://bafybeieiycmvexxoqy5u4ddfzosqkhoq6yrjk7jhhrkgd36sm4blhcimue.ipfs.nftstorage.link" />
       <div className='flex justify-between'>
        <p className='font-bold truncate'>Mutant Ape Yatch</p>
        <p className='font-bold'>#5389</p>
       </div>
       <div className='flex justify-between'>
         <p className=' text-pink-600 truncate'>Mutant Ape Yatch</p>
       </div>
       <div className='flex justify-between'>
         <p className='font-bold '>20</p>
         <Link className={`text-xs text-pink-600 p-1 rounded hover:bg-pink-600 hover:text-white font-bold border border-green-400 truncate `}>Details</Link>
       </div>

    </div>
  )
}

export default Items