import { Disclosure, Menu, Tab } from '@headlessui/react'
import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { MdArrowForwardIos } from 'react-icons/md'
import Buy from './Buy'
import Sell from './Sell'

const Cart = () => {
  return (
    <div className=" border-white mt-2 w-full ">
      {/* <Menu as="div" class=" ml-auto relative inline-block text-left mr-2">
      <Menu.Button className={`ui-open:bg-white py-1 px-2 rounded flex text-2xl font-bold`}><MdArrowForwardIos className="rotate-180 ui-open:rotate-90 ui-open:transform" /><FaCartPlus /></Menu.Button>
      <Menu.Items className={`absolute right-0 z-10 mt-2 w-72 origin-top-right rounded-md   bg-white   shadow-2xl    border-2 border-green-400  ring-opacity-5 focus:outline-none  `}>
       
        <Tab.Group>
      <Tab.List as='div' className={`flex gap-4 mt-2 p-3`}>
        <Tab className={`rounded p-2 w-full font-bold ui-selected:bg-pink-600 ui-selected:text-white ui-not-selected:bg-white ui-not-selected:text-black`}>Buy</Tab>
        <Tab className={`rounded p-2 w-full font-bold ui-selected:bg-pink-600 ui-selected:text-white ui-not-selected:bg-white ui-not-selected:text-black`}>Sell</Tab>
        
       
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className={`p-4`}><Buy/></Tab.Panel>
        <Tab.Panel className={`p-4`}><Sell/></Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
      
      </Menu.Items>
      </Menu> */}


      {/* <Disclosure defaultOpen>
        <Disclosure.Button
          className={`flex text-2xl hover:bg-white py-2 px-3 rounded `}
        >
          
          <MdArrowForwardIos className="rotate-180 ui-open:rotate-90 ui-open:mr-56 ui-open:transform" />
          <FaCartPlus />
        </Disclosure.Button>
        <Disclosure.Panel className={`flex  flex-col  justify-start border-t border-white `}> */}

        <Tab.Group>
      <Tab.List className={`flex gap-5 mt-2 p-3`}>
        <Tab className={`rounded p-2 w-full font-bold ui-selected:bg-pink-600 ui-selected:text-white ui-not-selected:bg-white ui-not-selected:text-black`}>Buy</Tab>
        <Tab className={`rounded p-2 w-full font-bold ui-selected:bg-pink-600 ui-selected:text-white ui-not-selected:bg-white ui-not-selected:text-black`}>Sell</Tab>
        
       
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className={`p-4`}><Buy/></Tab.Panel>
        <Tab.Panel className={`p-4`}><Sell/></Tab.Panel>
      </Tab.Panels>
    </Tab.Group>

        

        










        {/* </Disclosure.Panel>
      </Disclosure> */}
    </div>
  )
}

export default Cart