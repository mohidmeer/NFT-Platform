import React from 'react';
import { MdAdd,MdExitToApp} from "react-icons/md";
import Comm from '../../../Assets/NFTs/Community.png'
const Items = ({Status=false ,Name='Community Name',Members=20} ) => {
  
  return (
    <div className={`bg-white  rounded-xl p-4   text-center `}>
      <div className='flex justify-center'>
       <img width={128} className='rounded-full'   src={Comm} />
      </div>
      <h4 className='font-bold'>{Name}</h4>
      <p className='text-xs font-bold text-pink-600'>{Members}K <span>Members</span></p>
      <div className='mt-2'>
      {Status==true ? 
      <button className=' block border border-black w-full font-bold rounded-lg py-1 px-3'>
        <div className='flex justify-center   '><MdExitToApp className='mt-1'/>  <span>Leave </span> </div>
      

      </button> :
      <button className=' block bg-black w-full font-bold rounded-lg py-1 px-3'>
      <div className='flex justify-center  text-white '><MdAdd className='mt-1'/>  <span>Join </span> </div>

      </button>}</div>









      
    </div>
  )
}

export default Items