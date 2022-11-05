import React from 'react'
const HImg= "https://img-cdn.magiceden.dev/rs:fill:700:700:0:0/plain/https%3A%2F%2Fbafybeibj4blindiarhmpioo3wm7aiivcfsonkgojzj7sgtwq4ixlbzjrxy.ipfs.dweb.link%2Fgeneralmarkus_small.png%3Fext%3Dpng"

const Hero = () => {
  return (
    <div class="  flex justify-center border-dark border rounded-2xl flex-col lg:flex-row  md:flex-col p-6 gap-5">
      <div className="w-full  lg:pt-44  ">
        <h1 className="text-5xl font-bold mb-3">General Markus</h1>
        <p className="text-sm  text-gray-400 ">
          CREATED BY <span className="ml-1 text-pink-600">Owner Name</span>
        </p>
        <p className="lg:w-3/4 md:w-4/5 mt-3 text-gray-300">
       
          Dinodawgs presents: Limited Editions - a special series of 1:1 OG
          Dinodawg characters exclusively for auction. Acquire your piece of the
          Dinodawg lore!
        </p>
        <div class="p-4 mt-2 lg:w-3/4 md:w-3/4 bg-dark-2 rounded-md flex justify-between gap-5 flex-col md:flex-row">
          <div class="flex flex-col">
            <span class="text-gray-500 fs-14px">CURRENT BID</span>
            <span class="text-white  font-extrabold text-3xl">1.50 SOL</span>
            <span class="text-gray-500 fs-12px">~$46.66</span>
          </div>
          <div class="flex flex-col">
            <span class="text-gray-500 fs-14px">AUCTION ENDS IN</span>
            <div class="flex flex-row basis-0 gap-4">
              <div class="flex flex-col">
                <span class="text-white font-extrabold text-3xl">02</span>
                <span class="text-gray-500 fs-12px">Days</span>
              </div>
              <div class="flex flex-col">
                <span class="text-white font-extrabold text-3xl">01</span>
                <span class="text-gray-500 fs-12px">Hours</span>
              </div>
              <div class="flex flex-col">
                <span class="text-white font-extrabold text-3xl">37</span>
                <span class="text-gray-500 fs-12px">Minutes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <img
          draggable="false"
          class="rounded-3xl lg:w-full  md:w-3/4 "
          src={HImg}
        />
      </div>
    </div>
  );
}

export default Hero