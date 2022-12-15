import { Disclosure, RadioGroup } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import { MdArrowForwardIos } from 'react-icons/md'
import { RiArrowDropRightLine } from 'react-icons/ri'

const SideFilter = () => {
    let [plan, setPlan] = useState('startup')
  return (
    <div className=" h-screen border-r border-white">
      <Disclosure>
        <Disclosure.Button
          className={`flex text-2xl hover:bg-white py-2 px-3 rounded `}
        >
          <FaFilter />
          <MdArrowForwardIos className=" ui-open:rotate-90 ui-open:ml-56 ui-open:transform" />
        </Disclosure.Button>
        <Disclosure.Panel className={`flex  flex-col  justify-start border-t border-white `}>

       <div className='flex hover:bg-white font-bold justify-between p-4'>
        <p className='font-bold'>Buy Now</p>
       <label class="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer"  />
            <div class="w-11 h-6 bg-gray-300 rounded-full peer peer-focus:ring-4 peer-focus:ring-green-200 dark:peer-focus:ring-green-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-pink-600"></div>
        </label>   
       </div>

        <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className={`flex hover:bg-white font-bold justify-between p-4`}>
            Marketplace
            <MdArrowForwardIos className={`${open ? 'rotate-90 transform' : ''} mt-1 mr-3  `} />
          </Disclosure.Button>
          <Disclosure.Panel className={`flex  flex-col  justify-start border-t border-white `} > 
         </Disclosure.Panel>
        </>
      )}
        </Disclosure>

        <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className={`flex hover:bg-white font-bold justify-between p-4`}>
            Price
            <MdArrowForwardIos className={`${open ? 'rotate-90 transform' : ''} mt-1 mr-3  `} />
          </Disclosure.Button>
          <Disclosure.Panel className={`flex  flex-col  justify-start border-t border-white `} > 
         </Disclosure.Panel>
        </>
      )}
        </Disclosure>
        
        <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className={`flex hover:bg-white font-bold justify-between p-4`}>
            Background
            <MdArrowForwardIos className={`${open ? 'rotate-90 transform' : ''} mt-1 mr-3  `} />
          </Disclosure.Button>
          <Disclosure.Panel className={`flex  flex-col  justify-start border-t border-white `} > 
         </Disclosure.Panel>
        </>
      )}
        </Disclosure>
        
        <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className={`flex hover:bg-white font-bold justify-between p-4`}>
            Clothes
            <MdArrowForwardIos className={`${open ? 'rotate-90 transform' : ''} mt-1 mr-3  `} />
          </Disclosure.Button>
          <Disclosure.Panel className={`flex  flex-col  justify-start border-t border-white `} > 
         </Disclosure.Panel>
        </>
      )}
        </Disclosure>
        
        <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className={`flex hover:bg-white font-bold justify-between p-4`}>
            Earrings
            <MdArrowForwardIos className={`${open ? 'rotate-90 transform' : ''} mt-1 mr-3  `} />
          </Disclosure.Button>
          <Disclosure.Panel className={`flex  flex-col  justify-start border-t border-white `} > 
         </Disclosure.Panel>
        </>
      )}
        </Disclosure>
        
        <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className={`flex hover:bg-white font-bold justify-between p-4`}>
            Eyes
            <MdArrowForwardIos className={`${open ? 'rotate-90 transform' : ''} mt-1 mr-3  `} />
          </Disclosure.Button>
          <Disclosure.Panel className={`flex  flex-col  justify-start border-t border-white `} > 
         </Disclosure.Panel>
        </>
      )}
        </Disclosure>
        
        <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className={`flex hover:bg-white font-bold justify-between p-4`}>
            Fur
            <MdArrowForwardIos className={`${open ? 'rotate-90 transform' : ''} mt-1 mr-3  `} />
          </Disclosure.Button>
          <Disclosure.Panel className={`flex  flex-col  justify-start border-t border-white `} > 
         </Disclosure.Panel>
        </>
      )}
        
        </Disclosure>
        
        <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className={`flex hover:bg-white font-bold justify-between p-4`}>
            Hat
            <MdArrowForwardIos className={`${open ? 'rotate-90 transform' : ''} mt-1 mr-3  `} />
          </Disclosure.Button>
          <Disclosure.Panel className={`flex  flex-col  justify-start border-t border-white `} > 
         </Disclosure.Panel>
        </>
      )}
        </Disclosure>
          


















        </Disclosure.Panel>
      </Disclosure>
    </div>
  );
}

export default SideFilter