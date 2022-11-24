import React from 'react'
import Discord from './discord'
import Facebook from './facebook'
import Instagram from './instagram'
import Pintrest from './Pintrest'
import Reddit from './reddit'
import Telegram from './telegram'
import Twitter from './twitter'
const SocialMediaApi = () => {
  return (
    <div id='#SocialMintShare'>
     <h2 className='text-4xl text-center font-bold '>Social Accounts</h2>

    <div className='grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 mt-4'>
        <Facebook/>
        <Twitter/>
        <Instagram/>
        <Pintrest/>
        <Reddit/>
        <Telegram/>
        <Discord/>

    </div>
</div>
  )
}

export default SocialMediaApi