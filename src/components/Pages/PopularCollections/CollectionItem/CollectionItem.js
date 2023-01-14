import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'
import { GET_SINGLE_COLLECTION } from '../../../../graphql/queries/collectionQueries'

import Content from './Content'
import Items from './Items'
import RightPannel from './RightPannel'
import SideFilter from './SideFilter'
import Top from './Top'

const CollectionItem = () => {
  const { collectionAddress } = useParams()

  const { data: collectionData } = useQuery(GET_SINGLE_COLLECTION, {
    variables: {
      collectionAddress: collectionAddress
    }
  })
  return (
    <div className='flex lg:flex-row md: gap-3 '>
      <Top collection={collectionData?.getSingleCollection} />
      <div className='border w-[80%]' >
        <Content  nfts={collectionData?.collectionNfts}/>
      </div>
      <div className='w-1/3'>
        <RightPannel collection={collectionData?.getSingleCollection} />
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