import React, { useState } from 'react'
import { Listbox,RadioGroup } from "@headlessui/react";
import ComingSoon from './ComingSoon/ComingSoon';
import Live from './Live/Live';
import SDays from './SDays/SDays';
const LaunchPadDrops = () => {

    const [plan, setPlan] = useState('startup')
  return (
    <div>
        <div className="flex justify-start gap-5 ">
        <h2 className="text-3xl font-bold">Launchpad Drops</h2>
        <RadioGroup as='div' className={'flex justify-between border p-1 border-dark justify-items-center mt-1     rounded-full  '}  value={plan} onChange={setPlan}>
      
        <RadioGroup.Option value="Solana">
        {({ checked }) => (
          <span className={`px-4 py-1 rounded-full ${checked ? 'bg-pink-600' : ''}`}>Next 7 days</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="ethereium">
        {({ checked }) => (
          <span className={`px-4 py-1 rounded-full  ${checked ? 'bg-pink-600' : ''}`}>Coming soon</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="all">
        {({ checked }) => (
          <span className={`px-4 py-1 rounded-full  ${checked ? 'bg-pink-600' : ''}`}>Live</span>
        )}
      </RadioGroup.Option>
        </RadioGroup>

        </div>
      <ComingSoon/>
      <Live/>
      <SDays/>


    </div>
  )
}

export default LaunchPadDrops