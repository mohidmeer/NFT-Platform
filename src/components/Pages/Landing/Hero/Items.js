import React from 'react'
import Core from '../../../../Assets/NFTs/Core.jfif'
const Items = () => {
  return (
    <div className='item'>
     <div className="grid lg:grid-cols-3  md:grid-cols-2  gap-10">
              <div class=" order-last lg:order-first md:order-last mt-4 lg:pl-8  flex flex-col justify-center justify-items-center">
                <div className=' '>
                  <h2 class="text-4xl  lg:text-5xl font-extrabold ">
                    No Commision Trading 
                  </h2>
                  <p class="mt-3 text-lg text-gray-600">
                    Choose from our free plan to premium plan depending on how much you trade.No hidden Fees
                  </p>
                  <a  className=' flex justify-center'>
                    <button
                      type="button"
                      className=" mt-10 py-4 w-1/2  rounded-md font-bold text-white px-4 py-2 bg-pink-600"
                    > 
                      Plans
                    </button>
                  </a>
              </div>
             </div>
            <div className=" col-span-2  ">
              <img className='rounded-2xl ' src={Core}/>
            </div>
     </div>

    </div>
  )
}

export default Items