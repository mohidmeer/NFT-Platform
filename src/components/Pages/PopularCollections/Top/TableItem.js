import React from 'react'
import { Link } from 'react-router-dom'

const TableItem = ({data}) => {
  return (
    <div className="bg-dark rounded-xl transition ease-in-out delay-150 hover:translate-x-1 hover:translate-y-1 hover:scale-110  border-dark-2 border-2 ">
    <Link to="/collection/sol_princess_weekly_wish_2" >
      
        <img 
          draggable="false"
          loading="lazy"
          className='rounded-2xl  '
          src={data?.collectionImage}
        />
     
      <div className=' lg:w-full md:w-full'>
      <h5 class="mb-2 text-center px-5 font-bold">Trending</h5>
      <p className='text-center px-5 text-sm text-pink-600'>  Princes (Rifters)</p>
        
      <div className='p-3'>
               <div className='flex justify-between'>
                    <p className='font-bold '>Floor Price</p>
                    <p className='font-bold text-pink-600'>125 K</p>
                </div>
               <div className='flex justify-between'>
                    <p className='font-bold '>Owners</p>
                    <p className='font-bold text-pink-600'>10 K</p>
                </div>
               <div className='flex justify-between'>
                    <p className='font-bold '>Supply</p>
                    <p className='font-bold text-pink-600'>6.4 K</p>
                </div>
               <div className='flex justify-between'>
                    <p className='font-bold '>Last 30 days</p>
                    <p className='font-bold text-pink-600'>145 %</p>
                </div>
                

               </div>
      </div>
    </Link>
  </div>
  )
}

export default TableItem