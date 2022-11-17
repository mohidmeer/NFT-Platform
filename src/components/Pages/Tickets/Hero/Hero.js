import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='grid grid-cols-5 gap-2'>
    <div className='col-span-5  lg:col-span-4 bg-gradient-to-br from-emerald-500 via-sky-700 to-amber-200 h-56 flex flex-col justify-center p-4 rounded-xl'>
        <p>In Collaboration With</p>
        <h2 className='text-4xl font-extrabold'>Engage VE</h2>
        <div className='mt-4 gap-2 flex'>
        <Link className='p-3 font-bold bg-dark rounded-lg '>Learn More</Link>
        <Link className='p-3 font-bold bg-pink-600 rounded-lg '>Jump In</Link>
        </div>

        
    </div>
    <div className=' bg-gradient-to-br from-emerald-500 via-sky-700 to-amber-200 p-4 rounded-xl'>
     cscs    
    </div>


    </div>
  )
}

export default Hero