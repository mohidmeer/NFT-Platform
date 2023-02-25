import { useQuery } from '@apollo/client'
import { Tab } from '@headlessui/react'
import React, { Fragment, useContext } from 'react'
import { FaPowerOff, FaSearch } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { GET_OWNER_NFTS } from '../../../graphql/queries/nftQueries'
import { useAuth } from '../../../hooks/useAuth'
import { AuthContext } from '../../../Provider/AuthProvider'
import { truncateAddress } from '../../../utils/global'
import Activities from './Activities'
import Item from './Item'
import ListedItems from './ListedItems'

const MyItems = () => {
  const { user, address, isConnected } = useContext(AuthContext)
  const { signOut, signInUser } = useAuth()
  const navigate = useNavigate()

  const { data } = useQuery(GET_OWNER_NFTS, {
    skip: !isConnected,
    variables: {
      ownerAddress: address
    }
  })


  return (
    <div className='mt-8 p-8'>
      <div class="flex flex-auto items-center md:items-start flex-col md:flex-row px-4 sm:pl-8 md:pt-16 lg:pl-10 2xl:pl-12 pb-8">
        <div class="min-w-[170px] max-w-[170px] min-h-[170px] max-h-[170px] rounded-full overflow-auto"><img draggable="false" loading="lazy" class="object-center object-cover min-w-[170px] max-w-[170px] min-h-[170px] max-h-[170px] rounded-full overflow-auto !cursor-not-allowed" src="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://avatars.dicebear.com/api/jdenticon/0x6baa2C243211E7F470C12E843696352b2Ba40500.svg" alt="avatar" /></div>
        <div class="grid grid-cols-1 2xl:grid-cols-2 mt-5 md:mt-0 md:ml-6 lg:ml-14 2xl:ml-24 sm:max-w-[512px] 2xl:max-w-[1000px]">
          <div>
            <div>
              <div class="flex justify-center md:justify-start">
                <h1 class="font-extrabold text-[32px] leading-[120%] text-center">{user?.username}</h1>
              </div>
            </div>
          </div>
          <div class="mt-1 md:mt-4 space-y-7 flex flex-col sm:items-center md:items-start row-start-2">
            <div>
              <div class="flex mb-8 gap-3 flex-wrap justify-center md:justify-start">
                <button title="0x6baa2C243211E7F470C12E843696352b2Ba40500" type="button" class="inline-flex hover:text-white hover:bg-pink-600 justify-center items-center rounded-md text-white-1 CopiableButton_btn__oahaK flex space-x-2 border border-pink-600 px-2.5 py-1 !rounded-[200px] text-white-2 text-sm ">
                  <div class="bg-gray-300 p-1 rounded-full">
                    <svg height={25} width={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" /></svg>
                  </div>
                  <span className='font-bold'>{truncateAddress(address)}</span>
                </button>
                <button onClick={() => !user ? signInUser() : navigate("/profile")} class="flex items-center space-x-2 border border-pink-600 hover:text-white hover:bg-pink-600 px-2.5 py-1 !rounded-[200px] text-white-2  font-bold">
                  <FaPowerOff />
                  <span>{!user ? "Sign In" : "Edit Profile"}</span>
                </button>

              </div>
              <div class="grid grid-cols-2 sm:grid-cols-[250px,250px] gap-3">
                <div class="bg-white truncate p-2 space-x-2 rounded-[4px] flex items-center justify-between flex-col sm:flex-row">
                  <div class="flex justify-center items-center space-x-2"><span class="text-xs font-bold  whitespace-nowrap" title="TOTAL ITEMS">TOTAL ITEMS</span></div>
                  <div class="flex gap-1 items-center max-w-full">
                    <div class="cursor-help max-w-full truncate" data-tooltipped="" aria-describedby="tippy-tooltip-1" data-original-title="0" ><span class="flex items-center text-white-1 text-xs truncate" title="0">{}</span></div>
                  </div>
                </div>
                <div class="bg-white truncate p-2 space-x-2 rounded-[4px] flex items-center justify-between flex-col sm:flex-row">
                  <div class="flex justify-center items-center space-x-2"><span class="text-xs font-bold  whitespace-nowrap" title="UNLISTED ITEMS">UNLISTED ITEMS</span></div>
                  <div class="flex gap-1 items-center max-w-full">
                    <div class="cursor-help max-w-full truncate" data-tooltipped="" aria-describedby="tippy-tooltip-2" data-original-title="0" ><span class="flex items-center text-white-1 text-xs truncate" title="0">{}</span></div>
                  </div>
                </div>
                <div class="bg-white truncate p-2 space-x-2 rounded-[4px] flex items-center justify-between flex-col sm:flex-row">
                  <div class="flex justify-center items-center space-x-2"><span class="text-xs font-bold  whitespace-nowrap" title="ESTIMATED VALUE">ESTIMATED VALUE</span></div>
                  <div class="flex gap-1 items-center max-w-full">

                    <div class="cursor-help max-w-full truncate" data-tooltipped="" aria-describedby="tippy-tooltip-3" data-original-title="---" ><span class="flex items-center text-white-1 text-xs truncate" title="---">---</span></div>
                  </div>
                </div>
                <div class="bg-white truncate p-2 space-x-2 rounded-[4px] flex items-center justify-between flex-col sm:flex-row">
                  <div class="flex justify-center items-center space-x-2"><span class="text-xs font-bold whitespace-nowrap" title="LISTED ITEMS">LISTED ITEMS</span></div>
                  <div class="flex gap-1 items-center max-w-full">
                    <div class="cursor-help max-w-full truncate" data-tooltipped="" aria-describedby="tippy-tooltip-4" data-original-title="0" ><span class="flex items-center text-white-1 text-xs truncate" title="0">{}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col 2xl:row-start-2 mt-5 2xl:ml-10">
            <div class="2xl:pl-6 2xl:border-l 2xl:border-gray-400"></div>
          </div>
        </div>
      </div>
      <hr className='bg-white h-[2px]' />
      <Tab.Group as={'div'} className={`mt-4`}>
        <Tab.List className={`flex gap-4 mb-3 `}>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  `text-lg pb-3  border-b-4  ui-selected:border-black ui-selected:font-bold`
                }
              >
                My Items
              </button>
            )}

          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  `text-lg pb-3  border-b-4  ui-selected:border-black ui-selected:font-bold`
                }
              >
                Listed Items
              </button>
            )}

          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  `text-lg pb-3  border-b-4  ui-selected:border-black ui-selected:font-bold`
                }
              >
                Activities
              </button>
            )}

          </Tab>
        </Tab.List>
        <hr className='bg-white h-[2px] mt-4' />
        <div className='flex justify-between mt-3 '>
          <div className="w-1/3 hidden sm:block rounded-full  border border-pink-600    ">
            <div className="relative flex items-center w-full h-10 rounded-full focus-within:shadow-lg bg-white overflow-hidden">
              <div className="grid place-items-center h-full w-12 ">
                <FaSearch />
              </div>

              <input
                className=" autofill:bg-slate-600    h-full w-full outline-none text-sm bg-white text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search items"
              />
            </div>
          </div>
          <div className="w-1/3 hidden sm:block rounded-full  border border-pink-600    ">
            <div className="relative flex items-center w-full h-10 rounded-full focus-within:shadow-lg  bg-white overflow-hidden">
              <div className="grid place-items-center h-full w-12 ">
                <FaSearch />
              </div>

              <input
                className=" autofill:bg-slate-600    h-full w-full outline-none text-sm  bg-white text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search by contract"
              />
            </div>
          </div>
        </div>

        <Tab.Panels className={`mt-4`}>
          <Tab.Panel className={``}>
            <Item items={data?.getOwnerNfts} />
          </Tab.Panel>
          <Tab.Panel className={``}>
            <ListedItems />
          </Tab.Panel>
          <Tab.Panel className={``}>
            <Activities />
          </Tab.Panel>


        </Tab.Panels>
      </Tab.Group>



    </div>
  )
}

export default MyItems
