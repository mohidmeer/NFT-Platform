import React from 'react'
import Cart from './Cart'
import Content from './Content'
import Items from './Items'
import SideFilter from './SideFilter'
import Top from './Top'






const CollectionItem = () => {
  return (
    <div >
        <div className='p-10'>
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
                <Cart/>
            </div>
         


        </div>



    </div>
  )
}

export default CollectionItem