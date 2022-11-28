import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FaDiscord, FaFacebookF, FaPinterest, FaReddit, FaTelegram } from 'react-icons/fa'
import { GrTwitter } from 'react-icons/gr'
import { MdFacebook } from 'react-icons/md'

const Insights = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4'>
        <div className=' shadow-xl flex bg-white p-5 rounded-lg gap-x-4'>
            <div className='text-5xl text-facebook'><FaFacebookF/>  </div> 
            <div><p>0</p><p className='font-bold text-gray-600'>Requests</p></div> 
        </div>
        <div className='shadow-xl flex bg-white p-5 rounded-lg gap-x-4'>
            <div className='text-5xl text-instagram'><BsInstagram/>  </div> 
            <div><p>0</p><p className='font-bold text-gray-600'>Requests</p></div> 
        </div>
        <div className='shadow-xl flex bg-white p-5 rounded-lg gap-x-4'>
            <div className='text-5xl text-twitter'><GrTwitter/>  </div> 
            <div><p>0</p><p className='font-bold text-gray-600'>Requests</p></div> 
        </div>
        <div className='shadow-xl flex bg-white p-5 rounded-lg gap-x-4'>
            <div className='text-5xl text-reddit'><FaReddit/>  </div> 
            <div><p>0</p><p className='font-bold text-gray-600'>Requests</p></div> 
        </div>
        <div className='shadow-xl flex bg-white p-5 rounded-lg gap-x-4'>
            <div className='text-5xl text-pintrest'><FaPinterest/>  </div> 
            <div><p>0</p><p className='font-bold text-gray-600'>Requests</p></div> 
        </div>
        <div className='shadow-xl flex bg-white p-5 rounded-lg gap-x-4'>
            <div className='text-5xl text-telegram'><FaTelegram/>  </div> 
            <div><p>0</p><p className='font-bold text-gray-600'>Requests</p></div> 
        </div>
        <div className='lg:col-span-2 shadow-xl flex bg-white p-5 rounded-lg gap-x-4'>
            <div className='text-5xl text-discord'><FaDiscord/>  </div> 
            <div><p>0</p><p className='font-bold text-gray-600'>Requests</p></div> 
        </div>
        


    </div>
  )
}

export default Insights