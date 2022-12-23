import { Menu } from "@headlessui/react";
import React from "react";
import { BsGift, BsGiftFill, BsPerson, BsPersonFill, BsStack, BsWallet, BsWalletFill } from "react-icons/bs";
import { FaPersonBooth } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { GiStack } from "react-icons/gi";
import { RiFileSettingsFill, RiSettingsFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Profilebar = () => {
  return (
    <Menu as="div" class="  relative inline-block text-left mr-2 mt-1">
      <Menu.Button
        type="button"
        className="   "
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        <BsPerson className="font-bold text-3xl" />
      </Menu.Button>

      <Menu.Items
        className="absolute right-0 z-10 mt-2 w-80 origin-top-right rounded-md  bg-dark shadow-lg  ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabindex="-1"
      >
        <div class="flex m-4 space-x-2">
          <Link href="/profile">
            <img
              class="rounded-full w-9"
              src="https://img-cdn.magiceden.dev/rs:fill:64:64:0:0/plain/https://avatars.dicebear.com/api/jdenticon/Fn9B549u8ACKG8wM8HyBhQJ25EdCkxXqmT3w13DrFU4i.svg"
            />
          </Link>
          <div class="flex flex-col">
            <span class="">
              <span
                title="Fn9B549u8ACKG8wM8HyBhQJ25EdCkxXqmT3w13DrFU4i"
                class="cursor-pointer d-inline-flex align-items-center whitespace-nowrap"
              >
                <span>Fn9B549 ... U4i</span>
              </span>
            </span>
            <div>
              <button class="text-pink-600">Sign in</button> to see your level
              status
            </div>
          </div>
        </div>
        <hr class="bg-gray-300 opacity-100 mx-2 h-px"></hr>
        <Link class="flex items-center space-x-4 p-4 font-semibold w-full hover:bg-app" to=''>
         <BsStack />
               <span>My items</span>
        </Link>
        <hr class="bg-gray-300 opacity-100 mx-2 h-px"></hr>
        <Link class="flex items-center space-x-4 p-4 font-semibold w-full hover:bg-app" to=''>
         <BsGiftFill />
               <span>My Rewards</span>
        </Link>
        <hr class="bg-gray-300 opacity-100 mx-2 h-px"></hr>
        <Link class="flex items-center space-x-4 p-4 font-semibold   w-full hover:bg-app" to=''>
         <RiSettingsFill />
               <span>Profile Settings</span>
        </Link>
        <hr class="bg-gray-300 opacity-100 mx-2 h-px"></hr>
        <Link class="flex  space-x-4 p-4 font-semibold w-full hover:bg-app" to=''>
        <div className="bg-gray-200 rounded-full p-3">  <svg height={25} width={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"/></svg></div>
               <span>Main Wallet <p>0.00</p></span>
        </Link>
        <Link class="flex items-center space-x-4 p-4 font-semibold w-full hover:bg-app" to=''>
      <div className="bg-gray-200 rounded-full p-3">  <svg height={25} width={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"/></svg></div>
               <span>Bidding Wallet <p>0.00</p></span>
        </Link>
      
        <hr class="bg-gray-300 opacity-100 mx-2 h-px"></hr>
        <Link class="flex items-center space-x-4 p-4 font-semibold w-full hover:bg-app" to=''>
         <BsPersonFill />
               <span>Sign Out</span>
        </Link>
        <hr class="bg-gray-300 opacity-100 mx-2 h-px"></hr>
        <Link class="flex items-center space-x-4 p-4 font-semibold w-full hover:bg-app" to=''>
         <BsWalletFill />
               <span>Manage wallets</span>
        </Link>
        <hr class="bg-gray-300 opacity-100 mx-2 h-px"></hr>
        <Link class="flex items-center space-x-4 p-4 font-semibold w-full hover:bg-app" to=''>
         <FiSettings />
               <span>Connect a different wallet</span>
        </Link>


      </Menu.Items>
    </Menu>
  );
};

export default Profilebar;
