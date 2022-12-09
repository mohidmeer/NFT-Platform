import React, { useState } from "react";
import { Listbox,RadioGroup } from "@headlessui/react";

import { MdOutlineArrowDropDown } from "react-icons/md";
import Item from "./Item";
import All from "./All/All";
import Ether from "./Ether/Ether";
import Binance from "./Binance/Binance";
import Polygon from "./Polygon/Polygon";
const timeline = [
  { id: 1, name: "Last 24 hours", unavailable: false },
  { id: 2, name: "Last 12 hours", unavailable: false },
  { id: 3, name: "Last 7 days", unavailable: false },
  { id: 4, name: "Last 30 days", unavailable: true },
  
];
const PopularCollection = ({name}) => {
  const [selectedTime, setSelectedTime] = useState(timeline[3]);
  const [plan, setPlan] = useState('ether')
  return (
    <div>
      <div className="flex justify-start gap-x-5 lg:flex-row flex-col ">
        <h2 className="lg:text-3xl md:text-2xl text-lg font-bold">{name}</h2>
         <div className="mt-1">
        <Listbox
          as="div"
          className={
            " hidden lg:block  relative  text-left border  border-dark px-6 py-1  rounded"
          }
          value={selectedTime}
          onChange={setSelectedTime}>

          <Listbox.Button className={'justify-center text-sm font-medium border rounded  shadow-sm '}>  {selectedTime.name}</Listbox.Button>
          <Listbox.Options as="div" className={'absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md  bg-dark-2 shadow-lg  ring-opacity-5 focus:outline-none'}>
            {timeline.map((timeline) => (
              <Listbox.Option 
                className={' block px-4 py-1 text-sm hover:bg-dark'}
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
        <div className="ml-auto"><a className="hidden lg:block text-sm border border-dark  rounded-xl"><span>See All</span></a> </div>
         
      </div>

      {plan=='ether' ? <Ether/> : ''}
      {plan=='binance' ? <Binance/> : ''}
      {plan=='polygon' ? <Polygon/> : ''}
      {plan=='all' ? <All/> : ''}


   

    </div>
  );
};

export default PopularCollection;
