import React, { useState } from 'react'

import {Menu} from '@headlessui/react'
import { FaInfinity, FaShareAlt ,FaDiscord, FaYoutube, FaInstagram} from "react-icons/fa";
import { HiCollection } from "react-icons/hi";
import { HiTicket } from "react-icons/hi";
import { HiHome } from "react-icons/hi";
import { FaRocket } from "react-icons/fa";
import { ImCalendar } from "react-icons/im";
import { RiAuctionFill, RiInstagramFill} from "react-icons/ri";
import { BiListPlus} from "react-icons/bi";
import { BsDiscord, BsFillBookmarkFill,BsTwitter} from "react-icons/bs";
import { MdClose,MdAddBusiness,MdCollectionsBookmark} from "react-icons/md";
import { IoIosRocket,IoIosCreate} from "react-icons/io";
import { AiFillPicture} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import {  NavLink } from 'react-router-dom';




const Sidebar = () => {
   //  const [isOpen,setIsOpen]=useState(true);



  return (
    <>
  

    
    <aside className={`sidebar h-screen sticky top-0   lg:w-64  }  `} >
    
   
        {/* {isOpen ? <MdClose / > : <GiHamburgerMenu/> } */}
        
   {/* </button> */}
    

    <div class={`flex flex-col gap-y-6  overflow-hidden py-4 px-3  rounded  mt-4 `}>
      <ul class="space-y-2 flex justify-between lg:block md:block    ">


         <li className=' font-bold lg:flex hidden gap-x-1 text-gray-600    '>
             {/* <FaInfinity class="flex-shrink-0 w-6 h-6   transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:" /> */}
            Communities
         </li><hr className='bg-dark h-[2px] '/>
       

         <li className='ml-2' >
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-2 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-2 text-xs font-normal  rounded-lg  hover:bg-dark')}        to='/' >
             <FaInfinity class="flex-shrink-0 w-6 h-6   transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:" />
               <span class={`ml-3 hidden lg:block font-bold  ` }>Trending Communities</span>
                 
            </NavLink        >
        
         </li>
         <li className='ml-2' >
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-2 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-2 text-xs font-normal  rounded-lg  hover:bg-dark')}        to='/share#SocialMintShare' >
             <FaShareAlt class="flex-shrink-0 w-6 h-6   transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:" />
               <span class={`ml-3 hidden lg:block font-bold  ` }>Social Mint Share</span>
                 
            </NavLink        >
        
         </li>
         <li className='ml-2' >
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-2 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-2 text-xs font-normal  rounded-lg  hover:bg-dark')}        to='/discord' >
             <FaDiscord class="flex-shrink-0 w-6 h-6   transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:" />
               <span class={`ml-3 hidden lg:block font-bold  ` }>Social Mint Discord</span>
            
            </NavLink        >
        
         </li>



         <li className=' font-bold  gap-x-1 lg:flex hidden text-gray-600  mt-1 '>
             {/* <MdAddBusiness class="flex-shrink-0 w-6 h-6   transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:" /> */}
            Marketplace
         </li><hr className='bg-dark h-[2px] '/>

         <li className='ml-2'>
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-2 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-2 text-xs font-normal  rounded-lg  hover:bg-dark')}        to='popular-collection' >
             <MdCollectionsBookmark class="flex-shrink-0 w-6 h-6   transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:" />
               <span class={`ml-3 hidden lg:block font-bold `}>Top Collections</span>
                            </NavLink>
        
         </li>
         <li className='ml-2'>
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-2 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-2 text-xs font-normal  rounded-lg  hover:bg-dark')}        to='/collections?#trending' >
             <HiCollection class="flex-shrink-0 w-6 h-6   transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:" />
               <span class={`ml-3 hidden lg:block font-bold `}>Trending Collections</span>
                            </NavLink>
        
         </li>
         <li className='ml-2'>
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-2 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-2 text-xs font-normal  rounded-lg  hover:bg-dark')}        to='watchlist' >
             <BsFillBookmarkFill class="flex-shrink-0 w-6 h-6   transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:" />
               <span class={`ml-3 hidden lg:block font-bold `}>Watchlist</span>
                            </NavLink>
        
         </li>
         


         <li className=' font-bold lg:flex hidden gap-x-1 text-gray-600  mt-1 '>
            Creator
         </li><hr className='bg-dark h-[2px] '/>

         <li className='ml-2' >
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-2 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-2 text-xs font-normal  rounded-lg  hover:bg-dark')}        to='createcollection' >
         <IoIosCreate class="flex-shrink-0 w-6 h-6   transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:" />
          <span class={`ml-3   hidden lg:block font-bold `}>Create Collection</span>
           
            </NavLink>
         </li>

         <li className='ml-2' >
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-2 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-2 text-xs font-normal  rounded-lg  hover:bg-dark')}        to='createwhitelist' >
         <BiListPlus class="flex-shrink-0 w-6 h-6   transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:" />
          <span class={`ml-3   hidden lg:block font-bold `}>Create Whitelist</span>
           
            </NavLink>
         </li>
        








         <li className=' font-bold lg:flex hidden gap-x-1 text-gray-600  mt-1 '>
            Launch
         </li><hr className='bg-dark h-[2px] '/>

         <li className='ml-2'>
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-2 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-2 text-xs font-normal  rounded-lg  hover:bg-dark')} to="auctions">
         <RiAuctionFill class="flex-shrink-0 w-6 h-6   transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:" />
          <span class={`ml-3  hidden lg:block font-bold `}>Auction</span>
            </NavLink>
         </li>

         <li className='ml-2'>
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-2 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-2 text-xs font-normal  rounded-lg  hover:bg-dark')} to="drops">
         <ImCalendar class="flex-shrink-0 w-6 h-6   transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:" />
          <span class={`ml-3  hidden lg:block font-bold `}>Drop</span>
            </NavLink>
         </li>

         <li className='ml-2' >
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-2 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-2 text-xs font-normal  rounded-lg  hover:bg-dark')}        to='launchpad' >
         <IoIosRocket class="flex-shrink-0 w-6 h-6   transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:" />
          <span class={`ml-3   hidden lg:block font-bold `}>Launch</span>
            </NavLink>
         </li>



       
        
      </ul>
      
      <div className=' mt-10 grid grid-cols-2 gap-2 '>
         <Link className='border  rounded-lg  bg-dark text-center p-1 text-sm font-bold gap-1 flex justify-center'>
            <BsTwitter className=' mt-1 '/><span>Twitter</span>
         </Link>
         <Link className='border  rounded-lg  bg-dark text-center p-1 text-sm font-bold gap-1 flex justify-center'>
            <FaDiscord className=' mt-1 '/><span>Discord</span>
         </Link>
         <Link className='border  rounded-lg  bg-dark text-center p-1 text-sm font-bold gap-1 flex justify-center'>
            <FaYoutube className=' mt-1 '/><span>Youtube</span>
         </Link>
         <Link className='border  rounded-lg  bg-dark text-center p-1 text-sm font-bold gap-1 flex justify-center'>
            <RiInstagramFill className=' mt-1 '/><span>Instagram</span>
         </Link>
    
         
        

         
         

      </div>
   </div>
   </aside>
   </>
  );
}

export default Sidebar