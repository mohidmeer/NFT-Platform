import React, { useState } from 'react'
import Items from './Items'
import { Switch } from '@headlessui/react'
const MetaEvents = () => {
  const [enabledall, setEnabledAll] = useState(false)
  const [enabledmetaverse, setEnabledmetaverse] = useState(false)
  const [enabledroblox, setEnabledroblox] = useState(false)


  return (
    <div className='mt-6 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1    gap-2 grid-flow-row-dense'>
        <div className='hidden lg:block p-4  col-start-5 row-span-2 h-full rounded-xl bg-dark'>
          <h2 className='font-bold text-3xl'>Filters</h2>
          <hr/>
          <div className='mt-4 flex flex-col '>
            <div className='flex gap-3'>
             <Switch checked={enabledall} onChange={setEnabledAll} className={`${enabledall ? ' text-white bg-pink-600 ':' border '} px-2 py-1 rounded-xl `}>
            <span className="text-sm font-bold ">All</span>
            </Switch>
             <Switch checked={enabledmetaverse} onChange={setEnabledmetaverse} className={`${enabledmetaverse ? 'text-white bg-pink-600 ':' border '} px-2 py-1 rounded-xl `}>
            <span className="text-sm font-bold ">Metaverse</span>
           </Switch>
            <Switch checked={enabledroblox} onChange={setEnabledroblox} className={`${enabledroblox ?  'text-white bg-pink-600 ':' border '} px-2 py-1 rounded-xl `}>
            <span className="text-sm font-bold ">Roblox</span>
           </Switch>
            </div>
            <div className='flex gap-3 mt-4'>
             <Switch checked={enabledall} onChange={setEnabledAll} className={`${enabledall ? ' text-white bg-pink-600 ':' border '} px-2 py-1 rounded-xl `}>
            <span className="text-sm font-bold ">Land</span>
            </Switch>
             <Switch checked={enabledmetaverse} onChange={setEnabledmetaverse} className={`${enabledmetaverse ? 'text-white bg-pink-600 ':' border '} px-2 py-1 rounded-xl `}>
            <span className="text-sm font-bold ">Solana</span>
           </Switch>
            <Switch checked={enabledroblox} onChange={setEnabledroblox} className={`${enabledroblox ?  'text-white bg-pink-600 ':' border '} px-2 py-1 rounded-xl `}>
            <span className="text-sm font-bold ">Eth</span>
           </Switch>
            </div>


            
          </div>
         


        </div>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        
        
        
        

    </div>
  )
}

export default MetaEvents