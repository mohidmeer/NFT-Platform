import { RadioGroup, Tab } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { BsArrowRight, BsShield, BsShieldCheck } from 'react-icons/bs'
import { FiCheck } from 'react-icons/fi'
import { HiShieldCheck } from 'react-icons/hi'

const Intro = ( {stateChanger}) => {
    let [blockchain, setBlockchain] = useState('startup')
    let [copyright, setCopyright] = useState('startup')
  return (
    <div className='w-1/3'>
        <p className='font-bold text-sm text-gray-700'>Step 1 of 6</p>
        <h3 className='font-bold text-3xl mt-4'>Blockchain</h3>
        
      <RadioGroup value={blockchain} onChange={setBlockchain}>
      <RadioGroup.Label></RadioGroup.Label>
      <RadioGroup.Option value="startup">
        {({ checked }) => (
          <span className={` ${checked ? 'dsa':'das'} flex justify-between font-bold p-4 bg-white rounded-lg w-full mt-2`}>Etherium {checked ? <FiCheck className='text-pink-600 text-3xl bg-app rounded-full p-1'/> : ''}</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="business">
        {({ checked }) => (
          <span className={` ${checked ? 'dsa':'das'} flex justify-between font-bold p-4 bg-white rounded-lg w-full mt-2`}>Polygon {checked ? <FiCheck className='text-pink-600 text-3xl bg-app rounded-full p-1'/> : ''}</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="enterprise">
        {({ checked }) => (
          <span className={` ${checked ? 'dsa':'das'} flex justify-between font-bold p-4 bg-white rounded-lg w-full mt-2`}>BNB {checked ? <FiCheck className='text-pink-600 text-3xl bg-app rounded-full p-1'/> : ''}</span>
        )}
      </RadioGroup.Option>
    </RadioGroup>
        <h3 className='font-bold text-3xl mt-4'>Copyright</h3>
        
      <RadioGroup value={copyright} onChange={setCopyright}>
      <RadioGroup.Label></RadioGroup.Label>
      <RadioGroup.Option value="startup">
        {({ checked }) => (
          <span className={` ${checked ? 'dsa':'das'} flex justify-between font-bold p-4 bg-white rounded-lg w-full mt-2`}>Creater {checked ? <FiCheck className='text-pink-600 text-3xl bg-app rounded-full p-1'/> : ''}</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="business">
        {({ checked }) => (
          <span className={` ${checked ? 'dsa':'das'} flex justify-between font-bold p-4 bg-white rounded-lg w-full mt-2`}>Licensed {checked ? <FiCheck className='text-pink-600 text-3xl bg-app rounded-full p-1'/> : ''}</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="enterprise">
        {({ checked }) => (
          <span className={` ${checked ? 'dsa':'das'} flex justify-between font-bold p-4 bg-white rounded-lg w-full mt-2`}>Non Licensed {checked ? <FiCheck className='text-pink-600 text-3xl bg-app rounded-full p-1'/> : ''}</span>
        )}
      </RadioGroup.Option>
    </RadioGroup>


    <div class="mb-6 mt-6">
          <label for="default-input" class="block mb-2 text-xl font-bold text-gray-900 dark:text-white">External Link</label>
          <p className='font-bold text-xs mb-2'>Providing and eternal link allows Buyers to find out more about you and helps to promote your community efforts</p>
          <input placeholder='https://yoursite.io' type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    </div>



    
           <button onClick={() => stateChanger(2)} className=' mt-2 p-3 w-36 flex justify-center rounded-lg text-white font-bold text-sm bg-pink-600'>
              Lets Go 
            </button>

            <p className='font-bold text-gray-700 mt-2'>By launching an NFT and or Collection on our Marketplace you have read and agree to abide by our Term of Service and Privacy Policy</p>
            <small>Use of our website and Service are subject to our
                 <a href="https://socialmint/terms-of-service.pdf" class=" font-bold text-pink-600">Terms of Service</a> and 
                 <a href="https://socialmint/privacy-policy.pdf" class="font-bold text-pink-600">Privacy Policy</a>.
            </small>
        {/* <p className='font-bold'>Which blockchain is your collection on?</p> */}
       




    </div>
  )
}

export default Intro