import { useQuery } from '@apollo/client'
import React, { useContext, useState } from 'react'
import { BsStack } from 'react-icons/bs'
import { GET_OWNER_NFTS } from '../../../graphql/queries/nftQueries'
import { AuthContext } from '../../../Provider/AuthProvider'
import PutOnSaleModal from '../../Modals/PutOnSaleModal'
import ItemCard from './ItemCard'

const Item = ({items}) => {
  const [isSaleModal, setIsSaleModal] = useState(false)
  const [selectedNft, setSelectedNft] = useState({})

  const handleSaleModal = (value) => {
    setIsSaleModal(value)
  }

  return (
    <>
      {
        items?.length === 0 && (
          <div class="p-2 flex justify-center items-center h-72  ">
            <div>
              <BsStack className='text-gray-400 text-[100px]' />
              <p className='text-center font-semibold text-lg'>No items</p>
            </div>
          </div>
     )}

      <div className='flex flex-wrap gap-5'>
        {items?.map((d, i) => (
          <ItemCard item={d} setSelectedNft={setSelectedNft} handleSaleModal={handleSaleModal}/>
        ))}
      </div>
      <PutOnSaleModal isSaleModal={isSaleModal} handleSaleModal={handleSaleModal} selectedNft={selectedNft}/>
    </>
  )
}

export default Item
