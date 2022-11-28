import { Switch } from '@headlessui/react';
import React, { useRef } from 'react'

import placeholder from '../../../image.png'
const CreateC = () => {
    const inputFile = useRef(null)
    const onButtonClick = () => {
       inputFile.current.click();
      };
  return (
    <div className="mt-7 p-4  ">
      <div className="text-center ">
        <h3 className="text-3xl font-bold ">Create Your NFT Token </h3>
        <p className="text-gray-600 font-bold">Create your Own NFT token Buy and Sell In digital Currency</p>
        <div className='flex justify-center mt-2'>
            <img width={400} onClick={onButtonClick}  src={placeholder}/>
            <input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
        </div>
        <p className="text-gray-600 font-bold">Upload Image NFT</p>
      </div>
    <form className=' lg:w-2/3 mx-auto'>
          <div class="mb-4">
            <label  class=" block mb-2 text-xs font-bold  text-gray-900 dark:text-white">Name</label>
            <input type='text' id="disname" placeholder='Item Name' class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
          </div>
          <div class="mb-4">
            <label  class="block mb-2 text-xs font-bold  text-gray-900 dark:text-white">External Link</label>
            <input type='text' id="disname" placeholder='External Link' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
          </div>
          <div class="mb-4">
            <label  class="block mb-2 text-xs font-bold  text-gray-900 dark:text-white">Description</label>
            <input type='text' id="disname" placeholder='Description' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
          </div>
          <div class="mb-4">
            <label  class="block mb-2 text-xs font-bold  text-gray-900 dark:text-white">Price</label>
            <input type='number' id="disname" placeholder='Price' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
          </div>
          <div class="mb-4">
            <label  class="block mb-2 text-xs font-bold  text-gray-900 dark:text-white">Rent price per day</label>
            <input type='number' id="disname" placeholder='Price per day' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
          </div>
          <div class="mb-4">
            <label  class="block mb-2 text-xs font-bold  text-gray-900 dark:text-white">Royalties</label>
            <input type='number' id="disname" placeholder='2' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
          </div>
          
          <label class="inline-flex relative items-center mb-5 cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer"/>
           <div class="w-9 h-5 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
           <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Properties</span>
          </label><br/>
          <label class="inline-flex relative items-center mb-5 cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer"/>
           <div class="w-9 h-5 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
           <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Level</span>
          </label><br/>
          <label class="inline-flex relative items-center mb-5 cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer"/>
           <div class="w-9 h-5 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
           <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Stats</span>
          </label><br/>
          <label class="inline-flex relative items-center mb-5 cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer"/>
           <div class="w-9 h-5 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
           <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Unlockable Content</span>
          </label><br/>
          <label class="inline-flex relative items-center mb-5 cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer"/>
           <div class="w-9 h-5 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
           <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Explicit and Sensitive Content</span>
          </label><br/>
          <div class="mb-4">
            <label  class="block mb-2 text-xs font-bold  text-gray-900 dark:text-white">Max Supply</label>
            <input type='number' id="disname" value={1} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
          </div>
          <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Select Collection</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            </select>
          <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Select Catagories</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            </select>


          <button className='mt-4 block bg-black text-white rounded-lg text-sm font-bold mx-auto  lg:w-2/3 p-2 '>Create</button>
    </form>

      
      
      
      </div>
  )
}

export default CreateC