import React from 'react'
import Items from './Items'

const LaunchServices = () => {
  return (
    <div className=''>
      <h2 className="lg:text-3xl md:text-2xl text-lg  font-bold inline"  >Launch Assist</h2><span className='ml-2 font-medium' >Need help launching your collection</span>
      <div className='grid mt-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-7 gap-2'>

        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>

      </div>
    </div>
  )
}

export default LaunchServices