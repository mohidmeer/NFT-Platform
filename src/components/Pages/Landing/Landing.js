import React from 'react'
import Hero from './Hero/Hero'
import LaunchPadDrops from './LaunchpadDrops/LaunchPadDrops'
import PopularCollection from './PopularCollections/PopularCollection'

const Landing = () => {
  return (
  <>

  <div className='container-fluid mx-auto'>
   <div className='px-0 md:px-10 lg:px-44 mt-8'> <Hero /> </div>
    <div className='mt-16 '><LaunchPadDrops/></div>
    <div className='mt-24 '><PopularCollection/></div>

  </div>
    
    


  
  
  </>

  
    
  )
}

export default Landing