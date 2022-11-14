import React from 'react'
import Item from '../WhiteListOppurtunities/Item'
import Items from './Items'

const Upvoted = () => {
  return (
    <div className=''>
      <h2 className="lg:text-3xl md:text-2xl text-lg  font-bold">Upvoted</h2>
      <div className='grid mt-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-7 gap-2'>

        <Items/>
        <Items/>
        <Items/>

      </div>
    </div>
  )
}

export default Upvoted