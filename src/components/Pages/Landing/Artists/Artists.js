import React from 'react'
import DesignCrowd from './DesignCrowd'
import Fiver from './Fiver'
import Freelance from './Freelance'
import Toptal from './Toptal'
import Upwork from './Upwork'

const Artists = () => {
  return (
    <div className=''>
      <h2 className="lg:text-3xl md:text-2xl text-lg  font-bold inline">Freelance</h2><span className='ml-2 font-medium' >NFT Artist Market for your Community </span>
      <div className='grid mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-2'>

        <Fiver/>
        <Freelance/>
        <Upwork/>
        <Toptal/>
        <DesignCrowd/>
        
     

      </div>
    </div>
  )
}

export default Artists