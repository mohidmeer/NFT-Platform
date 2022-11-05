import React from 'react'
import AuctionCard from './AuctionCard'

const FAuctions = () => {
  return (
    <div className="text-white mt-6 ">
      <h3 className="text-4xl font-bold">Finished Auctions</h3>

      <div className="grid  lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2  gap-8   mt-6 ">

        <AuctionCard/>
        <AuctionCard/>
        <AuctionCard/>
        <AuctionCard/>
        <AuctionCard/>
        <AuctionCard/>
        <AuctionCard/>
        <AuctionCard/>




      </div>





    </div>
  )
}

export default FAuctions