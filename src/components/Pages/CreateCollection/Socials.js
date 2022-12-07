import React from 'react'
import SocialMediaApi from '../Landing/SocialMediaApi/SocialMediaApi'
const Socials = ({stateChanger}) => {
  return (
    <div>
        <p className='font-bold text-sm text-gray-700'>Step 5 of 6</p>
        
        <SocialMediaApi title={'text-left'}/>
        <button onClick={() => stateChanger(6)} className=' mt-2 p-3 w-52 flex justify-center rounded-lg text-white font-bold text-sm bg-pink-600'>
              Save and Proceed 
        </button>
    </div>
  )
}

export default Socials