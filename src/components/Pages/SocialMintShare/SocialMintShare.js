import React from 'react'
import SocialMediaApi from '../Landing/SocialMediaApi/SocialMediaApi'
import Insights from './Insights'

const SocialMintShare = () => {
  return (
    <div className='p-4'>
        <div className='lg:px-16 md:px-8 px-0   rounded-xl      p-4  lg:pb-8  border-2 border-white  mt-8'> <Insights /> </div>
        <div className='lg:px-24 md:px-16  px-0   rounded-xl      p-4  lg:pb-8  border-2 border-white  mt-8'> <SocialMediaApi /> </div>


    </div>
  )
}

export default SocialMintShare