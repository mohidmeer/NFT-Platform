import React, { useContext, useState } from 'react'

import {Menu} from '@headlessui/react'
import { FaInfinity, FaShareAlt ,FaDiscord, FaYoutube, FaInstagram, FaFacebook, FaTwitter, FaReddit, FaLinkedin, FaPinterest, FaBell} from "react-icons/fa";
import { HiCollection } from "react-icons/hi";
import { HiTicket } from "react-icons/hi";
import { HiHome } from "react-icons/hi";
import { FaRocket } from "react-icons/fa";
import { ImCalendar } from "react-icons/im";
import { RiAuctionFill, RiInstagramFill, RiLinkedinFill, RiPinterestFill, RiRedditFill} from "react-icons/ri";
import { BiCollection, BiListPlus} from "react-icons/bi";
import { BsCartFill, BsDiscord, BsFacebook, BsFillBookmarkFill,BsFillQuestionOctagonFill,BsListUl,BsQuestionSquareFill,BsTwitter} from "react-icons/bs";
import { MdClose,MdAddBusiness,MdCollectionsBookmark,MdPhotoAlbum, MdCelebration, MdAccountBalanceWallet} from "react-icons/md";
import { IoIosRocket,IoIosCreate, IoMdPerson, IoMdGift, IoIosGift, IoIosCart} from "react-icons/io";
import { AiFillPicture, AiFillQuestionCircle} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrAssistListening } from "react-icons/gr";
import { Link, useLocation } from 'react-router-dom';
import { NavHashLink as NavLink} from 'react-router-hash-link';
import AppContext from '../../AppContext';



const ProfileSidebar = () => {
   const myContext = useContext(AppContext);



  return (
    <>
    <aside className={`sidebar h-screen sticky top-0 transition-all ease-out lg:w-64  ${myContext.sidebarstate ? 'lg:w-64': 'lg:w-20' }      `} >
    
    <div class={`flex flex-col gap-y-6  overflow-hidden py-4 px-3  rounded  lg:bg-transparent `}>
      <ul class="space-y-2  justify-between block lg:block md:block    ">


         
       

         <li className='ml-2' >
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')}        to='/profile' >
             <IoMdPerson className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '': 'ml-1' } `    }  />
               <span class={`ml-3 hidden lg:block font-bold ${myContext.sidebarstate ? '': 'lg:hidden' }    ` }>Profile</span>
                 
            </NavLink>
        
         </li>
         <li className='ml-2' >
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')}  smooth       to='/wallets' >
             <MdAccountBalanceWallet className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '': 'ml-1' } `    }  />
               <span class={`ml-3 hidden lg:block font-bold ${myContext.sidebarstate ? '': 'lg:hidden' }  ` }>Wallets</span>
                 
            </NavLink        >
        
         </li>
         <li className='ml-2' >
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')}        to='/rewards' >
             <IoIosGift className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '': 'ml-1' } `    } />
               <span class={`ml-3 hidden lg:block font-bold ${myContext.sidebarstate ? '': 'lg:hidden' }  ` }>Rewards</span>
            
            </NavLink        >
        
         </li>
         <li className='ml-2' >
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')}        to='/notifications' >
             <FaBell className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '': 'ml-1' } `    } />
               <span class={`ml-3 hidden lg:block font-bold ${myContext.sidebarstate ? '': 'lg:hidden' }  ` }>Notifications</span>
            
            </NavLink        >
        
         </li>
         <li className='ml-2' >
         <NavLink className={({ isActive }) => (isActive ? 'bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' : 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark')}        to='/offers' >
             <BsCartFill className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '': 'ml-1' } `    } />
               <span class={`ml-3 hidden lg:block font-bold ${myContext.sidebarstate ? '': 'lg:hidden' }  ` }>Offers</span>
            
            </NavLink        >
        
         </li>



         
        



       
        
      </ul>
      
     
        
         
         
         
    
         
    
         
        

         
         

      </div>
  
   </aside>
   </>
  );
}

export default ProfileSidebar