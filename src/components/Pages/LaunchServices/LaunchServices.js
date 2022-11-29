import React from 'react'

import Community from '../Communities/Community'
import Artists from '../Landing/Artists/Artists'
import Auctions from '../Landing/Auctions/Auctions'
import Youtube from '../Landing/Youtube/Youtube'
import LaunchS from '../Landing/LaunchServices/LaunchServices'
import Launch from './Launch/Launch'

const LaunchServices = () => {
  return (
    <div className=' p-4  '>
   <div className='mt-8 border-2 rounded-xl  p-4 lg:pb-8 border-white '> <Auctions /> </div>
   <div className='mt-8 border-2 rounded-xl  p-4 lg:pb-8 border-white '> <Community /> </div>
   <div className='mt-8 border-2 rounded-xl  p-4 lg:pb-8 border-white '> <Launch /> </div>

   <div className='mt-8 border-2 rounded-xl  p-4 lg:pb-8 border-white '> <Youtube /> </div>
   <div className='mt-8 border-2 rounded-xl  p-4 lg:pb-8 border-white '> <Artists /> </div>
   <div className='mt-8 border-2 rounded-xl  p-4 lg:pb-8 border-white '> <LaunchS /> </div>


    </div>
  )
}

export default LaunchServices