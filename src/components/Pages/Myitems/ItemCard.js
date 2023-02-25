import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { ChainsInfo } from '../../../config/config-chains'
import { convertToIpfsUrl, truncateAddress } from '../../../utils/global'

const ItemCard = ({ item, setSelectedNft, handleSaleModal }) => {
  return (
    <div className="bg-dark rounded-xl transition ease-in-out delay-150 hover:translate-x-1 hover:translate-y-1 hover:scale-110  border-dark-2 border-2 max-w-[300px] max-h-[500px]">
      <img
        draggable="false"
        loading="lazy"
        className='rounded-2xl w-full max-h-[300px] h-full'
        src={item?.metadata ? convertToIpfsUrl(item?.metadata) : ""}
      />
      <div className='lg:w-full md:w-full p-5 bg-white'>
        <h5 class="mb-1 text-left mt-3 font-bold">{item?.name}</h5>
        <p className='text-left text-sm text-pink-600 break-all'>{item?.metadata ? JSON.parse(item?.metadata).description : null}</p>
        <div class="flex justify-between bg-dark-200 mb-3 mt-3 bg-dark-2  ">

          <div class="flex flex-col justify-between text-left">
            <span class="text-sm  text-gray-500">
              Price
            </span>
            <span class="fs-14px font-bold text-white-1 flex items-center">
              {/* {item?.price} {item?.nft.chainId ? ChainsInfo[item?.nft?.chainId].CURRENCY_SYMBOL : "ETH"} */}
            </span>
          </div>

          <div class="flex flex-col justify-between text-left">
            <span class="text-sm  text-gray-500">
              Collection
            </span>
            <span class="fs-14px text-pink-600">
              <Link className='flex items-center gap-2' to={`/collection/${item?.token_address}`}>
                {truncateAddress(item?.token_address)} <BiLinkExternal />
              </Link>
            </span>
          </div>
        </div>
        <div className=''>
          {
            item?.isMarketplace ?
              <button
                className={`text-xs text-pink-600 p-1 px-2 rounded hover:bg-pink-600 hover:text-white font-bold border border-green-400 truncate w-full`}
              >
                Listed
              </button>
              :
              <button
                className={`text-xs text-pink-600 p-1 px-2 rounded hover:bg-pink-600 hover:text-white font-bold border border-green-400 truncate w-full`}
                onClick={() => {
                  // setSelectedNft(item.nft)
                  handleSaleModal(true)
                }}
              >
                List Now
              </button>
          }
        </div>


      </div>
    </div>
  )
}

export default ItemCard
