import React, { useState } from 'react'
import { Disclosure, Listbox, RadioGroup, Tab } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import TableItem from './TableItem'
const timeline = [
    { id: 1, name: "Last 24 hours", unavailable: false },
    { id: 2, name: "Last 12 hours", unavailable: false },
    { id: 3, name: "Last 7 days", unavailable: false },
    { id: 4, name: "Last 30 days", unavailable: false },]
const Trending = () => {
    const [selectedTime, setSelectedTime] = useState(timeline[3]);
    const [plan, setPlan] = useState('ether')
  return (
    <div>

<div className="flex justify-between lg:flex-row flex-col">
        

        <div>
        <RadioGroup as='div' className={'flex justify-between p-1 border border-dark  justify-items-center mt-1 rounded-full  '}  value={plan} onChange={setPlan}> 
      
        <RadioGroup.Option value="ether">
        {({ checked }) => (
          <span className={`text-sm px-4 py-1 font-bold  rounded-full ${checked ? 'bg-pink-600 text-white' : 'text-black'}`}>Ether</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="binance">
        {({ checked }) => (
          <span className={`text-sm px-4 py-1 font-bold rounded-full   ${checked ? 'bg-pink-600 text-white':'text-black'}`}>Binance</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="polygon">
        {({ checked }) => (
          <span className={`text-sm px-4 py-1 font-bold rounded-full   ${checked ? 'bg-pink-600 text-white':'text-black'}`}>Polygon</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="all">
        {({ checked }) => (
          <span className={`text-sm px-4 py-1 rounded-full font-bold  ${checked ? 'bg-pink-600 text-white' : 'text-black'}`}>Show all</span>
        )}
      </RadioGroup.Option>
        </RadioGroup>
        </div>

        <div>
          <Listbox
            as="div"
            className={
              "  lg:block  relative  text-left border border-dark   px-6 py-1  rounded"
            }
            value={selectedTime}
            onChange={setSelectedTime}
          >
            <Listbox.Button
              className={
                "justify-center text-sm font-medium  shadow-sm "
              }
            >
              {" "}
              {selectedTime.name}
            </Listbox.Button>
            <Listbox.Options
              as="div"
              className={
                "absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-dark-2   shadow-lg  ring-opacity-5 focus:outline-none"
              }
            >
              {timeline.map((timeline) => (
                <Listbox.Option
                  className={" block px-4 py-1 text-sm hover:bg-dark"}
                  key={timeline.id}
                  value={timeline}
                  disabled={timeline.unavailable}
                >
                  {timeline.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        </div>
      </div>

      
      <div className="grid  lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2  gap-8  mt-6 ">
        <TableItem/>        
      </div>
    </div>
  )
}

export default Trending