import React, { useState } from "react";
import { Listbox,RadioGroup } from "@headlessui/react";

import { MdOutlineArrowDropDown } from "react-icons/md";
import Item from "./Item";
import All from "./All/All";
import Etherium from "./Ethereuim/Etherium";
import Solana from "./Solana/Solana";
const timeline = [
  { id: 1, name: "Last 24 hours", unavailable: false },
  { id: 2, name: "Last 12 hours", unavailable: false },
  { id: 3, name: "Last 7 days", unavailable: false },
  { id: 4, name: "Last 30 days", unavailable: true },
  
];
const PopularCollection = () => {
  const [selectedTime, setSelectedTime] = useState(timeline[0]);
  const [plan, setPlan] = useState('solana')
  return (
    <div>
      <div className="flex justify-start gap-x-5 ">
        <h2 className="text-3xl font-bold">Popular Collections</h2>
         <div className="mt-1">
        <Listbox
          as="div"
          className={
            "  relative  text-left border px-4 py-1  rounded"
          }
          value={selectedTime}
          onChange={setSelectedTime}>

          <Listbox.Button className={'justify-center text-sm font-medium text-white shadow-sm '}>  {selectedTime.name}</Listbox.Button>
          <Listbox.Options as="div" className={'absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md  bg-dark-2 shadow-lg text-white ring-opacity-5 focus:outline-none'}>
            {timeline.map((timeline) => (
              <Listbox.Option 
                className={'text-white block px-4 py-1 text-sm hover:bg-dark'}
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
        <RadioGroup as='div' className={'flex justify-between p-1 border border-dark  justify-items-center mt-1 rounded-full  '}  value={plan} onChange={setPlan}> 
      
        <RadioGroup.Option value="solana">
        {({ checked }) => (
          <span className={`px-4 py-1 rounded-full ${checked ? 'bg-pink-600' : ''}`}>Solana</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="ethereium">
        {({ checked }) => (
          <span className={`px-4 py-1 rounded-full  ${checked ? 'bg-pink-600' : ''}`}>Ethereium</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="all">
        {({ checked }) => (
          <span className={`px-4 py-1 rounded-full  ${checked ? 'bg-pink-600' : ''}`}>Show all</span>
        )}
      </RadioGroup.Option>
        </RadioGroup>
         <a className="ml-auto text-xl border border-dark px-2 rounded-xl">See All</a>
      </div>

      {plan=='solana' ? <Solana/> : ''}
      {plan=='ethereium' ? <Etherium/> : ''}
      {plan=='all' ? <All/> : ''}


   

    </div>
  );
};

export default PopularCollection;
