import React, { useState } from 'react'
import { Listbox,RadioGroup } from "@headlessui/react";
import ComingSoon from './ComingSoon/ComingSoon';
import Live from './Live/Live';
import SDays from './SDays/SDays';
const LaunchPadDrops = () => {

    const [plan, setPlan] = useState('live')
  return (
    <div>
        <div className="flex justify-start gap-5 lg:flex-row flex-col ">
        <h2 className="lg:text-3xl md:text-2xl text-lg  font-bold">Launchpad Drops</h2>
        <RadioGroup as='div' className={'flex justify-between border p-1 border-dark justify-items-center mt-1     rounded-full  '}  value={plan} onChange={setPlan}>
      
        <RadioGroup.Option value="sdays">
        {({ checked }) => (
          <span className={`text-sm px-4 py-1 rounded-full ${checked ? 'bg-pink-600' : ''}`}>Next 7 days</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="comingsoon">
        {({ checked }) => (
          <span className={`text-sm px-4 py-1 rounded-full  ${checked ? 'bg-pink-600' : ''}`}>Coming soon</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="live">
        {({ checked }) => (
          <span className={`text-sm px-4 py-1 rounded-full  ${checked ? 'bg-pink-600' : ''}`}>Live</span>
        )}
      </RadioGroup.Option>
        </RadioGroup>
        </div>
      {plan=='live'   ? <Live/>: ''}
      {plan=='sdays'  ? <SDays/>: ''         }
      {plan=='comingsoon'  ? <ComingSoon/>: ''}


    </div>
  )
}

export default LaunchPadDrops