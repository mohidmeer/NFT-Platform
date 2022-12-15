import { Disclosure, Tab } from '@headlessui/react'
import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { MdArrowForwardIos } from 'react-icons/md'
import Buy from './Buy'
import Sell from './Sell'

const Cart = () => {
  return (
    <div className=" h-screen border-l border-white">
      <Disclosure>
        <Disclosure.Button
          className={`flex text-2xl hover:bg-white py-2 px-3 rounded `}
        >
          
          <MdArrowForwardIos className="rotate-180 ui-open:rotate-90 ui-open:mr-56 ui-open:transform" />
          <FaCartPlus />
        </Disclosure.Button>
        <Disclosure.Panel className={`flex  flex-col  justify-start border-t border-white `}>

        <Tab.Group>
      <Tab.List className={`flex gap-4 mt-2 p-3`}>
        <Tab className={`rounded p-2 w-full font-bold ui-selected:bg-pink-600 ui-selected:text-white ui-not-selected:bg-white ui-not-selected:text-black`}>Buy</Tab>
        <Tab className={`rounded p-2 w-full font-bold ui-selected:bg-pink-600 ui-selected:text-white ui-not-selected:bg-white ui-not-selected:text-black`}>Sell</Tab>
        
       
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className={`p-4`}><Buy/></Tab.Panel>
        <Tab.Panel className={`p-4`}><Sell/></Tab.Panel>
      </Tab.Panels>
    </Tab.Group>

        

        










        </Disclosure.Panel>
      </Disclosure>
    </div>
  )
}

export default Cart