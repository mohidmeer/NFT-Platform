import React, { useState } from 'react'
import Upcomming from '../Launchpad/Upcomming/Upcomming'
import UpcomingDrops from '../UpcomingDrops/UpcomingDrops'
import AuctionItem from './AuctionItem'
import Auctions from './Live/Auctions'
import LiveDrops from './LiveDrops/LiveDrops'

const Auction = () => {
  return (
    <div className='mt-7 p-4  '>

      
      <div className='border-2 p-4 lg:p-8 border-white mt-16 '>
        <Auctions/>
      </div>
      <div className='border-2 p-4 lg:p-8 border-white mt-4 '>
        <LiveDrops/>
      </div>

     
    </div>
    )
}

export default Auction