import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='grid grid-cols-5 gap-2'>
    <div className='col-span-5  lg:col-span-4 bg-dark h-56 flex flex-col justify-center p-4 rounded-xl'>
        <p className='text-sm font-bold'>In Collaboration With</p>
        <h2 className='text-4xl font-extrabold'>Engage VE</h2>
        <div className='mt-4 gap-2 flex'>
        <Link className='p-2 font-bold border rounded-lg '>Learn More</Link>
        <Link className='p-2 font-bold bg-pink-600 rounded-lg text-white '>Jump In</Link>
        </div>

        
    </div>
    <div className='lg:col-span-1 md:col-span-2 sm:col-span-3 col-span-4 bg-dark p-4 rounded-xl flex flex-col justify-end '>
    <h2 className='text-4xl font-extrabold'>Space Jumper at SandBox</h2>
       <div className='mt-4 gap-2 flex'>
        <Link className='p-2 font-bold bg-dark rounded-lg border '>Learn More</Link>
        <Link className='p-2 font-bold bg-pink-600 rounded-lg text-white'>Jump In</Link>
       </div>
        
    </div>


    </div>
  )
}

export default Hero