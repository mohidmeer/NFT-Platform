import { RadioGroup, Tab } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { BsArrowRight, BsShield, BsShieldCheck } from 'react-icons/bs'
import { FiCheck } from 'react-icons/fi'
import { HiShieldCheck } from 'react-icons/hi'

const Intro = ( {stateChanger}) => {
    let [plan, setPlan] = useState('startup')
  return (
    <div className='w-1/3'>
        <p className='font-bold text-sm text-gray-700'>Step 1 of 6</p>
        <h3 className='font-bold text-3xl'>Let's list your collection!</h3>
        <p className='font-bold'>Which blockchain is your collection on?</p>
        <Tab.Group  >
    
      <Tab.List>
      <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={` ${selected ? 'dsa':'das'} flex justify-between font-bold p-4 bg-white rounded-lg w-full mt-2
                
                `
              }
            >
              Etherium {selected ? <FiCheck className='text-pink-600 text-3xl bg-app rounded-full p-1'/> : ''}
            </button>
          )}
      </Tab>
      <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={` ${selected ? 'dsa':'das'} flex justify-between font-bold p-4 bg-white rounded-lg w-full mt-2
                
                `
              }
            >
              BNB Matic {selected ? <FiCheck className='text-pink-600 text-3xl bg-app rounded-full p-1'/> : ''}
            </button>
          )}
      </Tab>
      </Tab.List>
      <p className='font-bold'>Is the artwork in your collection, profile picture, and banner either your original artwork or artwork you have legal permission to use, distribute, and sell?</p>

      <RadioGroup value={plan} onChange={setPlan}>
      <RadioGroup.Label></RadioGroup.Label>
      <RadioGroup.Option value="startup">
        {({ checked }) => (
          <span className={` ${checked ? 'dsa':'das'} flex justify-between font-bold p-4 bg-white rounded-lg w-full mt-2`}>Yes,I am Author {checked ? <FiCheck className='text-pink-600 text-3xl bg-app rounded-full p-1'/> : ''}</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="business">
        {({ checked }) => (
          <span className={` ${checked ? 'dsa':'das'} flex justify-between font-bold p-4 bg-white rounded-lg w-full mt-2`}>Yes,I have License to use art {checked ? <FiCheck className='text-pink-600 text-3xl bg-app rounded-full p-1'/> : ''}</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="enterprise">
        {({ checked }) => (
          <span className={` ${checked ? 'dsa':'das'} flex justify-between font-bold p-4 bg-white rounded-lg w-full mt-2`}>No {checked ? <FiCheck className='text-pink-600 text-3xl bg-app rounded-full p-1'/> : ''}</span>
        )}
      </RadioGroup.Option>
    </RadioGroup>
      <Tab.Panels>
        <Tab.Panel>
            <button onClick={() => stateChanger(2)} className=' mt-2 p-3 w-36 flex justify-center rounded-lg text-white font-bold text-sm bg-pink-600'>
              Lets Go 
            </button>

            <div className='flex mt-6 gap-2'>
                <HiShieldCheck className='font-bold text-2xl '/>
                <p className='font-bold'>Process protection</p>
            </div>
            <small>Use of our website and Service are subject to our
                 <a href="https://socialmint/terms-of-service.pdf" class=" font-bold text-pink-600">Terms of Service</a> and 
                 <a href="https://socialmint/privacy-policy.pdf" class="font-bold text-pink-600">Privacy Policy</a>.
            </small>


        </Tab.Panel>
        <Tab.Panel>
            <div>
                <h2 className='text-2xl font-bold'>
                Does your collection adopt the Metaplex Certified Collections standard?
                </h2>
                <label class="inline-flex relative items-center mb-5 mt-3 cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer"/>
                  <div class="w-9 h-5 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
              </label><br/>
              <p className='font-bold text-sm text-gray-600'>List Immediately with Metaplex Certified Collections standard</p>


            </div>

           <button onClick={() => stateChanger(2)} className=' mt-2 p-3 w-36 flex justify-center rounded-lg text-white font-bold text-sm bg-pink-600'>
              Lets Go 
            </button>

            <div className='flex mt-6 gap-2'>
                <HiShieldCheck className='font-bold text-2xl '/>
                <p className='font-bold'>Process protection</p>
            </div>
            <small>Use of our website and Service are subject to our
                 <a href="https://socialmint/terms-of-service.pdf" class=" font-bold text-pink-600">Terms of Service</a> and 
                 <a href="https://socialmint/privacy-policy.pdf" class="font-bold text-pink-600">Privacy Policy</a>.
            </small>


        </Tab.Panel>
        
      </Tab.Panels>
    </Tab.Group>




    </div>
  )
}

export default Intro