import React from 'react'
import { FaPinterest } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Pintrest = () => {
  const notify = () => toast("Linking Pintrest");
  return (
<div onClick={notify} className= 'shadow-xl rounded-lg bg-white  font-bold p-2 text-center     '>
      <p className='text-sm border border-black  inline-block p-1 rounded-full  '>Click To Link </p>
      <div className='flex justify-center mt-2 border-dotted  border-b-2  border-black  '>
      <FaPinterest  className='text-pintrest text-4xl mb-2 ' />
      </div>
      <div className='flex justify-center mt-8 '>
        <FaPinterest  className='text-pintrest border-4 rounded-full text-6xl mb-2 ' />
      </div>
  
    </div>  )
}

export default Pintrest