import { Switch } from '@headlessui/react';
import React, { useState } from 'react'






const RadioFilters = ({ characteristics }) => {

  return (
    <div className='grid grid-cols-2 gap-2 '>
      {characteristics?.map(filter =>
        <div>
          <input type="checkbox" id={filter.name} name="hostineg" value={filter.name} class="hidden peer" />
          <label for={filter.name} class="inline-flex justify-between w-full items-center p-2  text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-pink-600 peer-checked:border-pink-600 peer-checked:text-pink-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div class="block">
              <div className='w-36 mx-auto '>
                <div className='ml-10'>
                  <div class=" text-xs font-semibold text-center text-pink-600">{filter.name}</div>
                  <div class="font-bold text-center text-sm text-black">{filter.type}</div>
                </div>

              </div>
              {/* <p className='text-xs  text-black font-bold'>{filter.rarety}</p> */}
            </div>
          </label>
        </div>)}



    </div>
  )
}

export default RadioFilters