import { Tab } from '@headlessui/react'
import React from 'react'
import { FaDiscord, FaGlobe, FaTwitter } from 'react-icons/fa'
import Sybrus from '../../../../Assets/NFTs/Syberus.gif'
const LiveDropItem = ({name}) => {
  return (
   
    <div className='mt-8 p-6'>
        <div class="flex flex-1 flex-col-reverse md:flex-row mx-auto gap-8 justify-between">
           <div class="flex flex-col gap-4 flex-grow md:max-w-[40%]">
              <p class=" "><span className='border-pink-600 border rounded-lg py-1 px-2  text-pink-600'>ME LAUNCHPAD</span></p>
              <h1 class="mt-1 text-[58px] font-extrabold leading-none">{name}</h1>
              <div class="inline-flex gap-2 content-center w-fit-content flex-wrap">
                 <div class="my-auto"  data-tooltipped="" aria-describedby="tippy-tooltip-1" data-original-title="doxxed">
                    <div class="text-pink-600  text-[12px] h-fit-content my-auto border border-solid border-pink-600  rounded-md px-2 py-1 w-fit-content  tracking-widest">DOXXED</div>
                 </div>
                 <div class="border border-solid border-dark text-white-1 rounded-md py-1 px-2 h-fit-content text-[12px] font-bold flex gap-2 whitespace-nowrap"><span class="font-bold">TOTAL ITEMS</span><span class="font-bold">8,888</span></div>
                 <div class="border border-solid border-dark text-white-1 rounded-md py-1 px-2 h-fit-content text-[12px] flex gap-2 whitespace-nowrap">
                    <span>
                       <div title="Copy token address" class="font-bold" >Price 2.25<b>◎</b></div>
                    </span>
                 </div>
                 <div class="flex items-center gap-2">
                    <div class="" data-tooltipped="" aria-describedby="tippy-tooltip-2" >
                       <a href="https://discord.gg" target="_blank" rel="noreferrer" class="flex items-center">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" color="currentColor" class="text-white-2" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                             <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
                          </svg>
                       </a>
                    </div>
                    <div class="" data-tooltipped="" aria-describedby="tippy-tooltip-3" >
                       <a href="https://twitter.com/ST" target="_blank" rel="noreferrer" class="flex items-center">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" color="currentColor" class="text-white-2" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                             <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                          </svg>
                       </a>
                    </div>
                 </div>
              </div>
              <div class="mb-4 text-light-gray-500">
                 <p class="text-light-gray-500 mb-3 text-xl font-bold ">Each Mint Scroll contains an unrevealed Syberais NFT, which can be burned in order to mint the revealed collection.</p>
                 <p class="text-light-gray-500 mb-3 text-xl font-bold ">{name} is a journey into innovation. Seasonal Utility, Manual Reveal &amp; partnered with an AAA Art Studio to create one of the highest quality IPs in the industry.</p>
              </div>
              <div class="flex flex-col gap-4">
                 <div class="" data-tooltipped="" aria-describedby="tippy-tooltip-8" data-original-title="Whitelist" >
                    <div class="rounded-xl border border-solid border-dark p-3 flex flex-col gap-6 hover:bg-purple-1 hover:cursor-help border-pink-600 " >
                       <div class="flex justify-between items-center">
                          <div>
                             <div class="flex items-center">
                                <div class="border rounded-full py-0.5 px-2 text-[12px] bg-white  font-bold h-fit-content  text-white-1">Whitelist</div>
                             </div>
                          </div>
                          <div class="flex flex-row gap-2 tracking-wide items-center text-center flex-wrap justify-center text-pink-600 font-bold text-sm font-medium uppercase">
                             <span class="">Ends in</span>
                             <div class="flex gap-2 ml-auto">
                                <div class="" data-tooltipped="" aria-describedby="tippy-tooltip-4" >
                                   <div class="w-8 h-8 cursor-help  flex items-center justify-center rounded text-sm font-bold text-white-1 font-mono"><span>00</span></div>
                                </div>
                                <div class="" data-tooltipped="" aria-describedby="tippy-tooltip-5" >
                                   <div class="w-8 h-8 cursor-help  flex items-center justify-center rounded text-sm font-bold text-white-1 font-mono"><span>00</span></div>
                                </div>
                                <div class="" data-tooltipped="" aria-describedby="tippy-tooltip-6" >
                                   <div class="w-8 h-8 cursor-help  flex items-center justify-center rounded text-sm font-bold text-white-1 font-mono"><span>11</span></div>
                                </div>
                                <div class="" data-tooltipped="" aria-describedby="tippy-tooltip-7" >
                                   <div class="w-8 h-8 cursor-help  flex items-center justify-center rounded text-sm font-bold text-white-1 font-mono"><span>52</span></div>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div class="flex items-center gap-1.5 text-white-1 tracking-wide text-sm">
                          <span>WHITELIST <b>4675</b></span><b>•</b><span>VARIABLE LIMIT</span><b>•</b>
                          <span>
                             <div title="Copy token address" class="" >Price 2.25<b>◎</b></div>
                          </span>
                       </div>
                    </div>
                 </div>
                 <div class="" data-tooltipped="" aria-describedby="tippy-tooltip-13" data-original-title="Public" >
                    <div class="rounded-xl border-4 border-solid border-pink-600 p-3 flex flex-col gap-6 hover:bg-purple-1 hover:cursor-help" >
                       <div class="flex justify-between items-center">
                          <div>
                             <div class="flex items-center">
                                <div class="border rounded-full py-0.5 px-2 text-[12px] h-fit-content bg-dark font-bold  text-white-1">Public</div>
                             </div>
                          </div>
                          <div class="flex flex-row gap-2 tracking-wide items-center text-center flex-wrap justify-center text-pink-600 font-bold text-sm font-medium uppercase">
                             <span class="text-light-gray-200">Starts in</span>
                             <div class="flex gap-2 ml-auto">
                                <div class="" data-tooltipped="" aria-describedby="tippy-tooltip-9" >
                                   <div class="w-8 h-8 cursor-help  flex items-center justify-center rounded text-sm font-bold text-white-1 font-mono"><span>00</span></div>
                                </div>
                                <div class="" data-tooltipped="" aria-describedby="tippy-tooltip-10" >
                                   <div class="w-8 h-8 cursor-help  flex items-center justify-center rounded text-sm font-bold text-white-1 font-mono"><span>00</span></div>
                                </div>
                                <div class="" data-tooltipped="" aria-describedby="tippy-tooltip-11" >
                                   <div class="w-8 h-8 cursor-help  flex items-center justify-center rounded text-sm font-bold text-white-1 font-mono"><span>12</span></div>
                                </div>
                                <div class="" data-tooltipped="" aria-describedby="tippy-tooltip-12" >
                                   <div class="w-8 h-8 cursor-help  flex items-center justify-center rounded text-sm font-bold text-white-1 font-mono"><span>52</span></div>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div class="flex items-center gap-1.5 text-white-1 tracking-wide text-sm">
                          <span>MAX <b>8 TOKENS</b></span><b>•</b>
                          <span>
                             <div title="Copy token address" class="" >Price 2.50<b>◎</b></div>
                          </span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           <div class="md:max-w-[50%] flex flex-col items-center w-full flex-grow self-stretch">
              <div class="overflow-hidden w-full mb-4 rounded-3xl relative">
                 <div><img src={Sybrus} alt="Syberais: Mint Scrolls" class="object-cover aspect-square tw w-screen flex-grow rounded-3xl overflow-hidden"/><img width="1" height="1" class="absolute invisible" src={Sybrus}/></div>
                 <div class="absolute bottom-0 right-0 m-4">
                    <a href="" target="_blank" rel="noreferrer">
                       <button type="button" class="inline-flex justify-center items-center rounded-md text-white-1 bg-pink-600 py-2.5  gap-2 text-sm text-white font-bold  px-2">
                          <span>Explore collection</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" color="white" class="text-white-2">
                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15 10.833v5a1.666 1.666 0 01-1.667 1.667H4.167A1.667 1.667 0 012.5 15.833V6.667A1.667 1.667 0 014.167 5h5M12.5 2.5h5v5M8.332 11.667L17.499 2.5"></path>
                          </svg>
                       </button>
                    </a>
                 </div>
              </div>
              <div class="w-full ">
                 <div class="flex flex-col gap-1 flex-grow">
                    <div class="flex items-center justify-between text-sm text-gray-5">
                       <span>Total minted</span>
                       <span>
                          <b class="text-white-1">12%</b>
                          <div title="" class="" ><span class="ml-1" >(1099/8888)</span></div>
                       </span>
                    </div>
                    <div class="progress-bar__container">
                    <div class="bg-pink-600 h-1 w-[60%] "  ></div>
                    </div>
                 </div>
                 <div class="flex gap-4 bg-white items-center justify-between flex-wrap rounded-lg bg-purple-2 p-4 mt-4">
                    <div class="flex gap-4 mx-auto flex-col w-full items-center justify-center">
                       <div class="flex flex-col items-center flex-wrap gap-4 w-full">
                          <div class="flex justify-between items-center w-full">
                             <div class="flex flex-col">
                                <span>Price</span>
                                <div class="flex items-end text-2xl">
                                   <div class="flex items-center gap-1">
                                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" color="green" class="h-[20px] w-[20px]">
                                         <path d="M20.59 13.91L13.42 21.08C13.2343 21.266 13.0137 21.4135 12.7709 21.5141C12.5281 21.6148 12.2678 21.6666 12.005 21.6666C11.7422 21.6666 11.4819 21.6148 11.2391 21.5141C10.9963 21.4135 10.7757 21.266 10.59 21.08L2 12.5V2.5H12L20.59 11.09C20.9625 11.4647 21.1716 11.9716 21.1716 12.5C21.1716 13.0284 20.9625 13.5353 20.59 13.91V13.91Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                         <path d="M7 7.5H7.01" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                      </svg>
                                      <span class="text-white-1 font-bold">
                                         <span>
                                            <div title="Copy token address" class="" >2.25<b>◎</b></div>
                                         </span>
                                      </span>
                                   </div>
                                </div>
                             </div>
                          </div>
                          <div class="flex items-center w-full gap-2 justify-between">
                             <div class="flex flex-grow gap-2 w-1/2"><button type="button" class=" bg-pink-600 justify-center items-center rounded-md text-white flex-grow h-[44px] font-bold  ">Wallet not connected</button></div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
        <div class="relative">
		<div class="w-full absolute top-0 left-0 h-full bg-cover md:bg-contain bg-left md:bg-top bg-no-repeat opacity-10"></div>
		<div class="">
		   <div class="w-full h-[1px] border border-solid border-purple-1 mt-12 mb-4 lg:mt-32 lg:mb-10"></div>
		</div>
		<div class="relative flex flex-1 flex-col md:flex-row mx-auto gap-32 pb-20 justify-between overflow-hidden">
		   <div class="flex flex-col gap-4 flex-grow md:w-[40%]">
			  <h1 class="mt-1 text-[58px] font-extrabold leading-none">{name}</h1>
			  <div class="flex flex-wrap gap-4">
				 <a href="https://staratlas.com/" target="_blank" rel="noreferrer noopener" class="border border-solid border-purple-1 flex items-center gap-2 w-fit rounded-full px-2.5 py-1.5 text-white-2">
					<FaGlobe/>
					<span>Website</span>
				 </a>
				 <a href="https://discord.com/invite/staratlas" target="_blank" rel="noreferrer noopener" class="border border-solid border-purple-1 flex items-center gap-2 w-fit rounded-full px-2.5 py-1.5 text-white-2">
					<FaDiscord/>
					<span>Discord</span>
				 </a>
				 <a href="https://twitter.com/staratlas" target="_blank" rel="noreferrer noopener" class="border border-solid border-purple-1 flex items-center gap-2 w-fit rounded-full px-2.5 py-1.5 text-white-2">
					<FaTwitter/>
					<span>Twitter</span>
				 </a>
			  </div>
			  <div>
				 <h2 class="text-white-1 text-xl pt-1 pb-3" level="1">Episode 2</h2>
				 <p class="text-light-gray-500 mb-3 text-[16] tx-line-[24]">Ship wrecked, loved ones gone and morale down, Gyun and Moda travel to a near by station to beg, barter, and well… steal their way back on track. But when a ritual ceremony takes center stage at the station and a division of special investigators get word of Gyun’s presence, Gyun and Moda must move through the station with more care as the stakes have never been higher. Naturally they run into the last person they want to do business with. Desperate times, call for desperate measures.</p>
				 <h2 class="text-white-1 text-xl pt-1 pb-3" level="1">Game</h2>
				 <p class="text-light-gray-500 mb-3 text-[16] tx-line-[24]">Star Atlas is an upcoming open-world MMORPG based in the year 2620. In the distant future, three major factions have emerged: (1) the MUD Territory governed by humankind, (2) the ONI Region governed by a consortium of alien races, and (3) the Ustur Sector controlled by sentient androids. These factions are in an ongoing struggle for resources, territorial conquest, and political domination. You, a faction citizen of Star Atlas, will have the ability to influence the outcome of this intergalactic conflict while creating the opportunity to earn rewards for your contributions.</p>
				 <h2 class="text-white-1 text-xl pt-1 pb-3" level="1">Utility</h2>
				 <p class="text-light-gray-500 mb-3 text-[16] tx-line-[24]">You will receive exclusive cover art for the Star Atlas: CORE graphic novel series. Collectors of these covers will have:</p>
				 <ol class="text-light-gray-500 pb-6 ml-4" depth="0" >
					<li class="my-0" index="0">Early access to the monthly series</li>
					<li class="my-0" index="1">Expanded content</li>
					<li class="my-0" index="2">The ability to participate in the hunt for the Key of Iris.</li>
				 </ol>
				 <p class="text-light-gray-500 mb-3 text-[16] tx-line-[24]"><strong>Note:</strong> The writers have hidden a series of secret messages across the Core Series only available to those who collect the exclusive covers.</p>
				 <p class="text-light-gray-500 mb-3 text-[16] tx-line-[24]">“This will take you on a journey throughout the Star Atlas Universe, it will be up to the most dedicated solo adventures, coordinated guilds, hardy swashbucklers, and clever janitors to collect every issue and find the hidden messages contained inside”</p>
				 <ol class="text-light-gray-500 pb-6 ml-4" depth="0" >
					<li class="my-0" index="0">Collect all 18 exclusive issues to create the cypher key + enter the code in the vault page and be the first to unlock the hidden treasure.</li>
					<li class="my-0" index="1">Holding consecutive exclusive covers of episodes 1-18 of either Star Atlas or Magic Eden editions will allow you to redeem them for a Physical Hardcover Edition of the completed graphic novel.</li>
					<li class="my-0" index="2">
					   Being one of the first explorers to crack the cypher may earn them:
					   <ol class="text-light-gray-500 pb-6 ml-4" depth="1" >
						  <li class="my-0" index="0">Complete Digital Edition of CORE</li>
						  <li class="my-0" index="1">Meeting with the writing team</li>
						  <li class="my-0" index="2">Ship skin based off of the graphic novel</li>
						  <li class="my-0" index="3">Extra exclusive content…</li>
					   </ol>
					</li>
				 </ol>
				 <h2 class="text-white-1 text-xl pt-1 pb-3" level="1">Risks and Mitigations</h2>
				 <p class="text-light-gray-500 mb-3 text-[16] tx-line-[24]">New episodes of the graphic novel are planned to drop every first Wednesday of the month.*</p>
				 <p class="text-light-gray-500 mb-3 text-[16] tx-line-[24]">*Based on the progress of each individual chapter, these dates may shift in order to create the best possible narrative and reading experience.</p>
			  </div>
		   </div>
		   <div class="flex flex-col gap-4 flex-grow md:w-[50%]">

    <Tab.Group>
      <Tab.List className={`flex gap-x-4`}>
        <Tab className={`mr-2 py-2 px-4 text-white-2 font-medium text-lg`}>Roadmap</Tab>
        <Tab className={`mr-2 py-2 px-4 text-white-2 font-medium text-lg`}>Team</Tab>
        
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

    </div>
  )
}

export default LiveDropItem
