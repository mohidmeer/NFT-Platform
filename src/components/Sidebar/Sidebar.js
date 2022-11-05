import React, { useState } from 'react'
import {Menu} from '@headlessui/react'
import { MdInsights } from "react-icons/md";
import { FaRocket } from "react-icons/fa";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { GiWhiteBook } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';




const Sidebar = () => {
    const [isOpen,setIsOpen]=useState(true);



  return (
    <>
  

    <aside className={`relative   h-screen bg-dark-2   ${isOpen ? 'w-72' : 'w-16'} `} aria-label="Sidebar">
    <button className={` text-gray-300 text-3xl absolute   ${isOpen ? 'right-[-15px]' : 'left-5'}    `} onClick={()=>setIsOpen(!isOpen)}>
        
        
        {isOpen ? <BsFillArrowLeftCircleFill/> : <GiHamburgerMenu/> }
        
   </button>
    

    <div class={` ${isOpen ? '' : 'hidden'}  overflow-hidden py-4 px-3 bg-dark-2 rounded dark:bg-gray-800 mt-4 `}>
      <ul class="space-y-2 ">
         
         <li>
            <Menu>
            <Menu.Button type="button" class="flex items-center p-2 w-full text-sm font-normal text-gray-300 rounded-lg transition duration-75 group hover:bg-dark dark:text-gray-300 " aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-300  transition duration-75 group-hover:text-gray-300 dark:text-gray-400 dark:group-hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                  <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Marketplace</span>
                  <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Menu.Button>
            <Menu.Items>
            <ul id="dropdown-example" class=" py-2 space-y-2">
                  <li>
                     <Link to='auctions' class="flex items-center p-2 pl-11 w-full text-sm font-normal text-gray-300 rounded-lg transition duration-75 group hover:bg-dark dark:text-gray-300 ">Auctions</Link>
                  </li>
                 
            </ul></Menu.Items></Menu>
         </li> */}
         <li>
            <Menu>
            <Menu.Button type="button" class="flex items-center p-2 w-full text-sm font-normal text-gray-300 rounded-lg transition duration-75 group hover:bg-dark dark:text-gray-300 " aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
            <FaRocket className=' dark:text-gray-400 dark:group-hover:text-gray-300 flex-shrink-0 w-6 h-6 text-gray-300  transition duration-75 group-hover:text-gray-300'/>    
                  <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Launchpad</span>
                  <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Menu.Button>
            <Menu.Items>
            <ul id="dropdown-example" class="   ">
                  <li>
                     <Link to="launchpad" class="flex items-center p-2 pl-11 w-full text-sm font-normal text-gray-300 rounded-lg transition duration-75 group hover:bg-dark dark:text-gray-300 ">Launches</Link>
                  </li>
                  {/* <li>
                     <a href="#" class="flex items-center p-2 pl-11 w-full text-sm font-normal text-gray-300 rounded-lg transition duration-75 group hover:bg-dark dark:text-gray-300 ">About</a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center p-2 pl-11 w-full text-sm font-normal text-gray-300 rounded-lg transition duration-75 group hover:bg-dark dark:text-gray-300 ">Apply For Lauchpad</a>
                  </li> */}
            </ul></Menu.Items></Menu>
         </li>
         <li>
            
            <a href="#" class="flex items-center p-2 text-sm font-normal text-gray-300 rounded-lg dark:text-gray-300 hover:bg-dark ">
             <GiWhiteBook class="flex-shrink-0 w-6 h-6 text-gray-300  transition duration-75 group-hover:text-gray-300 dark:text-gray-400 dark:group-hover:text-gray-300" />
               <span class="ml-3">Intro To NFT</span>
            </a>
         </li>
        
      </ul>
   </div>
   </aside>
   </>
  );
}

export default Sidebar