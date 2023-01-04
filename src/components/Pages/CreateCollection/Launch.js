import {Tab} from '@headlessui/react'
import React, {Fragment} from 'react'
import {FiCheck} from 'react-icons/fi'
import AuctionNft from './NftSubmitTypes/AuctionNft'
import DropCollection from './NftSubmitTypes/DropCollection'
import ListNft from './NftSubmitTypes/ListNft'

const Launch = () => {
  return (
    <div className='p-6 '>
      <p className='font-bold text-sm text-gray-700'>Step 6 of 6</p>
      <div className='justify-center'>
        <Tab.Group>
          <Tab.List className={`flex gap-2 mb-3 justify-center`}>
            <Tab as={Fragment}>
              {({selected}) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    `flex justify-between font-bold p-4 bg-pink-600 text-white rounded-lg w-full mt-2`
                  }
                >
                  List NFT {selected ? <FiCheck className='text-pink-600 text-3xl bg-app rounded-full p-1' /> : ''}
                </button>
              )}

            </Tab>
            <Tab as={Fragment}>
              {({selected}) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    `flex justify-between font-bold p-4 bg-pink-600 text-white rounded-lg w-full mt-2`
                  }
                >
                  Auction NFT {selected ? <FiCheck className='text-pink-600 text-3xl bg-app rounded-full p-1' /> : ''}
                </button>
              )}

            </Tab>
            <Tab as={Fragment}>
              {({selected}) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    `flex justify-between font-bold p-4 bg-pink-600 text-white rounded-lg w-full mt-2`
                  }
                >
                  Drop Collection {selected ? <FiCheck className='text-pink-600 text-3xl bg-app rounded-full p-1' /> : ''}
                </button>
              )}

            </Tab>

          </Tab.List>
          <Tab.Panels>
            <Tab.Panel >
              <ListNft />
            </Tab.Panel>
            <Tab.Panel >
              <AuctionNft />
            </Tab.Panel>
            <Tab.Panel >
              <DropCollection />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>

      </div>
      <div className='w-2/3 mx-auto'>
        <p className='font-bold'>By participating in the Social Mint Marketplace you understand all the risks in the NFT and Crypto Market and assume those risks of your own volition. Furthermore you hold Social Mint LLC. harmless from any and all damages as a result of participating in the marketplace. In addition you have read and agree to all the Terms of Service and Privacy Policy in their entirety.</p>
        <div className='flex justify-center'>
          <button className=' mt-2 p-3  w-52 flex justify-center rounded-lg text-white font-bold text-sm bg-pink-600'>
            Submit
          </button>

        </div>
      </div>
    </div>
  )
}

export default Launch
