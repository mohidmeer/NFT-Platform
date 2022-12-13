import React from 'react'
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

       
        
        
        <div className='flex gapx-10 '>
            <div>
                <SideFilter/>
            </div>
            <div className=''>
                <Content/>
            </div>
         


        </div>



    </div>
  )
}

export default CollectionItem