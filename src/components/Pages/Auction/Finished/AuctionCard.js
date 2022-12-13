import React from 'react'
import { Link } from 'react-router-dom'

const AuctionCard = () => {
  return (
  
    <div className="bg-dark rounded-xl transition ease-in-out delay-150 hover:translate-x-1 hover:translate-y-1 hover:scale-110 border-dark-2 border-2 ">
          <Link to="/auction/sol_princess_weekly_wish_2">
            
              <img 
                draggable="false"
                loading="lazy"
                className='rounded-2xl  '
                src="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://assets.nodemonkey.io/assets/15.png"
              />
           
            <div className=' lg:w-full md:w-full'>
            <h5 class="mb-2 text-center px-5 font-bold" >Node Monkey #16</h5>
            <p className='text-center px-5 text-sm text-pink-600'> Node Monkey</p>
              
              <div class="flex justify-between bg-dark-200 mx-3 mb-3 py-2 px-4 rounded-xl bg-dark-2  ">
                <div class="flex flex-col justify-between text-left">
                  <span class="text-sm  text-gray-500">
                    FINAL BID
                  </span>
                  <span class="fs-14px font-bold text-white-1 flex items-center">
                    
                    25.00 SOL
                  </span>
                </div>
                <div class="flex flex-col justify-between text-right w-36">
                  <span class="text-sm  text-gray-500">
                    AUCTION ENDED
                  </span>
                  <span class="fs-14px font-bold text-white-1 ">
                    1d 0h 39m
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
  )
}

export default AuctionCard