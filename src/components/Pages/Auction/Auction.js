import React, { useState } from 'react'
import FAuctions from './Finished/Auctions'
import Hero from './Hero/Hero'
import Auctions from './Live/Auctions'

const Auction = () => {
  return (
    <div className='mt-7 p-4  '>

      <div className=' '>
        <Hero/>
      </div>
      <div className='border-2 p-4 lg:p-8 border-white mt-16 '>
        <Auctions/>
      </div>
      <div className='border-2 p-4 lg:p-8 border-white mt-4 '>
        <FAuctions/>
      </div>

     
    </div>
    )
}

export default Auction