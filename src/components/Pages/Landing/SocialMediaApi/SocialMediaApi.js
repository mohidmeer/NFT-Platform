import React from 'react'
import Discord from './discord'
import Facebook from './facebook'
import Instagram from './instagram'
import Pintrest from './Pintrest'
import Reddit from './reddit'
import Telegram from './telegram'
import Twitter from './twitter'
const SocialMediaApi = ({title='text-center'}) => {
  return (
    <div id='SocialMintShare'>
     <h2 className={` ${title}  text-4xl  font-bold `}>Social Accounts</h2>
    <div className='grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 mt-4'>
        <Facebook/>
        <Twitter/>
        <Instagram/>
        <Pintrest/>
        <Reddit/>
        <Telegram/>
        <Discord/>
    </div>
    <h2 className='text-xl text-center font-bold text-gray-700 mt-4 '>Link your account to automatically post</h2>
</div>
  )
}

export default SocialMediaApi