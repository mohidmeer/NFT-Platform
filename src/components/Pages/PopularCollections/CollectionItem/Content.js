import React, { useState } from 'react'
import { BsFillGrid3X3GapFill, BsGridFill } from 'react-icons/bs'
import Items from './Items'

const Content = () => {
    const [layout, setLayout] = useState('grid-cols-5')
  return (
  <div className=' '>
    <div className='flex justify-end'>
        <div className='flex pr-10 mb-3  gap-4'>
            <button onClick={()=>{setLayout('grid-cols-8')}} className='font-bold text-2xl'><BsFillGrid3X3GapFill/> </button>
            <button onClick={()=>{setLayout('grid-cols-5')}} className='font-bold text-2xl'><BsGridFill/> </button>           
            

        </div>


    </div>



    <div className={`${layout} px-8 grid  gap-4`}>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
    </div>
</div>
  )
}

export default Content