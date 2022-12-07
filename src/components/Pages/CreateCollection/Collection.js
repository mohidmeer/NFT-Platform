import React from 'react'

const Collection = ({stateChanger}) => {
  return (
    <div className='w-1/3'>
       <p className='font-bold text-sm text-gray-700'>Step 2 of 6</p>
        <h3 className='font-bold text-4xl'>Collection Info</h3>
        <p className='font-bold mt-2'>Tell us about the collection you’re minting!</p>

        <div class="mb-6 mt-6">
          <label for="default-input" class="block mb-2 text-xl font-bold text-gray-900 dark:text-white">Collection Name</label>
          <input placeholder='Super NFT Collection' type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
        <div class="mb-6">
          <label for="default-input" class="block mb-2 text-xl font-bold  text-gray-900 dark:text-white">Collection Symbol</label>
          <input placeholder='Super NFT Collection' type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>

        <button onClick={() => stateChanger(3)} className=' mt-2 p-3 w-52 flex justify-center rounded-lg text-white font-bold text-sm bg-pink-600'>
              Save and Proceed 
        </button>


    </div>
  )
}

export default Collection