import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChainsInfo } from '../../../../config/config-chains'
import { useNft } from '../../../../hooks/useNft'
import { AuthContext } from '../../../../Provider/AuthProvider'
import PutOnSaleModal from '../../../Modals/PutOnSaleModal'

const Items = ({ nft, setSelectedNft, handleSaleModal }) => {
  const { address } = useContext(AuthContext)
  const { handleBuyNft } = useNft()

  return (
    <div className='bg-white rounded-xl  h-fit p-2 shadow-xl  '>
      <img draggable="false" className='h-[200px] w-[400px]' src={nft?.imageUrl} />
      <div className='flex justify-between mt-2'>
        <p className='font-bold truncate'>{nft?.name}</p>
        <p className='font-bold'>#{nft?.tokenId}</p>
      </div>
      <div className='flex justify-between mt-2'>
        <p className=' text-pink-600 truncate'>{nft?.description}</p>
      </div>
      <div className='flex justify-between mt-2'>
        <p>Price:</p>
        <p className=' text-pink-600'>{nft?.listingMetadata?.price} {ChainsInfo[nft?.chainId].CURRENCY_SYMBOL}</p>
      </div>
      <div className='flex justify-between mt-2'>
        {
          nft?.ownerAddress.toLowerCase() === address.toLowerCase() ?
            <button
              className={`text-xs text-pink-600 p-1 px-2 rounded hover:bg-pink-600 hover:text-white font-bold border border-green-400 truncate w-full`}
              onClick={() => {
                setSelectedNft(nft)
                handleSaleModal(true)
              }}
            >
              {!nft?.listingMetadata?.isMarketplace ? "Sell" : "Listed"}
            </button>
            :
            nft?.listingMetadata?.isMarketplace ?
              <button
                className={`text-xs text-pink-600 p-1 px-2 rounded hover:bg-pink-600 hover:text-white font-bold border border-green-400 truncate  w-full`}
                onClick={() => handleBuyNft(nft?.listingMetadata.listingId, nft?.listingMetadata.price, nft?.collectionAddress, nft?.tokenId, nft?.listingMetadata?._id)}
              >
                Buy
              </button>
              :
              <button
                className={`text-xs text-pink-600 p-1 px-2 rounded hover:bg-pink-600 hover:text-white font-bold border border-green-400 truncate  w-full`}
              >
                Not Listed
              </button>
        }
      </div>
    </div >
  )
}

export default Items