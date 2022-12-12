import React, { Fragment, useState } from 'react'
import { AiFillHeart } from "react-icons/ai";
import { FaDiscord ,FaTwitter} from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { HiLink } from "react-icons/hi";
import { MdDescription } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';


const TableItem = () => {

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <tr class=" border-b border-dark ">
               
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
                    Ether
                </td>
                <td class="py-4 px-6">
                <div class="flex flex-col  ">
                 <div class="bg-pink-600 h-1 " style={{width:'60%'}} ></div>
                 
                 <span class="flex justify-between items-center w-full"><span class="text-white-2 text-xs font-medium">141%</span><span class="text-light-gray-500 text-xs">(1413/1000)</span></span>
                </div>
                   
              
              
              
                    
                </td>
                
                <td class="py-4 px-6">
                <button onClick={openModal} className='text-sm font-bold bg-pink-600 p-3 text-white rounded-xl'>
                Register
               </button>
                </td>
                
                <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full  max-w-lg   transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Before you mint Galactic Robots
                  </Dialog.Title>
                  <div className="mt-2">
                  <div class="p-4 relative pt-0">
   
                   </div>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <Link
                      to='/whitelist/Galactic-Robots'
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      
                    >
                      I understand
                    </Link>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
               </Transition>  
    </tr>
  )
}

export default TableItem