import React from 'react'

const Hero = () => {
  return (
    <div className='lg:px-24'>
    <div class="grid lg:grid-cols-2 gap-4  mb-20 border border-dark p-4 rounded-xl ">
        <div className="order-last lg:order-first md:order-last">
        <div className="  w-fit rounded   text-pink-600 px-3 border border-pink-600"> Featured Item </div>
        <h2 class="text-5xl mt-1">Mushroom Party <br/> Soldiers </h2>

        <div className=" ">
        <p class="mt-3 font-bold text-gray-500 lg:w-3/4 md:w-4/5">
          <p class="text-gray-500 mb-3  ">A collection of 2,000 Skeleton Soldiers ready to game for SOL. Own the ultimate loyalty pass for the Mushroom Party gaming ecosystem. Owners of our NFT earn SOL for playing Mushroom Party games, receive exclusive discounts at our prize store, and get early access to our newest games.
          </p>
          <p class="text-gray-500 mb-3 ">Mushroom Party is a play-to-earn (P2E) game studio that creates hyper-casual, arcade-style, games on Solana. Our games provide players with the opportunity to win SOL, blue-chip NFTs, and other cool prizes.
          </p>
        </p>
        </div>
        <a class="text-white" href="s"><button type="button" class=" bg-pink-600 p-3  rounded-md text-white ">Go to Launchpad</button></a>

        </div>
        <div className=" mt-4">
        <img  loading="lazy" className="lg:w-[500px] rounded-xl " alt="" src="https://img-cdn.magiceden.dev/rs:fill:800:800:0:0/plain/https://bafybeifjwmcqpoupj5twbe6nryi5vd3zliyz7n3gdhdp36dhgqzu3aqwkm.ipfs.dweb.link/" />
        </div>
      </div>
      </div>
  )
}

export default Hero