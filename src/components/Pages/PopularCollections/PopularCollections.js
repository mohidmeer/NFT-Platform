import React, { useState } from 'react'
import { Disclosure, Listbox, RadioGroup, Tab } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import Trending from './Trending/Trending'
import Top from './Top/Top'
import BlueChips from './BlueChips/BlueChips'
import Celebrity from './Celebrity/Celebrity'
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
      <Tab.List  className={`flex gap-6 mb-3`}>
        <Tab as='button'  className={ `tab-menu  `}>Our Collection</Tab>
        <Tab as='button'  className={`tab-menu `}>Trending</Tab>
        <Tab as='button'  className={`tab-menu `}>Blue Chips</Tab>
        <Tab as='button'  className={`tab-menu `}>Celebrity</Tab>
        
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel><Trending/></Tab.Panel>
        <Tab.Panel><Top/></Tab.Panel>
        <Tab.Panel><BlueChips/></Tab.Panel>
        <Tab.Panel><Celebrity/></Tab.Panel>
      </Tab.Panels>
    </Tab.Group>

    </div>
  );
}

export default PopularCollections