import React from 'react'
import SocialMediaApi from '../Landing/SocialMediaApi/SocialMediaApi'
const Socials = ({stateChanger}) => {
  return (
    <div>
        {/* <p className='font-bold text-sm text-gray-700'>Step 5 of 6</p> */}
        
        <SocialMediaApi title={'text-left'}/>


        <div className='mt-4 w-full '>
          <p className='text-xl font-bold'>Add your social media accounts for fans to follow</p>

<div className='flex justify-between  gap-20 mt-6' >
  <div className='w-full'>
  <div class="mb-2 ">
     <label for="twitter" class="block mb-1 text-xs font-bold  text-gray-900 dark:text-white">Twitter Account to Follow </label>
     <input type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
  </div>
  <div class="mb-2">
     <label for="twitter" class="block mb-1 text-xs font-bold  text-gray-900 dark:text-white">Discord Server to Follow </label>
      <input type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
  </div>
  <div class="mb-2">
     <label for="twitter" class="block mb-1 text-xs font-bold  text-gray-900 dark:text-white">Facebook Page to Follow </label>
      <input type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
  </div>
  <div class="mb-2">
     <label for="twitter" class="block mb-1 text-xs font-bold  text-gray-900 dark:text-white">Instagram Page to Follow </label>
      <input type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
  </div>
  </div>
  <div className='w-full'>
  <div class="mb-2">
      <label for="twitter" class="block mb-1 text-xs font-bold  text-gray-900 dark:text-white">Reddit Page to Follow </label>
        <input type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
    </div>
    <div class="mb-2">
      <label for="twitter" class="block mb-1 text-xs font-bold  text-gray-900 dark:text-white">Telegram to Follow </label>
        <input type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
    </div>
    <div class="mb-2">
      <label for="twitter" class="block mb-1 text-xs font-bold  text-gray-900 dark:text-white">Pintrest to Follow </label>
        <input type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
    </div>
    <div class="mb-2">
      <label for="twitter" class="block mb-1 text-xs font-bold  text-gray-900 dark:text-white">Linkedin to Follow </label>
        <input type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
    </div>
  </div>
</div>
       
  
        </div>
        <button onClick={() => stateChanger(5)} className=' mt-2 p-3 w-52 flex justify-center rounded-lg text-white font-bold text-sm bg-pink-600'>
              Save and Proceed 
        </button>
    </div>
  )
}

export default Socials