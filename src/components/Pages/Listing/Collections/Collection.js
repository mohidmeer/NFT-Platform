import { RadioGroup } from '@headlessui/react';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Items from './Items';

const Collection = () => {
    const [plan, setPlan] = useState('ether')
  return (
    <div className=" mt-6 ">
      <h3 className="text-4xl font-bold">List Your Collection</h3>
   <div className='flex justify-between'>
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
   <NavLink className="bg-pink-600 py-3 px-4 hover:opacity-80 text-sm font-bold text-white rounded-xl  " to='/create-collection' >Create New Collection</NavLink>

   </div>
      <div className="grid  lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2  gap-8  mt-6 ">
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        {/* <Items/>
        <Items/>
        <Items/> */}
      </div>





    </div>
  );
}

export default Collection