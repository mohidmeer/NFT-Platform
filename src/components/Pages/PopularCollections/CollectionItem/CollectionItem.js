import React from 'react'

import Content from './Content'
import Items from './Items'
import RightPannel from './RightPannel'
import SideFilter from './SideFilter'
import Top from './Top'






const CollectionItem = () => {
  return (
    <div className='flex gap-3 '>
      <Top />
      <div className='border ' >
        <Content/>
      </div>
      <div className=' w-1/4'>
        <RightPannel/>
      </div>
      




        {/* <div className='p-10'>
          <Top  />
        </div>

       
        
        
        <div className='flex border border-white p-2   '>
            <div className='mr-auto'>
                <SideFilter/>
            </div>
            <div className='border ' >
                <Content/>
            </div>
            <div className='ml-auto' >
                
            </div>
         


        </div> */}



    </div>
  )
}

export default CollectionItem