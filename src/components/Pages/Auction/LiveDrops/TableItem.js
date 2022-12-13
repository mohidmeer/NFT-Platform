import React from 'react'
import { AiFillHeart } from "react-icons/ai";
import { FaDiscord ,FaTwitter} from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { HiLink } from "react-icons/hi";
import { MdDescription } from "react-icons/md";
import { Link } from 'react-router-dom';
const TableItem = () => {
  return (
    <tr class=" border-b border-dark ">
                <th scope="row" class="py-4 px-6 font-medium whitespace-nowrap border-b border-dark ">
                 <button className='border border-dark  p-5 rounded-xl transition ease-in-out delay-150 hover:translate-x-1 hover:translate-y-1 hover:scale-110 '>
                   <AiFillHeart className= 'text-lg  text-zinc-800'/> 28
                 </button>
                </th>
                <td class="py-4 px-6">
                <Link class="flex gap-4 items-center" to="/drops/galactic_robots">
                    <div class="w-16 h-16 rounded overflow-hidden flex items-center justify-center">
                        <img draggable="false" loading="lazy" class="object-cover" src="https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://creator-hub-prod.s3.us-east-2.amazonaws.com/galactic_robots_pfp_1667759804426.png" alt="Galactic Robots collection drop picture" />
                        </div>
                        <span class="text-white-2 text-base">Galactic Robots </span></Link>
                </td>
                <td class="py-4 px-6">
                <div className='flex text-lg gap-3'>
                  <Link><FaDiscord/></Link>
                  <Link><FaTwitter/></Link>
                  <Link><TfiWorld/></Link>
                </div>
                </td>
                <td class="py-4 px-6">
                    Nov 15, 00:30
                </td>
                <td class="py-4 px-6">
                    Solana
                </td>
                <td class="py-4 px-6">
                   
              
              <Link className='text-2xl '>
                <HiLink className='mt-2 '/>
               </Link>
              
                    
                </td>
                
                <td class="py-4 px-6">
                <Link className='text-2xl '>
                <MdDescription className='mt-2 '/>
               </Link>
                </td>
                
                
    </tr>
  )
}

export default TableItem