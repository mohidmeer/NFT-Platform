import React from 'react'
import { FaDiscord, FaFacebook, FaFacebookSquare, FaInstagram, FaInstagramSquare, FaPinterest, FaReddit, FaSquare, FaTelegram, FaTwitter, FaTwitterSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Detail = ({stateChanger}) => {
  return (
    <div className="w-1/3">
      <p className="font-bold text-sm text-gray-700">Step 3 of 5</p>
      <h3 className="font-bold text-4xl">Listing details</h3>
      <p className="font-bold mt-2">
        Enter in the details on your collection that will be used for your
        marketplace page on socialmint
      </p>

      <label
        for="message"
        class="mt-4 block mb-2 text-lg font-bold    text-gray-900 dark:text-white"
      >
        Collection Description
      </label>
      <textarea
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="2000 Unique NFTs"
      ></textarea>
      <div>
        <label
          for="first_name"
          class="mt-4 text-lg font-bold block mb-2  text-gray-900 dark:text-white"
        >
          Profile Image (500x500px)
        </label>
        <button className="font-bold text-sm p-3 w-52 bg-pink-600 rounded-xl text-white">
          Upload
        </button>
      </div>
      <h3 className='mt-4 text-lg font-bold block mb-2  text-gray-900 dark:text-white'>Derivative</h3>
      <label class="inline-flex relative items-center mb-5 cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer" />
        <div class="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        Is your artwork a derivative of other artwork on ANY blockchain?
        </span>
      </label>

      <div>
      <h3 className='mt-4 text-2xl font-bold block mb-2  text-gray-900 dark:text-white'>Catagories</h3>
      <div class="mb-6 mt-6">
          <label for="default-input" class="block mb-2 text-lg font-bold text-gray-900 dark:text-white">Primary Catagory</label>
          <input placeholder='' type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          <p className='text-sm font-bold'>Select the primary category that you would like for this collection to be listed under</p>
        </div>
        <div class="mb-6">
          <label for="default-input" class="block mb-2 text-lg font-bold  text-gray-900 dark:text-white">Secondary Catagory</label>
          <input placeholder='' type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          <p className='text-sm font-bold'>Select the secondary category for this collection to be listed under</p>
        </div>

        <div>
            <h3 className='mt-4 text-2xl font-bold block mb-2  text-gray-900 dark:text-white'>Social & Web Links</h3>
            <p className='text-sm font-bold'>Input your social and website links for your collection. These links will be displayed on your collection page</p>
            <div className='flex gap-x-2 mt-3'>
              <Link><FaFacebook   className='text-xl   text-facebook'  /></Link>
              <Link><FaInstagram  className='text-xl   text-instagram '/></Link>
              <Link><FaTwitter    className='text-xl   text-twitter '  /></Link>
              <Link><FaDiscord    className='text-xl   text-discord '  /></Link>
              <Link><FaPinterest  className='text-xl   text-pintrest ' /></Link>
              <Link><FaReddit  className='text-xl   text-reddit ' /></Link>
              <Link><FaTelegram   className='text-xl   text-telegram ' /></Link>
            </div>
        </div>
        <div class="mb-6 mt-6">
          <label for="default-input" class="block mb-2 text-lg font-bold text-gray-900 dark:text-white">Website Url (Optional)</label>
          <input placeholder='https://collection.io' type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          
        </div>
        <button onClick={() => stateChanger(4)} className=' mt-2 p-3 w-52 flex justify-center rounded-lg text-white font-bold text-sm bg-pink-600'>
              Save and Proceed 
            </button>

      </div>
    </div>
  );
}

export default Detail