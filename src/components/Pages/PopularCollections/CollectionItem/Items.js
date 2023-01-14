import React from 'react'
import { Link } from 'react-router-dom'

const Items = ({nft}) => {
  return (
    <div className='bg-white rounded-xl  h-fit p-2 shadow-xl  '>

      <img draggable="false" src={nft?.imageUrl} />
      <div className='flex justify-between'>
        <p className='font-bold truncate'>{nft?.name}</p>
        <p className='font-bold'>#{nft?.tokenId}</p>
      </div>
      <div className='flex justify-between'>
        <p className=' text-pink-600 truncate'>{nft?.description}</p>
      </div>
      <div className='flex justify-between'>
        <Link className={`text-xs text-pink-600 p-1 px-2 rounded hover:bg-pink-600 hover:text-white font-bold border border-green-400 truncate `}>Buy</Link>
        <Link className={`text-xs text-pink-600 p-1 px-2 rounded hover:bg-pink-600 hover:text-white font-bold border border-green-400 truncate `}>Sell</Link>
      </div>

    </div>
  )
}

export default Items