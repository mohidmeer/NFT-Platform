import React from 'react'

const Card = () => {
  return (
    <div className='bg-dark transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-lg border border-dark'>
    <div className='flex justify-center'>
    <img className='rounded-xl'  width={400} src="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafybeifjwmcqpoupj5twbe6nryi5vd3zliyz7n3gdhdp36dhgqzu3aqwkm.ipfs.dweb.link/"/>
    </div>
    <p className='text-xl font-bold text-center'>Mushroom Party Soliders</p>
    <p className=' text-center text-pink-600'>LIVE</p>
    <div className='flex justify-center gap-2 mb-2'>
    <a className='text-sm border  border-dark rounded px-4 py-1'>ITEMS <span className='ml-1 font-bold'>2000 </span>  </a>
    <a className='text-sm border  border-dark rounded px-4 py-1'>PRICE <span className='ml-1 font-bold'>0.002 ETH </span>  </a>
    </div>
  </div>

  )
}

export default Card