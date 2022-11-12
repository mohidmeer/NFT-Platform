import React from 'react'
import Hero from './Hero/Hero'
import LaunchPadDrops from './LaunchpadDrops/LaunchPadDrops'
import PopularCollection from './PopularCollections/PopularCollection'
import WhitelistOppurtunities from './WhiteListOppurtunities/WhitelistOppurtunities'

const Landing = () => {
  return (
  <>

  <div className='mt-7 p-4 '>
   <div className='px-0  mt-8'> <Hero /> </div>
    <div className='mt-24'><PopularCollection/></div>
    <div className='mt-16'><LaunchPadDrops/></div>
    <div className='mt-16'><WhitelistOppurtunities/></div>

  </div>
    
    


  
  
  </>

  
    
  )
}

export default Landing