import React, { useRef } from 'react'
import placeholder from '../../../image.png'
const Collection = ({stateChanger}) => {

  const inputFile = useRef(null)
  const onButtonClick = () => {
     inputFile.current.click();
    };
  return (
    <div className='w-1/3'>
       <p className='font-bold text-sm text-gray-700'>Step 2 of 6</p>
        <h3 className='font-bold text-4xl'>Collection Info</h3>
        {/* <p className='font-bold mt-2'>Tell us about the collection you’re minting!</p> */}

        <div class="mb-6 mt-6">
          <label for="default-input" class="block mb-2 text-xs font-bold  text-gray-900 dark:text-white">Name</label>
          <input placeholder='Item Name' type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
        <label for="message" class="block mb-2 text-xs font-bold  text-gray-900 dark:text-white">
        Short Description
      </label>
      <textarea
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Short Description"
      ></textarea>
          <div class="mb-4">
            <label  class="block mb-2 text-xs font-bold  text-gray-900 dark:text-white">Price</label>
            <input type='number' id="disname" placeholder='Price' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
          </div>
          <div class="mb-4">
            <label  class="block mb-2 text-xs font-bold  text-gray-900 dark:text-white">Royalties</label>
            <input type='number' id="disname" placeholder='2' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
          </div>
        <div class="mb-6">
          <label for="default-input" class="block mb-2 text-xs font-bold  text-gray-900 dark:text-white">Collection Symbol</label>
          <input placeholder='' type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
        <div className='flex justify-center mt-2'>
            <img width={400} onClick={onButtonClick}  src={placeholder}/>
            <input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
        </div>
        <p className="text-gray-600 text-center mt-2 font-bold">Upload Image NFT</p>

        <div className='flex justify-center'>
        <button onClick={() => stateChanger(3)} className=' mt-2 p-3  w-52 flex justify-center rounded-lg text-white font-bold text-sm bg-pink-600'>
              Save and Proceed 
        </button>

        </div>


    </div>
  )
}

export default Collection