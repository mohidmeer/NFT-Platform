import React from 'react'

const Hashlist = ({stateChanger}) => {
  return (
    <div className='w-2/3'>
       <p className='font-bold text-sm text-gray-700'>Step 4 of 5</p>
        <h3 className='font-bold text-4xl'>Hash List Finder</h3>
        <p className='font-bold mt-2'>Use the tool below to reterive your Mint Hash List</p>
        <div class="mb-6 mt-6">
        
          <div className='flex flex-col '>
          <input placeholder='Enter Creater Wallet' type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          <button className='mt-2 ml-auto py-2 px-3 rounded-lg bg-pink-600 text-white '>Get Hash List</button>
          </div>
        </div>
        <h3 className='font-bold text-4xl'>Owner Finder</h3>
        <div class="mb-6 mt-6">
        
          <div className='flex flex-col justify-start '>
          <textarea
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter the array of hashes"
         ></textarea>
          <button  className='mt-2  mr-auto py-2 px-3 rounded-lg bg-white border border-pink-600 font-bold text-sm '>Check Owner</button>
          </div>
        </div>


    </div>
  )
}

export default Hashlist