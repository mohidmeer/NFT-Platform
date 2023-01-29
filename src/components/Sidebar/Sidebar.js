import React, { useContext, useState } from 'react'

import { Menu } from '@headlessui/react'
import { FaInfinity, FaShareAlt, FaDiscord, FaYoutube, FaInstagram, FaFacebook, FaTwitter, FaReddit, FaLinkedin, FaPinterest } from "react-icons/fa";
import { HiCollection } from "react-icons/hi";
import { HiTicket } from "react-icons/hi";
import { HiHome } from "react-icons/hi";
import { FaRocket } from "react-icons/fa";
import { ImCalendar } from "react-icons/im";
import { RiAuctionFill, RiInstagramFill, RiLinkedinFill, RiPinterestFill, RiRedditFill } from "react-icons/ri";
import { BiCollection, BiListPlus } from "react-icons/bi";
import { BsDiscord, BsFacebook, BsFillBookmarkFill, BsFillQuestionOctagonFill, BsListUl, BsQuestionSquareFill, BsTwitter } from "react-icons/bs";
import { MdClose, MdAddBusiness, MdCollectionsBookmark, MdPhotoAlbum, MdCelebration } from "react-icons/md";
import { IoIosRocket, IoIosCreate } from "react-icons/io";
import { AiFillPicture, AiFillQuestionCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrAssistListening } from "react-icons/gr";
import { Link, useLocation } from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import AppContext from '../../AppContext';



const Sidebar = () => {
  const myContext = useContext(AppContext);

  return (
    <>
      <aside className={`sidebar h-screen sticky top-0 transition-all ease-out lg:w-64  ${myContext.sidebarstate ? 'lg:w-64' : 'lg:w-20'}      `} >

        <div class={`flex flex-col gap-y-6  overflow-hidden py-4 px-3  rounded  lg:bg-transparent `}>
          <ul class="space-y-2  justify-between block lg:block md:block    ">


            <li className=' font-bold lg:flex hidden gap-x-1 text-gray-600    '>
              <span className={`${myContext.sidebarstate ? '' : 'lg:hidden'}`}>
                Communities
              </span>

            </li><hr className='lg:flex hidden bg-dark h-[2px] ' />


            <li className='ml-2' >
              <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')} to='/communities' >
                <FaInfinity className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '' : 'ml-1'} `} />
                <span class={`ml-3 hidden lg:block font-bold ${myContext.sidebarstate ? '' : 'lg:hidden'}    `}>Social Communities</span>

              </NavLink        >

            </li>
            <li className='ml-2' >
              <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')} smooth to='/socialmint-share' >
                <FaShareAlt className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '' : 'ml-1'} `} />
                <span class={`ml-3 hidden lg:block font-bold ${myContext.sidebarstate ? '' : 'lg:hidden'}  `}>Social Mint Share</span>

              </NavLink        >

            </li>
            <li className='ml-2' >
              <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')} to='/discord' >
                <FaDiscord className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '' : 'ml-1'} `} />
                <span class={`ml-3 hidden lg:block font-bold ${myContext.sidebarstate ? '' : 'lg:hidden'}  `}>Mint Messenger</span>

              </NavLink        >

            </li>



            <li className=' font-bold  gap-x-1 lg:flex hidden text-gray-600  mt-1 '>

              <span className={`${myContext.sidebarstate ? '' : 'lg:hidden'}`}>
                Marketplace
              </span>
            </li><hr className='bg-dark h-[2px] lg:flex hidden ' />

            <li className='ml-2'>
              <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')} to='/collection' >
                <MdCollectionsBookmark className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '' : 'ml-1'} `} />
                <span class={`ml-3 hidden lg:block font-bold ${myContext.sidebarstate ? '' : 'lg:hidden'} `}>Our Collections</span>
              </NavLink>

            </li>
            <li className='ml-2'>
              <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')} to='/collection-t#trending' >
                <HiCollection className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '' : 'ml-1'} `} />
                <span class={`ml-3 hidden lg:block font-bold ${myContext.sidebarstate ? '' : 'lg:hidden'} `}>Trending Collections</span>
              </NavLink>

            </li>
            <li className='ml-2'>
              <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')} to='/collection-b#trending' >
                <MdPhotoAlbum className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '' : 'ml-1'} `} />
                <span class={`ml-3 hidden lg:block font-bold ${myContext.sidebarstate ? '' : 'lg:hidden'} `}>Blue Chips</span>
              </NavLink>

            </li>
            <li className='ml-2'>
              <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')} to='/collection-c#trending' >
                <MdCelebration className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '' : 'ml-1'} `} />
                <span class={`ml-3 hidden lg:block font-bold ${myContext.sidebarstate ? '' : 'lg:hidden'} `}>Celebrity</span>
              </NavLink>

            </li>
            <li className='ml-2'>
              <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')} to='/watchlist' >
                <BsFillBookmarkFill className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '' : 'ml-1'} `} />
                <span class={`ml-3 hidden lg:block font-bold ${myContext.sidebarstate ? '' : 'lg:hidden'} `}>Watchlist</span>
              </NavLink>

            </li>



            <li className=' font-bold lg:flex hidden gap-x-1 text-gray-600  mt-1 '>
              <span className={`${myContext.sidebarstate ? '' : 'lg:hidden'}`}>
                Creator
              </span>
            </li><hr className='bg-dark h-[2px] lg:flex hidden ' />

            <li className='ml-2' >
              <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')} to='/create-collection' >
                <IoIosCreate className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '' : 'ml-1'} `} />
                <span class={`ml-3   hidden lg:block font-bold ${myContext.sidebarstate ? '' : 'lg:hidden'} `}>Create Collection</span>

              </NavLink>
            </li>
            <li className='ml-2'>
              <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')} to="/list-collection">
                <BsListUl className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '' : 'ml-1'} `} />
                <span class={`ml-3  hidden lg:block font-bold  ${myContext.sidebarstate ? '' : 'lg:hidden'} `}>List NFT</span>
              </NavLink>
              {/* previous to='/list' */}
            </li>


            <li className='ml-2' >
              <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')} to='/createwhitelist' >
                <BiListPlus className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '' : 'ml-1'} `} />
                <span class={`ml-3   hidden lg:block font-bold ${myContext.sidebarstate ? '' : 'lg:hidden'} `}>Create Whitelist</span>

              </NavLink>
            </li>
            <li className='ml-2' >
              <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')} to='/whitelist' >
                <BiCollection className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '' : 'ml-1'} `} />
                <span class={`ml-3   hidden lg:block font-bold ${myContext.sidebarstate ? '' : 'lg:hidden'} `}>Whitelist Register</span>

              </NavLink>
            </li>


            <li className=' font-bold lg:flex hidden gap-x-1 text-gray-600  mt-1 '>
              <span className={`${myContext.sidebarstate ? '' : 'lg:hidden'}`}>
                Launch
              </span>
            </li><hr className='bg-dark h-[2px] lg:flex hidden ' />

            {/* <li className='ml-2' >
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')}        to='/create-collection' >
         <IoIosCreate className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '': 'ml-1' } `    }  />
          <span class={`ml-3   hidden lg:block font-bold ${myContext.sidebarstate ? '': 'lg:hidden' } `}>List Collection</span>
           
            </NavLink>
         </li> */}

            <li className='ml-2'>
              <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')} to="/auctions">
                <RiAuctionFill className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '' : 'ml-1'} `} />
                <span class={`ml-3  hidden lg:block font-bold ${myContext.sidebarstate ? '' : 'lg:hidden'} `}>Auction</span>
              </NavLink>
            </li>

            <li className='ml-2'>
              <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')} to="/drops">
                <ImCalendar className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '' : 'ml-1'} `} />
                <span class={`ml-3  hidden lg:block font-bold ${myContext.sidebarstate ? '' : 'lg:hidden'} `}>Drop</span>
              </NavLink>
            </li>


            <li className=' font-bold lg:flex hidden gap-x-1 text-gray-600  mt-1 '>
              <span className={`${myContext.sidebarstate ? '' : 'lg:hidden'}`}>
                Support
              </span>
            </li><hr className='bg-dark h-[2px] lg:flex hidden ' />
            <li className='ml-2' >
              <a className={`flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark `} href='https://www.youtube.com'  >
                <FaYoutube className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '' : 'ml-1'} `} />
                <span class={`ml-3   hidden lg:block font-bold ${myContext.sidebarstate ? '' : 'lg:hidden'} `}>Youtube</span>

              </a>
            </li>
            <li className='ml-2' >
              <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')} to='/artist-assist' >
                <GrAssistListening className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '' : 'ml-1'} `} />
                <span class={`ml-3   hidden lg:block font-bold ${myContext.sidebarstate ? '' : 'lg:hidden'} `}>Artist Services</span>
              </NavLink>
            </li>
            <li className='ml-2' >
              <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')} to='/launch-services' >
                <IoIosRocket className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '' : 'ml-1'} `} />
                <span class={`ml-3   hidden lg:block font-bold ${myContext.sidebarstate ? '' : 'lg:hidden'} `}>Marketing Services</span>
              </NavLink>
            </li>
            <li className='ml-2' >
              <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark text-orange-600' : 'flex items-center p-1 text-xs font-normal  rounded-lg text-orange-600  hover:bg-dark')} to='/hints' >
                <AiFillQuestionCircle className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '' : 'ml-1'} `} />
                <span class={`ml-3   hidden lg:block font-bold ${myContext.sidebarstate ? '' : 'lg:hidden'} `}>Hints & Tips</span>
              </NavLink>
            </li>







          </ul>

          <div className={`hidden grid-cols-4 gap-1 lg:grid ${myContext.sidebarstate ? '' : 'lg:hidden'}`}>
            <Link className='flex justify-center  '>
              <FaFacebook className='text-facebook border-gray-300 border-4 rounded-full text-4xl  ' />
            </Link>
            <Link className='flex justify-center  '>
              <FaTwitter className='text-twitter border-gray-300 border-4 rounded-full text-4xl  ' />
            </Link>
            <Link className='flex justify-center  '>
              <FaDiscord className='text-discord border-gray-300 border-4 rounded-full text-4xl  ' />
            </Link>
            <Link className='flex justify-center  '>
              <FaYoutube className='text-red-600 border-gray-300 border-4 rounded-full text-4xl  ' />
            </Link>
            <Link className='flex justify-center  '>
              <FaInstagram className='text-instagram border-gray-300 border-4 rounded-full text-4xl  ' />
            </Link>

            <Link className='flex justify-center  '>
              <FaReddit className='text-reddit border-gray-300 border-4 rounded-full text-4xl  ' />
            </Link>
            <Link className='flex justify-center  '>
              <FaLinkedin className='text-blue-700 border-gray-300 border-4 rounded-full text-4xl  ' />
            </Link>
            <Link className='flex justify-center  '>
              <FaPinterest className='text-pintrest   border-gray-300 border-4 rounded-full text-4xl  ' />
            </Link>














          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar