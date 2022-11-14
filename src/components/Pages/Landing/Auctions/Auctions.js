import { RadioGroup } from '@headlessui/react'
import React from 'react'
import { useState } from 'react'
import Ended from './Ended/Ended'
import Live from './Live/Live'
import Upcomming from './Upcomming/Upcomming'
const Auctions = () => {

    const [section, setSection] = useState('live')
  return (
    <div>
      <div className="flex justify-start gap-x-5 lg:flex-row flex-col ">
        <h2 className="lg:text-3xl md:text-2xl text-lg font-bold">Auctions</h2>
        
        <RadioGroup as='div' className={'flex justify-between p-1 border border-dark  justify-items-center mt-1 rounded-full  '}  value={section} onChange={setSection}> 
      
        <RadioGroup.Option value="live">
        {({ checked }) => (
          <span className={`text-sm px-4 py-1 rounded-full ${checked ? 'bg-pink-600' : ''}`}>Live</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="ended">
        {({ checked }) => (
          <span className={`text-sm px-4 py-1 rounded-full  ${checked ? 'bg-pink-600' : ''}`}>Ended</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="upcoming">
        {({ checked }) => (
          <span className={`text-sm px-4 py-1 rounded-full  ${checked ? 'bg-pink-600' : ''}`}>Upcoming</span>
        )}
      </RadioGroup.Option>
        </RadioGroup>
      
         
      </div>

      {section=='live' ? <Live/> : ''}
      {section=='ended' ? <Ended/> : ''}
      {section=='upcoming' ? <Upcomming/> : ''}


   

    </div>
  )
}

export default Auctions