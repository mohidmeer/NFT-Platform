import { Disclosure, Tab } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { FaDiscord, FaFacebook, FaGlobe, FaInstagram, FaNetworkWired, FaPinterest, FaReddit, FaTelegram, FaTwitter } from 'react-icons/fa'
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
					   <div class="md:mt-12 bg-white rounded">
					   <div class=" before:rounded-lg">
						  <div class="overflow-hidden" >
							 <div class="overflow-auto" id="headlessui-disclosure-panel-48" data-headlessui-state="open">
								<div class="my-1 p-0 border  rounded-lg !border-none">
								   <div class="p-4 flex flex-col">
									  <div class="flex items-center justify-between"><span class="text-xl font-bold  text-white-2">Requirements</span></div>
									  <div class=" border border-gray-300 p-4 rounded-lg flex flex-col gap-3 mt-4"><span class="text-sm text-white-2 font-medium">You must be in the<a href="https://discord.gg/uHg7mKcr7v" class="text-pink-hot" target="_blank" rel="noreferrer noopener">&nbsp;The Residents&nbsp;</a>Discord server.&nbsp;You must also have at least one of the following roles:<br/><span class="text-pink-hot">Royal-listed Residents</span></span><span class="text-sm text-white-2 font-medium">You must follow on Twitter: <a href="https://twitter.com/TheResidentsNFT" class="text-pink-hot" target="_blank" rel="noreferrer noopener">@TheResidentsNFT</a></span></div>
									  <div class="flex flex-col gap-4 mt-4">
										 <div class=" border border-gray-300 p-4 rounded-lg flex flex-col">
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
												  <span class="font-medium text-white-2 text-sm">Connect to Facebook</span>
											   </span>
											   <button type="button" class="inline-flex justify-center items-center rounded-md text-white-1  rounded-lg w-[152px] h-8 text-xs flex items-center gap-x-2.5">
												  <FaFacebook className='text-xl'/>
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
												  <span class="font-medium text-white-2 text-sm">Connect to Twitter</span>
											   </span>
											   <button type="button" class="inline-flex justify-center items-center rounded-md text-white-1  rounded-lg w-[152px] h-8 text-xs flex items-center gap-x-2.5">
                                                <FaTwitter className='text-xl'/>
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
												  <span class="font-medium text-white-2 text-sm">Connect to Instagram</span>
											   </span>
											   <button type="button" class="inline-flex justify-center items-center rounded-md text-white-1  rounded-lg w-[152px] h-8 text-xs flex items-center gap-x-2.5">
                                                <FaInstagram className='text-xl'/>
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
                                                <FaDiscord className='text-xl'/>
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
												  <span class="font-medium text-white-2 text-sm">Connect to Reddit</span>
											   </span>
											   <button type="button" class="inline-flex justify-center items-center rounded-md text-white-1  rounded-lg w-[152px] h-8 text-xs flex items-center gap-x-2.5">
                                                <FaReddit className='text-xl'/>
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
												  <span class="font-medium text-white-2 text-sm">Connect to Pinterest</span>
											   </span>
											   <button type="button" class="inline-flex justify-center items-center rounded-md text-white-1  rounded-lg w-[152px] h-8 text-xs flex items-center gap-x-2.5">
                                                <FaPinterest className='text-xl'/>
												  Connect
											   </button>
											</div>
										 </div>
										 <div class=" border border-gray-300 p-4 rounded-lg flex flex-col">
											<div class="flex items-center justify-between flex-wrap gap-y-4 w-full">
											   <span class="flex items-center gap-2 h-8 w-200px" >
												  <svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#B8B0BF">
													 <circle cx="12" cy="12" r="12" fill="#B8B0BF"></circle>
													 <path d="M18.6667 7L9.5 16.1667L5.33333 12" stroke="#F5F3F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
												  </svg>
												  <span class="font-medium text-white-2 text-sm">Connect to Pinterest</span>
											   </span>
											   <button type="button" class="inline-flex justify-center items-center rounded-md text-white-1  rounded-lg w-[152px] h-8 text-xs flex items-center gap-x-2.5">
                                                <FaTelegram className='text-xl'/>
												  Connect
											   </button>
											</div>
										 </div>
									  </div>
									  <button type="button" class="inline-flex justify-center items-center rounded-md text-white bg-pink-600  h-11 mt-8 mb-8  font-medium" disabled="">Verify and Enter</button><span class="text-white-2 font-medium text-sm">By clicking 'Verify and Enter' you agree to our <a href="https://-terms-of-service.pdf" class="mr-1 hover:opacity-80" target="_blank" rel="noreferrer">
										<span class="text-pink-primary hover:underline">Terms of Service</span></a></span>
								   </div>
								</div>
							 </div>
						  </div>
					   </div>


						
					   </div>

                    

					   
					</div>
					<div class="flex-1">
					   <div class="flex justify-center items-center rounded-md overflow-hidden w-full">
                        <img draggable="false" loading="lazy" src="https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://creator-hub-prod.s3.us-east-2.amazonaws.com/netrippers_pfp_1669343607794.gif" alt="Netr1pp3r$ collectiton drop picture" />
                       </div>
					   <Tab.Group>
      <Tab.List className={`flex gap-x-4`}>
        <Tab className={`mr-2 py-2 px-4 text-white-2 font-medium text-lg tab-menu`}>Roadmap</Tab>
        <Tab className={`mr-2 py-2 px-4 text-white-2 font-medium text-lg tab-menu`}>Team</Tab>
        
      </Tab.List>
      <Tab.Panels>
      <Tab.Panel>
        <div className='p-4 '>
            <p className='font-bold text-gray-800 '>
                The CORE series will be composed of 18 episodes with exclusive covers for both Magic Eden and Star Altas. Each episode is dropped on the first Wednesday of every month. These covers will only be available for two weeks after the start of the open mint. The rest of the collection will then be burned, lost in time.
               Each episode of CORE will be available to read in six different languages on the Star Atlas website as well as various digital readers for free.
               The Star Atlas team will host community contests tied to the graphic novel lore as well as crossover activities connected to the Star Atlas games.</p>

        </div>

      </Tab.Panel>
        <Tab.Panel>
            <div class="p-4">
				 <h2 class="text-white-2 text-[14px] font-semibold" level="2"><strong>Writing Team</strong></h2>
				 <h1 class="text-white-2 text-[14px] font-semibold" level="1">Tim Mcburnie - Author and Illustrator of CORE</h1>
				 <div class="my-1">
					<p class="text-light-gray-500 text-md text-[14px]"><a class="text-pink-600 font-bold block text-md text-[14px]" href="http://www.timmcburnie.com/" target="_blank" rel="noreferrer">Website</a>
					   <a class="text-pink-600 font-bold block text-md text-[14px]" href="https://www.artsmcburnie" target="_blank" rel="noreferrer">Art Station</a>
					   Tim is a freelance concept designer, illustrator and author based in Australia, specializing in character design and story development. He has worked in the French comicbook market as well as animation and video games. His client list includes companies such as Editions Delcourt, Gunfire Games, Animal Logic,  Ankama, Blur studios, Blizzard Entertainment, and Wizards of the Coast.
					</p>
					<br/>
				 </div>
				 <h1 class="text-white-2 text-[14px] font-semibold" level="1">Matt Medney - Head Writer</h1>
				 <div class="my-1">
					<p class="text-light-gray-500 text-md text-[14px]"><a class="text-pink-600 font-bold block text-md text-[14px]" href="https://twitter.com/@matthewmedney" target="_blank" rel="noreferrer">Twitter</a>
					   <a class="text-pink-600 font-bold block text-md text-[14px]" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">Linkedin</a>
					   <a class="text-pink-600 font-bold block text-md text-[14px]" href="https://twitter.com/" target="_blank" rel="noreferrer">CEO @heavymetalink</a>
					   <a class="text-pink-600 font-bold block text-md text-[14px]" href="https://twitter.com/" target="_blank" rel="noreferrer">Captain @musicmeetscomic</a>
					   <a class="text-pink-600 font-bold block text-md text-[14px]" href="https://twitter.com/" target="_blank" rel="noreferrer">Head Writer @StarAtlas</a>
					   <a class="text-pink-600 font-bold block text-md text-[14px]" href="https://twitter.com/" target="_blank" rel="noreferrer">Creative Director @Metapacworld</a>
					   Creating the leading celebrity driven custom comics company, Herø Projects wasn’t enough for the eccentric renaissance man. Matthew is also the CEO of the seminal and generational genre bending company, Heavy Metal. However his passion for writing and world building has never faltered. A creative force with dozens of graphic titles and his debut novel series coming Fall 2020: Beyond Kuiper, Matthew is creating during every moment of his existence.
					</p>
					<br/>
				 </div>
				 <h2 class="text-white-2 text-[14px] font-semibold" level="2"><strong>Founding Team</strong></h2>
				 <h1 class="text-white-2 text-[14px] font-semibold" level="1">Michael Wagner - CFA, CEO and Co-Founder</h1>
				 <div class="my-1">
					<p class="text-light-gray-500 text-md text-[14px]"><a class="text-pink-600 font-bold block text-md text-[14px]" href="https://www.linkedin.com/in/wagnermt/" target="_blank" rel="noreferrer">Linkedin</a>
					   <a class="text-pink-600 font-bold block text-md text-[14px]" href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
					   A serial entrepreneur and founder with a formal background in capital markets analysis, economics, and valuation methods. He has founded multiple companies centered around the emerging blockchain and cryptocurrency industry, the most recent of which is Star Atlas. Collectively, he possesses 10+ years in capital markets analysis, holds his Chartered Financial Analyst designation, 7+ years in blockchain, 24+ years in gaming, and 5+ years in executive leadership.
					</p>
					<br/>
				 </div>
				 <h1 class="text-white-2 text-[14px] font-semibold" level="1">Pablo Quiroga - CRO</h1>
				 <div class="my-1">
					<p class="text-light-gray-500 text-md text-[14px]"><a class="text-pink-600 font-bold block text-md text-[14px]" href="https://www.linkedin.com/in/pabloiquiroga/" target="_blank" rel="noreferrer">Linkedin</a>
					   <a class="text-pink-600 font-bold block text-md text-[14px]" href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a>
					   Pablo Quiroga serves as Co-founder &amp; Chief Revenue Officer of Star Atlas, the fastest-growing next-gen gaming metaverse globally. Star Atlas is a AAA title MMORPG gaming metaverse emerging from cutting-edge web 3 infrastructure. Fueled by a world-class team, Star Atlas leverages Solana’s state-of-the-art layer 1, unreal engine 5 graphics, nanite technology, and decentralized financial technologies to bring immersive experiences to audiences around the globe.
					</p>
					<br/>
				 </div>
				 <div class="my-1">
					<p class="text-light-gray-500 text-md text-[14px]">With more than two decades of experience in legacy industry environments and high-growth startups, Pablo’s mission at Star Atlas drives the company’s global strategic partnerships and web3 open revenue model. Since launching on January 14, 2021, Pablo has exponentially expanded Star Atlas’ external relationships with platforms, IP holders, studios, and has driven the growth of its corporate and business development, marketing and communications, XR plan, community growth, and business affairs functions, among many other contributions.</p>
					<br/>
				 </div>
				 <div class="my-1">
					<p class="text-light-gray-500 text-md text-[14px]">Prior to Star Atlas, Pablo served as CRO at Vanguard Scientific, where he oversaw business development, hardware integration research, supply chain management, and sales for end-to-end cannabis processing solutions across facilities globally. Currently, Pablo conducts ecosystem growth by investing and serving as an advisor at companies in the psychedelic sector and digital therapeutics respectively. Pablo was an early investor at Psytech recently acquired by Wesana Health and strategic adviser at Frequency Mind, a next-generation conscious breath digital platform.</p>
					<br/>
				 </div>
				 <h1 class="text-white-2 text-[14px] font-semibold" level="1">Jacob Floyd - CTO</h1>
				 <div class="my-1">
					<p class="text-light-gray-500 text-md text-[14px]"><a class="text-pink-600 font-bold block text-md text-[14px]" href="https://www.linkedin.com/in/jacob-floyd-22b3896b/" target="_blank" rel="noreferrer">Linkedin</a>
					   <a class="text-pink-600 font-bold block text-md text-[14px]" href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a>
					</p>
					<br/>
				 </div>
				 <h1 class="text-white-2 text-[14px] font-semibold" level="1">Danny Floyd - CPO</h1>
				 <div class="my-1">
					<p class="text-light-gray-500 text-md text-[14px]"><a class="text-pink-600 font-bold block text-md text-[14px]" href="https://www.linkedin.com/in/dannyfloyd/" target="_blank" rel="noreferrer">Linkedin</a>
					   <a class="text-pink-600 font-bold block text-md text-[14px]" href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a>
					</p>
					<br/>
				 </div>
			  </div>
        </Tab.Panel>
        
      </Tab.Panels>
    </Tab.Group>
					</div>
				 </div>
    </div>
  )
}

export default WhitelistRegisterItem