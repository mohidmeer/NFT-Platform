import React, { useState } from 'react'
import FAuctions from './Finished/Auctions'
import Hero from './Hero/Hero'
import Auctions from './Live/Auctions'

const Auction = () => {
  return (
    <div className='mt-7 p-4  '>
        <Hero/>
        <Auctions/>
        <FAuctions/>

     
    </div>
    )
}

export default Auction