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