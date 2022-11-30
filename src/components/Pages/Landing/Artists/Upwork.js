import React from 'react'
import { MdAdd } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Auction from '../../../../Assets/Brands/upwork.png'
const Upwork = () => {
  return (
    <Link className=" shadow-xl rounded-xl bg-dark " >
    <div class="flex flex-col p-1  overflow-hidden">
    <img
        
        draggable="false"
        loading="lazy"
        class="  rounded-xl"
        src={Auction}      />
      
      <div class="w-full text-sm  flex flex-col items-center rounded-b-xl mt-auto  ">
        
       <button className=' block bg-pink-600 mt-2 w-full font-bold rounded-lg py-1 px-3'>
       <div className='flex justify-center  text-white '><MdAdd className='mt-1'/>  <span>Upwork Connect</span> </div>

       </button>
      </div>
    </div>
  </Link>
  )
}

export default Upwork