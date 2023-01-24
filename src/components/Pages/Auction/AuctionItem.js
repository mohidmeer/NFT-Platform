import {useQuery} from '@apollo/client';
import {Tab} from '@headlessui/react';
import React from 'react'
import {FaDiscord, FaGlobe, FaTwitter} from 'react-icons/fa';
import {useParams} from 'react-router-dom';
import {SINGLE_AUCTION_NFTS} from '../../../graphql/queries/nftQueries';
import {getCountDown} from '../../../utils/global';

const AuctionItem = ({}) => {
  const {collectionAddress} = useParams()

  const {data} = useQuery(SINGLE_AUCTION_NFTS, {
    variables: {
      collectionAddress: collectionAddress
    }
  })

  return (
    <div className='p-5'>
      <div class="  flex justify-center border-dark border rounded-2xl flex-col lg:flex-row  md:flex-col p-6 gap-5">
        <div className="w-full  lg:pt-44  ">
          <h1 className="text-5xl font-bold mb-3">{data?.singleAuctionNft.name}</h1>
          <p className="text-sm  text-gray-400 ">
            CREATED BY <span className="ml-1 text-pink-600">{data?.singleAuctionNft.creator.displayName}</span>
          </p>
          <p className="lg:w-3/4 md:w-4/5 mt-3 text-gray-600 font-bold text-lg">
            {data?.singleAuctionNft.description}
          </p>
          <div class="p-4 mt-2 lg:w-3/4 md:w-3/4 bg-dark-2 rounded-md flex justify-between gap-5 flex-col md:flex-row">
            {console.log(getCountDown(data?.singleAuctionNft.endTime))}
            <div class="flex flex-col">
              <span class="text-gray-500 fs-14px">CURRENT BID</span>
              <span class="  font-extrabold text-3xl">{data?.singleAuctionNft.currentBid} SOL</span>
              <span class="text-gray-500 fs-12px">~$0</span>
            </div>
            <div class="flex flex-col">
              <span class="text-gray-500 fs-14px">AUCTION ENDS IN</span>
              <div class="flex flex-row basis-0 gap-4">
                <div class="flex flex-col">
                  <span class=" font-extrabold text-3xl">{getCountDown(data?.singleAuctionNft.endTime)._data.days}</span>
                  <span class="text-gray-500 fs-12px">Days</span>
                </div>
                <div class="flex flex-col">
                  <span class=" font-extrabold text-3xl">{getCountDown(data?.singleAuctionNft.endTime)._data.hours}</span>
                  <span class="text-gray-500 fs-12px">Hours</span>
                </div>
                <div class="flex flex-col">
                  <span class=" font-extrabold text-3xl">{getCountDown(data?.singleAuctionNft.endTime)._data.minutes}</span>
                  <span class="text-gray-500 fs-12px">Minutes</span>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-between mt-4 lg:w-3/4 md:w-3/4'>
            <p className='font-bold text-gray-700'>LAST BID BY <span className='ml-2 text-pink-600  tracking-widest font-bold'>ACF13...F345</span></p>
            <p className='font-bold text-gray-600'>12/12/22</p>
          </div>
          <div className='mt-4 flex lg:w-3/4 md:w-3/4'>
            <button className=' focus:ring-4 focus:ring-green-300 hover:bg-green-600 m-auto w-full bg-pink-600 font-bold py-2 px-4 text-white rounded-lg '>
              Place your  Bid
            </button>
          </div>
        </div>
        <div className="w-full ">
          <img
            draggable="false"
            class="rounded-3xl lg:w-full  md:w-3/4 "
            src={data?.singleAuctionNft.imageUrl}
          />
        </div>
      </div>
      <div class="relative">
        <div class="w-full absolute top-0 left-0 h-full bg-cover md:bg-contain bg-left md:bg-top bg-no-repeat opacity-10"></div>
        <div class="">
          <div class="w-full h-[1px] border border-solid border-purple-1 mt-12 mb-4 lg:mt-32 lg:mb-10"></div>
        </div>
        <div class="relative flex flex-1 flex-col md:flex-row mx-auto gap-32 pb-20 justify-between overflow-hidden">
          <div class="flex flex-col gap-4 flex-grow md:w-[40%]">
            <h1 class="mt-1 text-[58px] font-extrabold leading-none">{data?.singleAuctionNft.name}</h1>
            <div class="flex flex-wrap gap-4">
              <a href="https://staratlas.com/" target="_blank" rel="noreferrer noopener" class="border border-solid border-purple-1 flex items-center gap-2 w-fit rounded-full px-2.5 py-1.5 text-white-2">
                <FaGlobe />
                <span>Website</span>
              </a>
              <a href="https://discord.com/invite/staratlas" target="_blank" rel="noreferrer noopener" class="border border-solid border-purple-1 flex items-center gap-2 w-fit rounded-full px-2.5 py-1.5 text-white-2">
                <FaDiscord />
                <span>Discord</span>
              </a>
              <a href="https://twitter.com/staratlas" target="_blank" rel="noreferrer noopener" class="border border-solid border-purple-1 flex items-center gap-2 w-fit rounded-full px-2.5 py-1.5 text-white-2">
                <FaTwitter />
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
                      <br />
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
                      <br />
                    </div>
                    <h2 class="text-white-2 text-[14px] font-semibold" level="2"><strong>Founding Team</strong></h2>
                    <h1 class="text-white-2 text-[14px] font-semibold" level="1">Michael Wagner - CFA, CEO and Co-Founder</h1>
                    <div class="my-1">
                      <p class="text-light-gray-500 text-md text-[14px]"><a class="text-pink-600 font-bold block text-md text-[14px]" href="https://www.linkedin.com/in/wagnermt/" target="_blank" rel="noreferrer">Linkedin</a>
                        <a class="text-pink-600 font-bold block text-md text-[14px]" href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
                        A serial entrepreneur and founder with a formal background in capital markets analysis, economics, and valuation methods. He has founded multiple companies centered around the emerging blockchain and cryptocurrency industry, the most recent of which is Star Atlas. Collectively, he possesses 10+ years in capital markets analysis, holds his Chartered Financial Analyst designation, 7+ years in blockchain, 24+ years in gaming, and 5+ years in executive leadership.
                      </p>
                      <br />
                    </div>
                    <h1 class="text-white-2 text-[14px] font-semibold" level="1">Pablo Quiroga - CRO</h1>
                    <div class="my-1">
                      <p class="text-light-gray-500 text-md text-[14px]"><a class="text-pink-600 font-bold block text-md text-[14px]" href="https://www.linkedin.com/in/pabloiquiroga/" target="_blank" rel="noreferrer">Linkedin</a>
                        <a class="text-pink-600 font-bold block text-md text-[14px]" href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a>
                        Pablo Quiroga serves as Co-founder &amp; Chief Revenue Officer of Star Atlas, the fastest-growing next-gen gaming metaverse globally. Star Atlas is a AAA title MMORPG gaming metaverse emerging from cutting-edge web 3 infrastructure. Fueled by a world-class team, Star Atlas leverages Solana’s state-of-the-art layer 1, unreal engine 5 graphics, nanite technology, and decentralized financial technologies to bring immersive experiences to audiences around the globe.
                      </p>
                      <br />
                    </div>
                    <div class="my-1">
                      <p class="text-light-gray-500 text-md text-[14px]">With more than two decades of experience in legacy industry environments and high-growth startups, Pablo’s mission at Star Atlas drives the company’s global strategic partnerships and web3 open revenue model. Since launching on January 14, 2021, Pablo has exponentially expanded Star Atlas’ external relationships with platforms, IP holders, studios, and has driven the growth of its corporate and business development, marketing and communications, XR plan, community growth, and business affairs functions, among many other contributions.</p>
                      <br />
                    </div>
                    <div class="my-1">
                      <p class="text-light-gray-500 text-md text-[14px]">Prior to Star Atlas, Pablo served as CRO at Vanguard Scientific, where he oversaw business development, hardware integration research, supply chain management, and sales for end-to-end cannabis processing solutions across facilities globally. Currently, Pablo conducts ecosystem growth by investing and serving as an advisor at companies in the psychedelic sector and digital therapeutics respectively. Pablo was an early investor at Psytech recently acquired by Wesana Health and strategic adviser at Frequency Mind, a next-generation conscious breath digital platform.</p>
                      <br />
                    </div>
                    <h1 class="text-white-2 text-[14px] font-semibold" level="1">Jacob Floyd - CTO</h1>
                    <div class="my-1">
                      <p class="text-light-gray-500 text-md text-[14px]"><a class="text-pink-600 font-bold block text-md text-[14px]" href="https://www.linkedin.com/in/jacob-floyd-22b3896b/" target="_blank" rel="noreferrer">Linkedin</a>
                        <a class="text-pink-600 font-bold block text-md text-[14px]" href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a>
                      </p>
                      <br />
                    </div>
                    <h1 class="text-white-2 text-[14px] font-semibold" level="1">Danny Floyd - CPO</h1>
                    <div class="my-1">
                      <p class="text-light-gray-500 text-md text-[14px]"><a class="text-pink-600 font-bold block text-md text-[14px]" href="https://www.linkedin.com/in/dannyfloyd/" target="_blank" rel="noreferrer">Linkedin</a>
                        <a class="text-pink-600 font-bold block text-md text-[14px]" href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a>
                      </p>
                      <br />
                    </div>
                  </div>
                </Tab.Panel>

              </Tab.Panels>
            </Tab.Group>


          </div>
        </div>
      </div>

    </div>
  );
}

export default AuctionItem
