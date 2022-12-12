import React, { useState } from 'react'
import { Disclosure, Listbox, RadioGroup, Tab } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import TableItem from './TableItem'
const timeline = [
    { id: 1, name: "Last 24 hours", unavailable: false },
    { id: 2, name: "Last 12 hours", unavailable: false },
    { id: 3, name: "Last 7 days", unavailable: false },
    { id: 4, name: "Last 30 days", unavailable: false },]
const Watchlist = () => {
    const [selectedTime, setSelectedTime] = useState(timeline[3]);
    const [plan, setPlan] = useState('ether')
  return (
    <div>
         <div className="flex justify-between lg:flex-row flex-col">
        <Disclosure as="div" className={`w-2/3 bg-dark-2 rounded-lg`}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-2 text-left text-sm font-medium text-gray-400 hover:bg-dark focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="">Search</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="mt-2 px-4 pt-4 pb-2 rounded  text-lg ">
              Select collections which match the following conditions:
              <div className='mt-2'>
                <button type="button" class="border border-pink-600 py-1 px-2  inline-flex justify-center items-center rounded-md ">+ Add filter</button>
                <button type="button" class=" bg-pink-600 py-1 px-2 inline-flex justify-center items-center rounded-md  ml-3 ">Search</button>
            </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        

        
      </div>

      
<div class="overflow-x-auto relative shadow-md sm:rounded-lg mt-4 border border-dark">
    <table class="w-full text-sm text-left  ">
        <thead class="text-xs  uppercase bg-dark ">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Collection
                </th>
                <th scope="col" class="py-3 px-6">
                    Volume Total
                </th>
                <th scope="col" class="py-3 px-6">
                   {selectedTime.name}
                </th>
                <th scope="col" class="py-3 px-6">
                  {selectedTime.name} %
                </th>
                <th scope="col" class="py-3 px-6">
                    Sales
                </th>
                <th scope="col" class="py-3 px-6">
                    Floor Price
                </th>
                <th scope="col" class="py-3 px-6">
                    Owners
                </th>
                <th scope="col" class="py-3 px-6">
                   Total Supply
                </th>
            </tr>
        </thead>
        <tbody>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            
            
            
            
            
           
        </tbody>
    </table>
</div>
    </div>
  )
}

export default Watchlist