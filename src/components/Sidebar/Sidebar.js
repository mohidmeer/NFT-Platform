import React, { useState } from 'react'
import {Menu} from '@headlessui/react'
import { HiHome } from "react-icons/hi";
import { HiCollection } from "react-icons/hi";
import { HiTicket } from "react-icons/hi";
import { FaRocket } from "react-icons/fa";
import { ImCalendar } from "react-icons/im";
import { RiAuctionFill} from "react-icons/ri";
import { MdCancelPresentation } from "react-icons/md";
import { IoIosRocket} from "react-icons/io";
import { AiFillPicture} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';




const Sidebar = () => {
    const [isOpen,setIsOpen]=useState(true);



  return (
    <>
  

    <aside className={`sidebar ${isOpen ? 'w-64' : 'w-16'}  `} aria-label="Sidebar">
    <button className={` text-gray-300 text-3xl absolute    ${isOpen ? 'right-[1px]' : 'left-5'}    `} onClick={()=>setIsOpen(!isOpen)}>
        
        
        {isOpen ? <MdCancelPresentation / > : <GiHamburgerMenu/> }
        
   </button>
    

    <div class={`   overflow-hidden py-4 px-3  rounded  mt-4 `}>
      <ul class="space-y-2  ">
       
         <li >
         <Link to='' class="flex items-center p-2 text-sm font-normal text-gray-300 rounded-lg dark:text-gray-300 hover:bg-green-500 ">
             <HiHome class="flex-shrink-0 w-6 h-6 text-gray-300  transition duration-75 group-hover:text-gray-300 dark:text-gray-400 dark:group-hover:text-gray-300" />
               <span class={`ml-3 ${isOpen ? '' : 'hidden'} font-bold  ` }>Landing</span>
            </Link>
        
         </li>
         <li >
         <Link to='auctions' class="flex items-center p-2 text-sm font-normal text-gray-300 rounded-lg dark:text-gray-300 hover:bg-green-500 ">
             <RiAuctionFill class="flex-shrink-0 w-6 h-6 text-gray-300  transition duration-75 group-hover:text-gray-300 dark:text-gray-400 dark:group-hover:text-gray-300" />
               <span class={`ml-3 ${isOpen ? '' : 'hidden'} font-bold `}>Auctions</span>
            </Link>
        
         </li>
         <li >
         <Link to="launchpad" class="flex items-center p-2  w-full text-sm font-normal text-gray-300 rounded-lg transition duration-75 group hover:bg-green-500 dark:text-gray-300 ">
         <IoIosRocket class="flex-shrink-0 w-6 h-6 text-gray-300  transition duration-75 group-hover:text-gray-300 dark:text-gray-400 dark:group-hover:text-gray-300" />
          <span class={`ml-3 ${isOpen ? '' : 'hidden'} font-bold `}>Launchpad</span>
            </Link>
               
            
         </li>

         <li>
         <Link to="popular-collection" class="flex items-center p-2  w-full text-sm font-normal text-gray-300 rounded-lg transition duration-75 group hover:bg-green-500 dark:text-gray-300 ">
         <HiCollection class="flex-shrink-0 w-6 h-6 text-gray-300  transition duration-75 group-hover:text-gray-300 dark:text-gray-400 dark:group-hover:text-gray-300" />
          <span class={`ml-3 ${isOpen ? '' : 'hidden'} font-bold `}>Popular Colections</span>
            </Link>
         </li>

         <li>
         <Link to="drops" class="flex items-center p-2  w-full text-sm font-normal text-gray-300 rounded-lg transition duration-75 group hover:bg-green-500 dark:text-gray-300 ">
         <ImCalendar class="flex-shrink-0 w-6 h-6 text-gray-300  transition duration-75 group-hover:text-gray-300 dark:text-gray-400 dark:group-hover:text-gray-300" />
          <span class={`ml-3 ${isOpen ? '' : 'hidden'} font-bold `}>Drop Calender</span>
            </Link>
         </li>
         <li>
         <Link to="tickets" class="flex items-center p-2  w-full text-sm font-normal text-gray-300 rounded-lg transition duration-75 group hover:bg-green-500 dark:text-gray-300 ">
         <HiTicket class="flex-shrink-0 w-6 h-6 text-gray-300  transition duration-75 group-hover:text-gray-300 dark:text-gray-400 dark:group-hover:text-gray-300" />
          <span class={`ml-3 ${isOpen ? '' : 'hidden'} font-bold `}>Ticketing</span>
            </Link>
         </li>

         <li >
            
            <a href="#" class="flex items-center p-2 text-sm font-normal text-gray-300 rounded-lg dark:text-gray-300 hover:bg-green-500 ">
             <AiFillPicture class="flex-shrink-0 w-6 h-6 text-gray-300  transition duration-75 group-hover:text-gray-300 dark:text-gray-400 dark:group-hover:text-gray-300" />
               <span class={`ml-3 ${isOpen ? '' : 'hidden'} font-bold `}>Intro To NFT</span>
            </a>
         </li>
        
      </ul>
   </div>
   </aside>
   </>
  );
}

export default Sidebar