import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { FaDiscord, FaGlobe, FaNetworkWired, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const WhitelistRegisterItem = ( {name}  ) => {
  return (
    <div className='p-8 border border-dark rounded-xl mt-8'>
         <Link to="/drops"><span class="hover:opacity-80 text-pink-hot">See all drops</span></Link>
				 <div class="flex flex-col-reverse md:flex-row gap-4 md:gap-12 justify-content-center mt-4">
					<div class="flex-1 flex flex-col gap-4">
					   <div class="mt-4 lg:mt-0 rounded-xl">
						  <h1 class="text-5xl font-extrabold leading-tight">{name}</h1>
						  <div class="flex items-center mt-4 flex-wrap gap-y-4">
							 <a href="https://there.com/" target="_blank" rel="noreferrer noopener" class="mr-4 border         border-black     flex items-center w-fit rounded-full px-2.5 py-1.5 text-white-2">                 <FaGlobe/>                       </a>
                             <a href="https://twitter.com/The" target="_blank" rel="noreferrer noopener" class="mr-4 border    border-black     flex items-center w-fit rounded-full px-2.5 py-1.5 text-white-2">            <FaTwitter/>                     </a>
                             <a href="https://discord.gg/uHg7mKv" target="_blank" rel="noreferrer noopener" class="mr-4 border border-black     flex items-center w-fit rounded-full px-2.5 py-1.5 text-white-2">         <FaDiscord/>                     </a>
							 <div class="cursor-help" data-tooltipped="" aria-describedby="tippy-tooltip-502" >
								<button role="button" class="flex gap-2 items-center px-4 py-2 border rounded-lg   border-gray-700" disabled="">
								   <span>
									  <svg stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" stroke="#e42575" fill="#4D3D5C" width="1rem" height="1rem">
										 <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
									  </svg>
								   </span>
								   <span>1301</span><span>Upvote</span>
								</button>
							 </div>
						  </div>
						  <div class="my-6 break-words text-xl font-bold text-gray-3">The first Artist Residency project that produces 1/1 digital art with a profit-sharing mechanism</div>
					   </div>
					   <div class="md:mt-12"></div>

                       <Disclosure as="div" className={` bg-dark-2 rounded-lg border border-pink-600     `}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-4 text-left text-sm font-medium  hover:bg-dark focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-3xl font-bold ml-4">{name}</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className=" px-4 pt-4 pb-2 rounded  text-lg ">
              <div class="magic-pseudo-border magic-pseudo-border-vertical before:rounded-lg">
						  <div class="overflow-hidden" >
							 <div class="overflow-auto" id="headlessui-disclosure-panel-48" data-headlessui-state="open">
								<div class="my-1 p-0 border  rounded-lg !border-none">
								   <div class="p-4 flex flex-col">
									  <div class="flex items-center justify-between"><span class="text-sm font-semibold text-white-2">Requirements</span></div>
									  <div class="border border border-gray-300 p-4 rounded-lg flex flex-col gap-3 mt-4"><span class="text-sm text-white-2 font-medium">You must be in the<a href="https://discord.gg/uHg7mKcr7v" class="text-pink-hot" target="_blank" rel="noreferrer noopener">&nbsp;The Residents&nbsp;</a>Discord server.&nbsp;You must also have at least one of the following roles:<br/><span class="text-pink-hot">Royal-listed Residents</span></span><span class="text-sm text-white-2 font-medium">You must follow on Twitter: <a href="https://twitter.com/TheResidentsNFT" class="text-pink-hot" target="_blank" rel="noreferrer noopener">@TheResidentsNFT</a></span></div>
									  <div class="flex flex-col gap-4 mt-4">
										 <div class="border border border-gray-300 p-4 rounded-lg flex flex-col">
											<div class="flex items-center justify-between flex-wrap gap-y-4 w-full">
											   <span class="flex items-center gap-2 h-8 w-200px" >
												  <svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#00D181">
													 <circle cx="12" cy="12" r="12" fill="#00D181"></circle>
													 <path d="M18.6667 7L9.5 16.1667L5.33333 12" stroke="#F5F3F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
												  </svg>
												  <span class="font-medium text-white-2 text-sm">Connect Solana wallet</span>
											   </span>
											   <button type="button" class="inline-flex justify-center items-center rounded-md text-white-1  rounded-lg w-[152px] h-8 text-xs flex items-center gap-x-2.5 hidden">
												  <div class="bg-gray-100 rounded-full w-5 h-5 flex justify-center items-center">
													 <svg width="16" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
														<use href="#solana-icon"></use>
													 </svg>
												  </div>
												  Connect Wallet
											   </button>
											</div>
											<div class="bg-gray-100 border-gray-500 border border rounded-lg p-2 text-left truncate mt-1 text-sm">Fn9B549u8ACKG8wM8HyBhQJ25EdCkxXqmT3w13DrFU4i</div>
										 </div>
										 <div class="border border border-gray-300 p-4 rounded-lg flex flex-col">
											<div class="flex items-center justify-between flex-wrap gap-y-4 w-full">
											   <span class="flex items-center gap-2 h-8 w-200px" >
												  <svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#00D181">
													 <circle cx="12" cy="12" r="12" fill="#00D181"></circle>
													 <path d="M18.6667 7L9.5 16.1667L5.33333 12" stroke="#F5F3F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
												  </svg>
												  <span class="font-medium text-white-2 text-sm">Login to your ME account</span>
											   </span>
											   <button type="button" class="inline-flex justify-center items-center rounded-md text-white-1  rounded-lg w-[152px] h-8 text-xs flex items-center gap-x-2.5 hidden">Login</button>
											</div>
										 </div>
										 <div class="border border border-gray-300 p-4 rounded-lg flex flex-col">
											<div class="flex items-center justify-between flex-wrap gap-y-4 w-full">
											   <span class="flex items-center gap-2 h-8 w-200px" >
												  <svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#B8B0BF">
													 <circle cx="12" cy="12" r="12" fill="#B8B0BF"></circle>
													 <path d="M18.6667 7L9.5 16.1667L5.33333 12" stroke="#F5F3F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
												  </svg>
												  <span class="font-medium text-white-2 text-sm">Connect to Twitter</span>
											   </span>
											   <button type="button" class="inline-flex justify-center items-center rounded-md text-white-1  rounded-lg w-[152px] h-8 text-xs flex items-center gap-x-2.5">
												  <FaTwitter/>
												  Connect
											   </button>
											</div>
										 </div>
										 <div class="border border border-gray-300 p-4 rounded-lg flex flex-col">
											<div class="flex items-center justify-between flex-wrap gap-y-4 w-full">
											   <span class="flex items-center gap-2 h-8 w-200px" >
												  <svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#B8B0BF">
													 <circle cx="12" cy="12" r="12" fill="#B8B0BF"></circle>
													 <path d="M18.6667 7L9.5 16.1667L5.33333 12" stroke="#F5F3F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
												  </svg>
												  <span class="font-medium text-white-2 text-sm">Connect to Discord</span>
											   </span>
											   <button type="button" class="inline-flex justify-center items-center rounded-md text-white-1  rounded-lg w-[152px] h-8 text-xs flex items-center gap-x-2.5">
                                                <FaDiscord/>
												  Connect
											   </button>
											</div>
										 </div>
									  </div>
									  <button type="button" class="inline-flex justify-center items-center rounded-md text-white-1  h-11 mt-8 mb-8 !rounded-lg font-medium PlainButton_disabled__o-JAq" disabled="">Verify and Enter</button><span class="text-white-2 font-medium text-sm">By clicking 'Verify and Enter' you agree to our <a href="https://magiceden.io/magic-eden-list-terms-of-service.pdf" class="mr-1 hover:opacity-80" target="_blank" rel="noreferrer"><span class="text-pink-primary hover:underline">Terms of Service</span></a></span>
								   </div>
								</div>
							 </div>
						  </div>
					   </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

					   
					</div>
					<div class="flex-1">
					   <div class="flex justify-center items-center rounded-md overflow-hidden w-full">
                        <img draggable="false" loading="lazy" src="https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://creator-hub-prod.s3.us-east-2.amazonaws.com/netrippers_pfp_1669343607794.gif" alt="Netr1pp3r$ collectiton drop picture" />
                       </div>
					</div>
				 </div>
    </div>
  )
}

export default WhitelistRegisterItem