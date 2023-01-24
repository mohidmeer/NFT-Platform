import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { AUCTION_NFTS } from '../../../graphql/queries/nftQueries'
import Upcomming from '../Launchpad/Upcomming/Upcomming'
import UpcomingDrops from '../UpcomingDrops/UpcomingDrops'
import AuctionItem from './AuctionItem'
import AuctionCard from './Live/AuctionCard'
import Auctions from './Live/Auctions'
import LiveDrops from './LiveDrops/LiveDrops'

const Auction = () => {
  const {data, loading, error} = useQuery(AUCTION_NFTS)

  return (
    <div className='mt-7 p-4  '>
      <div className='border-2 p-4 lg:p-8 border-white mt-16 '>
        <h3 className="text-4xl font-bold">Live Auctions</h3>
        <div className="grid  lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2  gap-8  mt-6 ">
          {
            data?.auctionNfts.map((item, index) => (
              <AuctionCard item={item}/>
            ))
          }
        </div>
      </div>

      <div className='border-2 p-4 lg:p-8 border-white mt-4 '>
        <h3 className="text-4xl font-bold">Finished Auctions</h3>

        <div className="grid  lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2  gap-8  mt-6 ">
          <AuctionCard />
        </div>

      </div>


    </div>
  )
}

export default Auction