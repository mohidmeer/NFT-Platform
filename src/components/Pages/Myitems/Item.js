import { useQuery } from '@apollo/client'
import React, { useContext } from 'react'
import { BsStack } from 'react-icons/bs'
import { GET_OWNER_NFTS } from '../../../graphql/queries/nftQueries'
import { AuthContext } from '../../../Provider/AuthProvider'
import ItemCard from './ItemCard'

const Item = () => {
  const { user, address, isConnected } = useContext(AuthContext)

  const { data } = useQuery(GET_OWNER_NFTS, {
    skip: !isConnected,
    variables: {
      ownerAddress: address
    }
  })

  return (
    <>
      {
        data?.getOwnerNfts.length === 0 && (
          <div class="p-2 flex justify-center items-center h-72  ">
            <div>
              <BsStack className='text-gray-400 text-[100px]' />
              <p className='text-center font-semibold text-lg'>No items</p>
            </div>
          </div>
        )}

      <div className='flex flex-wrap gap-5'>
        {data?.getOwnerNfts.map((d, i) => (
          <ItemCard item={d}/>
        ))}
      </div>
    </>
  )
}

export default Item
