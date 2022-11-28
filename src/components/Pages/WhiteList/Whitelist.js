import React from 'react'
import WhitelistForm from './WhitelistForm'

const Whitelist = () => {
  return (
    <div className="mt-7 p-4 ">
      <h2 className='text-4xl font-bold'>Setup your whitelist </h2>
      <p className='mt-4 font-bold text-xs text-gray-600'>Setup and edit your whitelist here</p>
      <WhitelistForm/>



    </div>
  )
}

export default Whitelist