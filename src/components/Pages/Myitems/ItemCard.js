import React from 'react'
import {Link} from 'react-router-dom'

const ItemCard = ({item}) => {
  return (
    <div className="bg-dark rounded-xl transition ease-in-out delay-150 hover:translate-x-1 hover:translate-y-1 hover:scale-110  border-dark-2 border-2 max-w-[300px] max-h-[500px]">
      <Link to={`/collection/${item?.collectionAddress}`}>
        <img
          draggable="false"
          loading="lazy"
          className='rounded-2xl w-max'
          src={item?.imageUrl}
        />
        <div className=' lg:w-full md:w-full'>
          <h5 class="mb-2 text-center px-5 font-bold" title="Rifters Demigod Solana Princess's Weekly Wish #2">{item?.name}</h5>
          <p className='text-center px-5 text-sm text-pink-600 break-all'>{item?.description}</p>
          <div class="flex justify-between bg-dark-200 mx-3 mb-3 py-2 px-4 rounded-xl bg-dark-2  ">
            <div class="flex flex-col justify-between text-left">
              <span class="text-sm  text-gray-500">
                Price
              </span>
              <span class="fs-14px font-bold text-white-1 flex items-center">
                {item?.currentBid}
              </span>
            </div>
            <div class="flex flex-col justify-between text-right w-36">
              <span class="text-sm  text-gray-500">
                AUCTION ENDS IN
              </span>
              <span class="fs-14px font-bold text-white-1 ">
                {item?.endTime}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ItemCard
