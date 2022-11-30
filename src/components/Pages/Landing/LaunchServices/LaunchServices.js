import React from 'react'
import CryptoPr from './CryptoPr'
import CryptoPr2 from './CryptoPr2'

import NeoReach from './NeoReach'
import Omni from './Omni'
import SagIPL from './SagIPL'

const LaunchServices = () => {
  return (
    <div className=''>
      <h2 className="lg:text-3xl md:text-2xl text-lg  font-bold inline"  >Launch Assist</h2><span className='ml-2 font-medium' >Marketing & PR Services For Your Community</span>
      <div className='grid mt-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 gap-2'>

        <SagIPL/>
        <CryptoPr/>
        <NeoReach/>
        <Omni/>
        <CryptoPr2/>
      
     

      </div>
    </div>
  )
}

export default LaunchServices