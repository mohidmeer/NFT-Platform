import { RadioGroup } from '@headlessui/react'
import React, { useState } from 'react'
import All from './All/All'
import Etherium from './Ethereium/Etherium'
import Solana from './Solana/Solana'

const WhitelistOppurtunities = () => {
    const [plan, setPlan] = useState('solana')
  return (
    <div>
      <div className="flex justify-start gap-x-5 lg:flex-row flex-col ">
        <h2 className="lg:text-3xl md:text-2xl text-lg font-bold">Whitelist Upcoming Collections</h2>
        
        <RadioGroup as='div' className={'flex justify-between p-1 border border-dark  justify-items-center mt-1 rounded-full  '}  value={plan} onChange={setPlan}> 
      
        <RadioGroup.Option value="solana">
        {({ checked }) => (
          <span className={`text-sm px-4 py-1 rounded-full ${checked ? 'bg-pink-600' : ''}`}>Solana</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="ethereium">
        {({ checked }) => (
          <span className={`text-sm px-4 py-1 rounded-full  ${checked ? 'bg-pink-600' : ''}`}>Ethereium</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="all">
        {({ checked }) => (
          <span className={`text-sm px-4 py-1 rounded-full  ${checked ? 'bg-pink-600' : ''}`}>Show all</span>
        )}
      </RadioGroup.Option>
        </RadioGroup>
        <div className="ml-auto"><a className="hidden lg:block text-sm border border-dark  rounded-xl"><span>See All</span></a> </div>
         
      </div>

      {plan=='solana' ? <Solana/> : ''}
      {plan=='ethereium' ? <Etherium/> : ''}
      {plan=='all' ? <All/> : ''}


   

    </div>
  )
}

export default WhitelistOppurtunities