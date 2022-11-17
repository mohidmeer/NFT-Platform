import React from 'react'
import AuctionCard from './AuctionCard';

const Auctions = () => {
  return (
    <div className=" mt-6 ">
      <h3 className="text-4xl font-bold">Live Auction</h3>

      <div className="grid  lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2  gap-8  mt-6 ">
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
  );
}

export default Auctions