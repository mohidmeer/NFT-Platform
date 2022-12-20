import React from 'react'
import { FaDiscord, FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaReddit, FaTwitter, FaYoutube } from 'react-icons/fa'

const Top = () => {
  return (
    <div className=' md:full lg:w-3/6 p-4 '>
        <div className='flex'>
        <div className=' mt-4   '>
            <img className=' w-72 rounded ' src="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://res.cloudinary.com/coin-nft/image/upload/c_limit,q_auto,w_1200/f_auto/v1/cache/1/20/56/2056928ce1412f15a5193f740e3630c176ec580d8bd47076b4166d091bac36e2-MjJiYjdmM2QtOTJiMC00M2Q3LTkxMzQtOGFiMmM5MjhjYzE3"/>
        </div>
        <div className=' border    mt-4 p-4 '>
            <p className=' font-bold text-4xl mb-2'>External Link </p>
            <div class="mb-4 w-full">
            <label  class="block mb-2 text-xs font-bold  text-gray-900 dark:text-white">Providing an External Link allows buyers to find out more about you</label>
            <input type='text' id="disname" placeholder='External Link' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
            </div>
            <div className='grid grid-cols-4  gap-2 '>
                <button className='bg-white rounded-md p-2 flex justify-center'><FaFacebook/></button>
                <button className='bg-white rounded-md p-2 flex justify-center'><FaTwitter/></button>
                <button className='bg-white rounded-md p-2 flex justify-center'><FaInstagram/></button>
                <button className='bg-white rounded-md p-2 flex justify-center'><FaReddit/></button>
                <button className='bg-white rounded-md p-2 flex justify-center'><FaDiscord/></button>
                <button className='bg-white rounded-md p-2 flex justify-center'><FaYoutube/></button>
                <button className='bg-white rounded-md p-2 flex justify-center'><FaLinkedin/></button>
                <button className='bg-white rounded-md p-2 flex justify-center'><FaPinterest/></button>
            </div>
        </div>


        </div>
        <div className=''>
        <div class="mb-4 mt-4">
            <label  class="block mb-2 font-bold  text-gray-900 dark:text-white">White Paper</label>
            <input type='text' id="disname" placeholder='External Link' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
      </div>
      <div class="mb-4">
            <label  class="block mb-2 font-bold  text-gray-900 dark:text-white">Road Map</label>
            <input type='text' id="disname" placeholder='External Link' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
      </div>

        </div>
        <div>
            <h2 className='text-3xl font-bold'>Game</h2>
            <p className='leading-7  '>The Enigma Cube is the latest puzzle from The Fracture. By owning an Enigma Cube NFT you will possess all the information required to solve it. The first to do so will receive a lucrative reward. Those who have participated and hold a cube will also be eligible for random mystery prizes. Many secrets are contained within this NFT, some more useful than others…</p>

   
        </div>
        <div className='mt-4'>
            <h2 className='text-3xl font-bold'>Utility</h2>
            <p className='leading-7  '>The Enigma Cube is the latest puzzle from The Fracture. By owning an Enigma Cube NFT you will possess all the information required to solve it. The first to do so will receive a lucrative reward. Those who have participated and hold a cube will also be eligible for random mystery prizes. Many secrets are contained within this NFT, some more useful than others…</p>
        </div>
        <div class="">
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
				
			  </div>
        
       
        </div>
      
        


  )
}

export default Top