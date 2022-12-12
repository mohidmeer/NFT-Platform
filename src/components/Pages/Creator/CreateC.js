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
      <label for="message" class="mt-4 block mb-2  font-bold    text-gray-900 dark:text-white">
        Short Description
      </label>
      <textarea
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Short Description">
      </textarea>
      <label for="message" class="mt-4 block mb-2  font-bold    text-gray-900 dark:text-white">
        Team
      </label>
      <p>For EACH team Member,please provide the following</p>
      <ul>
        <li>1. Name</li>
        <li>2. Social Links(twitter,Linkden etc)</li>
        <li>3. Role in team</li>
        <li>4. Background/Experience</li>
      </ul>
      <textarea
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="">
      </textarea>
      <label for="message" class="mt-4 block mb-2  font-bold    text-gray-900 dark:text-white">
        Investment
      </label>
      <ul>
        <li>1. How much upfront capital has been invested so far?<br/> Please attach a summary of item in next field</li>
        <li>2. Have you raised outside funding for project? <br/>Please attach any supporting Documentation</li>
        <li>3. How long has the project been worked on?</li>
        <li>4. Is there a proof of concept or demo to show? <br/>Please attach an example in next field</li>
      </ul>
      <textarea
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="">
      </textarea>


  

      <label class="block mt-4  mb-2  font-bold    text-gray-900 dark:text-white" for="file_input">Attachments</label>
      <p>Please Attach any documents to best support your submission</p>
      <input class=" block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
      <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>

      <div class="mb-4 mt-4">
            <label  class="block mb-2 font-bold  text-gray-900 dark:text-white">White Paper</label>
            <input type='text' id="disname" placeholder='External Link' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
      </div>
      <div class="mb-4">
            <label  class="block mb-2 font-bold  text-gray-900 dark:text-white">Road Map</label>
            <input type='text' id="disname" placeholder='External Link' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
      </div>

      <div className='mb-4'>
        <p className='font-bold'>If selected for Launchpad, I will comply with all the requirements below: </p>
        <div>
        - All team members and advisors with a significant financial interest in the project agree to dox<br/>
        - One team member will KYC through a major exchange (Crypto.com, Coinbase)<br/>
        - I will sign a formal legal partnership agreement <br/>
        </div>
        <div class="flex items-center mb-4 mt-4">
       <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
       <label for="default-checkbox" class=" ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Do you agree</label>
     </div>

      </div>

      <div className='mb-4'>
        <p>We'd love to give our SocialMintDAO 10% whitelist supply if your project is willing. Please let us know how many whitelist spots you'd be willing to allocate to Social Mint. </p>
        <input type='text' id="disname" placeholder='' class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
      </div>
      <div class="flex items-center mb-6 mt-4">
       <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
       <label for="default-checkbox" class=" ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email me a copy of response</label>
     </div>

      



























          <button className='mt-4 block bg-black text-white rounded-lg text-sm font-bold mx-auto  lg:w-2/3 p-2 '>Create</button>
    </form>

      
      
      
      </div>
  )
}

export default CreateC