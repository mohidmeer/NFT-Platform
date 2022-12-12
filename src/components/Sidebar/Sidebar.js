import React, { useState } from 'react'

import {Menu} from '@headlessui/react'
import { FaInfinity, FaShareAlt ,FaDiscord, FaYoutube, FaInstagram} from "react-icons/fa";
import { HiCollection } from "react-icons/hi";
import { HiTicket } from "react-icons/hi";
import { HiHome } from "react-icons/hi";
import { FaRocket } from "react-icons/fa";
import { ImCalendar } from "react-icons/im";
import { RiAuctionFill, RiInstagramFill, RiLinkedinFill, RiPinterestFill, RiRedditFill} from "react-icons/ri";
import { BiCollection, BiListPlus} from "react-icons/bi";
import { BsDiscord, BsFacebook, BsFillBookmarkFill,BsFillQuestionOctagonFill,BsListUl,BsQuestionSquareFill,BsTwitter} from "react-icons/bs";
import { MdClose,MdAddBusiness,MdCollectionsBookmark,MdPhotoAlbum, MdCelebration} from "react-icons/md";
import { IoIosRocket,IoIosCreate} from "react-icons/io";
import { AiFillPicture, AiFillQuestionCircle} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrAssistListening } from "react-icons/gr";
import { Link } from 'react-router-dom';
// import {  NavLink } from 'react-router-dom';
import { NavHashLink as NavLink} from 'react-router-hash-link';
import { TicketIcon } from '@heroicons/react/20/solid';




const Sidebar = () => {
   //  const [isOpen,setIsOpen]=useState(true);



  return (
    <>
  

    
    <aside className={`sidebar lg:h-screen sticky top-0  lg:w-64  }  `} >
    
   
        {/* {isOpen ? <MdClose / > : <GiHamburgerMenu/> } */}
        
   {/* </button> */}
    

    <div class={`flex flex-col gap-y-6  overflow-hidden py-4 px-3  rounded   bg-white lg:bg-transparent `}>
      <ul class="space-y-2 flex justify-between lg:block md:block    ">


         <li className=' font-bold lg:flex hidden gap-x-1 text-gray-600    '>
             {/* <FaInfinity class="flex-shrink-0 w-6 h-6   transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:" /> */}
            Communities
         </li><hr className='lg:flex hidden bg-dark h-[2px] '/>
       

         <li className='ml-2' >
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')}        to='/communities' >
             <FaInfinity class="flex-shrink-0 w-6 h-6   transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:" />
               <span class={`ml-3 hidden lg:block font-bold  ` }>Social Communities</span>
                 
            </NavLink        >
        
         </li>
         <li className='ml-2' >
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')}  smooth       to='/socialmint-share' >
             <FaShareAlt class="flex-shrink-0 w-6 h-6   transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:" />
               <span class={`ml-3 hidden lg:block font-bold  ` }>Social Mint Share</span>
                 
            </NavLink        >
        
         </li>
         <li className='ml-2' >
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')}        to='/discord' >
             <FaDiscord class="flex-shrink-0 w-6 h-6   transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:" />
               <span class={`ml-3 hidden lg:block font-bold  ` }>Social Mint Messenger</span>
            
            </NavLink        >
        
         </li>



         <li className=' font-bold  gap-x-1 lg:flex hidden text-gray-600  mt-1 '>
            Marketplace
         </li><hr className='bg-dark h-[2px] lg:flex hidden '/>

         <li className='ml-2'>
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')}        to='/collection' >
             <MdCollectionsBookmark class="flex-shrink-0 w-6 h-6   transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:" />
               <span class={`ml-3 hidden lg:block font-bold `}>Our Collections</span>
                            </NavLink>
        
         </li>
         <li className='ml-2'>
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')}        to='/collection-t#trending' >
             <HiCollection class="flex-shrink-0 w-6 h-6   transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:" />
               <span class={`ml-3 hidden lg:block font-bold `}>Trending Collections</span>
                            </NavLink>
        
         </li>
         <li className='ml-2'>
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')}        to='/collection-b#trending' >
             <MdPhotoAlbum class="flex-shrink-0 w-6 h-6   transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:" />
               <span class={`ml-3 hidden lg:block font-bold `}>Blue Chips</span>
                            </NavLink>
        
         </li>
         <li className='ml-2'>
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')}        to='/collection-c#trending' >
             <MdCelebration class="flex-shrink-0 w-6 h-6   transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:" />
               <span class={`ml-3 hidden lg:block font-bold `}>Celebrity</span>
                            </NavLink>
        
         </li>
         <li className='ml-2'>
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')}        to='watchlist' >
             <BsFillBookmarkFill class="flex-shrink-0 w-6 h-6   transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:" />
               <span class={`ml-3 hidden lg:block font-bold `}>Watchlist</span>
         </NavLink>
        
         </li>
         


         <li className=' font-bold lg:flex hidden gap-x-1 text-gray-600  mt-1 '>
            Creator
         </li><hr className='bg-dark h-[2px] lg:flex hidden '/>

         <li className='ml-2' >
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')}        to='createcollection' >
         <IoIosCreate class="flex-shrink-0 w-6 h-6   transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:" />
          <span class={`ml-3   hidden lg:block font-bold `}>Create Collection</span>
           
            </NavLink>
         </li>


         <li className='ml-2' >
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')}        to='createwhitelist' >
         <BiListPlus class="flex-shrink-0 w-6 h-6   transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:" />
          <span class={`ml-3   hidden lg:block font-bold `}>Create Whitelist</span>
           
            </NavLink>
         </li>
         <li className='ml-2' >
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')}        to='whitelist' >
         <BiCollection class="flex-shrink-0 w-6 h-6   transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:" />
          <span class={`ml-3   hidden lg:block font-bold `}>Whitelist Register</span>
           
            </NavLink>
         </li>

        
        








         <li className=' font-bold lg:flex hidden gap-x-1 text-gray-600  mt-1 '>
            Launch
         </li><hr className='bg-dark h-[2px] lg:flex hidden '/>
         <li className='ml-2'>
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')} to="list">
         <BsListUl class="flex-shrink-0 w-6 h-6   transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:" />
          <span class={`ml-3  hidden lg:block font-bold `}>Collection</span>
            </NavLink>
         </li>

         <li className='ml-2'>
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')} to="auctions">
         <RiAuctionFill class="flex-shrink-0 w-6 h-6   transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:" />
          <span class={`ml-3  hidden lg:block font-bold `}>Auction</span>
            </NavLink>
         </li>

         <li className='ml-2'>
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')} to="drops">
         <ImCalendar class="flex-shrink-0 w-6 h-6   transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:" />
          <span class={`ml-3  hidden lg:block font-bold `}>Drop</span>
            </NavLink>
         </li>

         {/* <li className='ml-2' >
         <NavLink disabled className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')}        to='launchpad' >
         <IoIosRocket class="flex-shrink-0 w-6 h-6   transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:" />
          <span class={`ml-3   hidden lg:block font-bold `}>Launch</span>
            </NavLink>
         </li> */}
         {/* <li className='ml-2' >
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')}        to='tickets' >
         <TicketIcon class="flex-shrink-0 w-6 h-6   transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:" />
          <span class={`ml-3   hidden lg:block font-bold `}>Ticketing</span>
            </NavLink>
         </li> */}

         <li className=' font-bold lg:flex hidden gap-x-1 text-gray-600  mt-1 '>
            Support
         </li><hr className='bg-dark h-[2px] lg:flex hidden '/>
         <li className='ml-2' >
         <a className={`flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark `} href='https://www.youtube.com'  >
         <FaYoutube class="flex-shrink-0 w-6 h-6   transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:" />
          <span class={`ml-3   hidden lg:block font-bold `}>Youtube</span>
           
            </a>
         </li>
         <li className='ml-2' >
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')}        to='artist-assist' >
         <GrAssistListening class="flex-shrink-0 w-6 h-6   transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:" />
          <span class={`ml-3   hidden lg:block font-bold `}>Artist Services</span>
            </NavLink>
         </li>
         <li className='ml-2' >
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')}        to='launch-services' >
         <IoIosRocket class="flex-shrink-0 w-6 h-6   transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:" />
          <span class={`ml-3   hidden lg:block font-bold `}>Marketing Services</span>
            </NavLink>
         </li>
         <li className='ml-2' >
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark text-orange-600' : 'flex items-center p-1 text-xs font-normal  rounded-lg text-orange-600  hover:bg-dark')}        to='hints' >
         <AiFillQuestionCircle class="flex-shrink-0 w-6 h-6   transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:" />
          <span class={`ml-3   hidden lg:block font-bold `}>Hints & Tips</span>
            </NavLink>
         </li>

        



       
        
      </ul>
      
      <div className='  hidden grid-cols-2 gap-1 lg:grid '>
         <Link className='border  rounded-lg  bg-dark text-center p-1 text-sm font-bold gap-1 flex justify-center'>
            <BsFacebook className=' mt-1 '/><span>Facebook</span>
         </Link>
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
         <Link className='border  rounded-lg  bg-dark text-center p-1 text-sm font-bold gap-1 flex justify-center'>
            <RiRedditFill className=' mt-1 '/><span>Reddit</span>
         </Link>
         <Link className='border  rounded-lg  bg-dark text-center p-1 text-sm font-bold gap-1 flex justify-center'>
            <RiLinkedinFill className=' mt-1 '/><span>Linkden</span>
         </Link>
    
         <Link className='border  rounded-lg  bg-dark text-center p-1 text-sm font-bold gap-1 flex justify-center'>
            <RiPinterestFill className=' mt-1 '/><span>Pintrest</span>
         </Link>
    
         
        

         
         

      </div>
   </div>
   </aside>
   </>
  );
}

export default Sidebar