import React from 'react'

const Items = () => {
  return (
    <div className='item'>
     <div className="grid lg:grid-cols-3  md:grid-cols-2  gap-10">
              <div class=" order-last lg:order-first md:order-last mt-4 lg:pl-8  flex flex-col justify-center justify-items-center">
                <div className=' '>
                  <h2 class="text-4xl  lg:text-5xl font-extrabold ">
                    Magic Hackathon
                  </h2>
                  <p class="mt-3 text-gray-500">
                    Join our Hackathon with a total prize pool of $250K to
                    experiment with ideas that will allow creators to earn
                    royalties or identify alternative monetization models.
                  </p>
                  <a  className=''>
                    <button
                      type="button"
                      className=" mt-10  rounded-md text-white px-4 py-2 bg-pink-600"
                    >
                      Join Hackathon
                    </button>
                  </a>
              </div>
             </div>
            <div className=" col-span-2  ">
              <img className='rounded-2xl ' src="https://bafybeicfiqoobfmip34dv3o553cmyl6yl5ifsp5377ie36y57nte7bpd74.ipfs.nftstorage.link/"/>
            </div>
     </div>

    </div>
  )
}

export default Items