import React from 'react'
import Auctions from './Auctions/Auctions'
import CreatorCommunities from './CreatearCommunities/CreatorCommunities'
import Hero from './Hero/Hero'
import LaunchPadDrops from './LaunchpadDrops/LaunchPadDrops'
import PopularCollection from './PopularCollections/PopularCollection'
import SocialMediaApi from './SocialMediaApi/SocialMediaApi'
import Upvoted from './Upvoted/Upvoted'
import WhitelistOppurtunities from './WhiteListOppurtunities/WhitelistOppurtunities'
import Youtube from './Youtube/Youtube'

const Landing = () => {
  return (
  <>

  <div className=' p-4  '>


   <div className='lg:px-24 px-0         p-4  lg:pb-8  border-b-2 border-white  mt-8'> <Hero /> </div>
   <div className='lg:px-24 px-0         p-4  lg:pb-8  border-2 border-white  mt-8'> <SocialMediaApi /> </div>
    <div className='mt-24 border-2       p-4 lg:pb-8 border-white '><PopularCollection/></div>
    <div className='mt-16 border-2       p-4 lg:pb-8 border-white '><LaunchPadDrops/></div>
    <div className='mt-8 border-2  p-4 lg:pb-8 border-white '> <Auctions /> </div>
    <div className='mt-8 border-2  p-4 lg:pb-8 border-white '> <Youtube/> </div>
    <div className='mt-8 border-2  p-4 lg:pb-8 border-white '> <CreatorCommunities /> </div>

   

  </div>
    
    


  
  
  </>

  
    
  )
}

export default Landing