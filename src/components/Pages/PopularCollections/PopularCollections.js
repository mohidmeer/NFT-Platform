import React, { useState } from 'react'
import { Disclosure, Listbox, RadioGroup, Tab } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import TableItem from './TableItem'
import Trending from './Trending/Trending'
import Top from './Top/Top'
const timeline = [
    { id: 1, name: "Last 24 hours", unavailable: false },
    { id: 2, name: "Last 12 hours", unavailable: false },
    { id: 3, name: "Last 7 days", unavailable: false },
    { id: 4, name: "Last 30 days", unavailable: false },]



const PopularCollections = ( {tindex}) => {
  const [selectedIndex, setSelectedIndex] = useState(tindex)
  return (
    <div className="mt-7 p-4 ">

<Tab.Group defaultIndex={tindex} >
      <Tab.List  className={`flex gap-3 mb-3`}>
        <Tab as='button' className={ `tab-menu  `}>Trending</Tab>
        <Tab as='button'  className={`tab-menu `}>Top</Tab>
        
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel><Trending/></Tab.Panel>
        <Tab.Panel><Top/></Tab.Panel>
      </Tab.Panels>
    </Tab.Group>















      

     


    </div>
  );
}

export default PopularCollections