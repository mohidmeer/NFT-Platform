import React from 'react'
import { FaTelegram } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Telegram = () => {
  const notify = () => toast("Linking Telegram");
  return (
<div onClick={notify} className= 'shadow-xl rounded-lg bg-white  font-bold p-2 text-center     '>
      <p className=' text-sm border border-black  inline-block p-1 rounded-full  '>Click To Link </p>
      <div className='flex justify-center mt-2 border-dotted  border-b-2  border-black  '>
      <FaTelegram  className='text-telegram text-4xl mb-2 ' />
      </div>
      <div className='flex justify-center mt-8 '>
        <FaTelegram  className='text-telegram border-4 rounded-full text-6xl mb-2 ' />
      </div>
  
    </div>
      )
}

export default Telegram