import React, { useState } from "react";
import { RiPriceTag3Line } from "react-icons/ri";
import { IoTimeOutline} from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { toast } from "react-toastify";
import logo from '../../../../Assets/Logo.png'
const AuctionNft = () => {
    const [exptime,setExptime]=useState('')
    const notify = () => toast("Creating ERC-721")
    const handleChange = (event) => {
       
        setExptime(event.target.value);
      };


    return (
        <div className="lg:w-1/3 lg:mx-auto">
            <h3 className="font-semibold text-3xl text-center">Auction NFT</h3>

            <div class="flex m-4 gap-x-2 bg-white   mt-4 border border-pink-600 p-2 rounded-xl">
                <div className="bg-gray-300 rounded-full p-3">
                    <svg
                        height={25}
                        width={25}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                    >
                        <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
                    </svg>
                </div>
                <div class="flex flex-col">
                    <span class="">
                        <span
                            title="Fn9B549u8ACKG8wM8HyBhQJ25EdCkxXqmT3w13DrFU4i"
                            class="cursor-pointer d-inline-flex align-items-center whitespace-nowrap"
                        >
                            <span>Fn9B549 ... U4i</span>
                        </span>
                    </span>
                    <div className="text-black font-bold">Etherium</div>
                </div>
                <div className="ml-auto text-pink-600 text-xs font-bold ">
                    <span className="border-green-600 border-dashed border  rounded-full p-1">Connected</span>
                </div>
            </div>

            <div class="p-3">
                <label class="flex justify-center w-full h-32 px-4 transition  border-2 border-gray-400 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-500 focus:outline-none">
                    <span class="flex items-center space-x-2">
                       
                        <span class="font-medium text-gray-600 text-center">
                            PNG,GIF,MP4<br/>
                            <div class="text-pink-600  p-2 rounded-full mt-2 bg-white">Choose File</div>
                        </span>
                    </span>
                    <input type="file" name="file_upload" class="hidden" />
                </label>
            </div>

            <div className="p-3">
                <div className="flex justify-between">
                    <div>
                        <p className="font-bold text-xl">Put on marketplace</p>
                        <p className="text-xs">Enter price to allow users to instantly purchase your NFT</p>
                    </div>
                    <div>
                    <label class="relative inline-flex items-center mr-5 cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div class="w-11 h-6 bg-gray-300 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                        
                    </label>
                    </div>

                </div>
                <ul class="grid w-full gap-6 md:grid-cols-2 mt-2 ">
                    <li className="">
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-center w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-pink-600 peer-checked:border-green-700 peer-checked:text-green-700 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                            <div class="block ">
                                <div className="flex flex-col gap-y-2 justify-center items-center">
                                    <RiPriceTag3Line className="text-3xl"/>
                                    <p className="font-bold">Fixed<br/>price</p>

                                </div>
                            </div>
                        
                        </label>
                    </li>
                    <li>
                        <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer" />
                        <label for="hosting-big" class="inline-flex items-center justify-center w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-pink-600 peer-checked:border-green-700 peer-checked:text-green-700 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div class="block">
                            <div className="flex flex-col gap-y-2 justify-center items-center">
                                    <IoTimeOutline className="text-3xl"/>
                                    <p className="font-bold" >&nbsp;Timed<br/>auction</p>

                                </div>
                            </div>
                        
                        </label>
                    </li>
                </ul>
            </div>

            <div className="p-3">
              <div class="mb-4">
                 <label  class="block mb-2 font-bold  text-gray-900 dark:text-white">Date of Listing Expiration</label>
                 <input onChange={handleChange} type='date' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l block w-full p-2.5 focus:border-pink-600 focus:outline-none "  required />
              </div>
              <p className="text-xs font-bold">Expiration Time:&nbsp; {exptime} </p>
            </div>

            <div className="p-3">
                <div className="flex justify-between">
                    <div>
                        <p className="font-bold text-xl bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent">Unlock once purchased</p>
                        <p className="text-xs">Content will be unlocked after successfull transtion</p>
                    </div>
                    <div>
                    <label class="relative inline-flex items-center mr-5 cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div class="w-11 h-6 bg-gray-300 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>

                    </label>
                    </div>
                </div>
                <ul class="grid w-full gap-6 md:grid-cols-2 mt-2 ">
                    <li>
                        <div onClick={notify} class="inline-flex items-center justify-center w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-pink-600 peer-checked:border-green-700 peer-checked:text-green-700 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                            <div class="block ">
                                <div className="flex flex-col gap-y-2 justify-center items-center">
                                    <BsPlus className="text-3xl text-white bg-slate-400 rounded-full"/>
                                    <div>
                                        <span className="font-bold"> &nbsp;Create</span><p>ERC-721</p>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </li>
                    <li>
                        <input type="radio" id="hosting-big2" name="hosting2" value="hosting-big2" class="hidden peer" />
                        <label for="hosting-big2" class="inline-flex items-center justify-center w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-pink-600 peer-checked:border-green-700 peer-checked:text-green-700 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div class="block">
                            <div className="flex flex-col gap-y-2 justify-center items-center">
                                    <img width={'32px'} src={logo}/>
                                    <div>
                                        <span className="font-bold"> &nbsp;Rarible</span><p className="text-center">RARI</p>
                                    </div>

                                </div>
                            </div>
                        
                        </label>
                    </li>
                </ul>

            </div>

            <div className="p-3">
                <div className="flex justify-between mb-4">
                    <div>
                        <p className="font-bold text-xl bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent">Free Minting</p>
                        <p className="text-xs">Buyers will pay gas fees for minting</p>
                    </div>
                    <div>
                    <label class="relative inline-flex items-center mr-5 cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div class="w-11 h-6 bg-gray-300 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>

                    </label>
                    </div>
                </div>

                <div class="mb-4 ">
                    <label  class="block mb-1 text-sm font-bold  text-gray-900 dark:text-white"> Name</label>
                    <input placeholder="e.g. Redemable Shirt" type="text" id="disname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-pink-600 block w-full p-2.5  focus:outline-none"  required />
                </div>
                <div class="mb-4 ">
                    <label  class="block mb-1 text-sm font-bold  text-gray-900 dark:text-white"> Description </label>
                    <input placeholder="e.g. After purchase you will be able to get" type="text" id="disname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-pink-600 block w-full p-2.5  focus:outline-none"  required />
                </div>
                <div class="mb-4 ">
                    <label  class="block mb-1 text-sm font-bold  text-gray-900 dark:text-white"> Royalties </label>
                    <input placeholder="0% , 10% , 20% , Maximum is 50%" type="number" step={'10'}  min="0" max="50" id="diss" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-pink-600 block w-full p-2.5  focus:outline-none"  required />
                </div>
            </div>



        </div>
    );
};

export default AuctionNft;
