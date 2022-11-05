import React from 'react'
import { FaWallet } from 'react-icons/fa';
import Logo from '../../logo.png'
const navbar = () => {
  return (
    <div className="p-4 bg-dark-2 text-white flex  justify-between">
      <div>
        <img src={Logo} className="" width={160} alt="" />
      </div>

      <div className="w-1/3 hidden sm:block   ">
        <div className="relative flex items-center w-full h-10 rounded-full focus-within:shadow-lg bg-dark overflow-hidden">
          <div className="grid place-items-center h-full w-12 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className=" autofill:bg-slate-600     h-full w-full outline-none text-sm bg-dark text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search something.."
          />
        </div>
      </div>

      <button className=" truncate flex bg-transparent hover:bg-pink-600 text-blue-dark font-semibold hover:text-gray-700 py-2 px-4 border border-pink-600 hover:border-transparent rounded  ">
        <span className='border-r mr-2 border-pink-600'>
        <FaWallet className='mt-1  mr-2'/>
        </span>
        Connect Wallet
      </button>
    </div>
  );
}

export default navbar