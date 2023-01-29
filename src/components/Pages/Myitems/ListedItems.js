import React, { useState } from 'react'
import { BsStack } from 'react-icons/bs'
import ItemCard from './ItemCard'

const ListedItems = ({items}) => {
  
  return (
    <>
      {
        items?.length === 0 && (
          <div class="p-2 flex justify-center items-center h-72  ">
            <div>
              <BsStack className='text-gray-400 text-[100px]' />
              <p className='text-center font-semibold text-lg'>No items</p>
            </div>
          </div>
        )}

      <div className='flex flex-wrap gap-5'>
        {items?.map((d, i) => (
          <ItemCard item={d}/>
        ))}
      </div>
    </>
  )
}

export default ListedItems