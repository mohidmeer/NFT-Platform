import React from 'react'
import { BsStack } from 'react-icons/bs'
import ItemCard from './ItemCard'

const ListedItems = () => {
  return (
    <div class="p-2 flex justify-center items-center h-72  ">
      <div>
        <BsStack className='text-gray-400 text-[100px]' />
        <p className='text-center font-semibold text-lg'>No items</p>
      </div>
      <div>
      <ItemCard />

      </div>
    </div>
  )
}

export default ListedItems