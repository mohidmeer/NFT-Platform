import React from 'react'
import Items from './Items'

const MetaEvents = () => {
  return (
    <div className='mt-6 grid grid-cols-5 grid-rows-4 gap-2 grid-flow-row-dense'>
        <div className=' col-start-5 row-span-2 h-full rounded-xl bg-gradient-to-br from-emerald-500 via-sky-700 to-amber-200 '>
         Filter


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