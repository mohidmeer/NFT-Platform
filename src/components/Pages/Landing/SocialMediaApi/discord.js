import React from 'react'
import { FaDiscord } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Discord = () => {
  const notify = () => toast("Linking Discord");
  return (
<div onClick={notify} className= 'shadow-xl rounded-lg bg-white  font-bold p-2 text-center     '>
      <p className='border border-black text-sm  inline-block p-1 rounded-full  '>Click To Link </p>
      <div className='flex justify-center mt-2 border-dotted  border-b-2  border-black  '>
      <FaDiscord  className='text-discord text-4xl mb-2 ' />
      </div>
      <div className='flex justify-center mt-8 '>
        <FaDiscord  className='text-discord border-4 rounded-full text-6xl mb-2 ' />
      </div>
  
    </div>
      )
}

export default Discord