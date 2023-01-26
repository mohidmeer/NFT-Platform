import { Tab } from '@headlessui/react'
import React, { useState } from 'react'

const Buy = () => {
    const [range, setRange] = useState(2);
    const changeRange = (event) => {
        setRange(event.target.value);
      };
  return (
    <div className=' bg-white p-2 rounded'>
        <Tab.Group> 
      <Tab.List className={`flex justify-between`}>
        <Tab className={` font-bold border-pink-600 ui-selected:text-pink-600 ui-not-selected:text-black   ui-selected:border-b-2 ui-not-selected:border-[0]    `}>Cart</Tab>
        <Tab className={` font-bold border-pink-600 ui-selected:text-pink-600 ui-not-selected:text-black   ui-selected:border-b-2 ui-not-selected:border-[0]    `}>Collection Offer</Tab>
        <Tab className={` font-bold border-pink-600  ui-selected:text-pink-600 ui-not-selected:text-black  ui-selected:border-b-2 ui-not-selected:border-[0]    `}>Sweep</Tab>
      </Tab.List>
      <Tab.Panels className={`mt-4`}>
        <Tab.Panel className={`bg-white p-2 rounded`}  >
            <p className='text-center text-gray-700 font-bold text-lg border-b border-white pb-2'>(Cart Is Empty)</p>

            <div>
                <div className='flex justify-between mb-2'>
                    <p className='font-bold text-xs'>Items Price(0)</p>
                    <p className='font-bold text-xs'>0</p>
                </div>
                <div className='flex justify-between mb-2'>
                    <p className='font-bold text-xs'>Royalty(0)</p>
                    <p className='font-bold text-xs'>0</p>
                </div>
                <div className='flex justify-between mb-2'>
                    <p className='font-bold text-lg'>Total Price</p>
                    <p className='font-bold text-lg'>0</p>
                </div>
                <button className='font-bold text-white w-full bg-pink-600 py-2 rounded'>
                    Buy Now
                </button>

            </div>
        </Tab.Panel>
        <Tab.Panel className={`bg-white p-2 rounded`}>

            <div className='flex justify-between mb-3'>
                <p className='font-bold text-xs '>Price</p>
                <p className='font-bold text-xs text-pink-600 '>Floor Price 351.00</p>
            </div>
            <div className='mb-3'>
           <input type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
         </div> 
            <div className='flex justify-between mb-3'>
                <p className='font-bold text-xs '>Item Price</p>
                <p className='font-bold text-xs text-pink-600 '> 351.00</p>
            </div>
            <div className='flex justify-between mb-3'>
                <p className='font-bold text-xs '>Royalty</p>
                <p className='font-bold text-xs text-pink-600 '> 351.00</p>
            </div>
            <div className='flex justify-between mb-3'>
                <p className='font-bold text-lg '>Total</p>
                <p className='font-bold text-lg text-pink-600 '> 351.00</p>
            </div>
            <div>
                <button className='font-bold text-white w-full bg-pink-600 py-2 rounded'>
                    Place Collection Offer

                </button>
            </div>



        </Tab.Panel>
        <Tab.Panel className={`bg-white p-2 rounded`}>

        <div>
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Max Price Per Item (optional)</label>
         <input type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
       </div>
        
       <label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number Of Items</label>
        <input id="default-range" type="range" onChange={changeRange} min={1}
        max={100}  step={1} class="accent-pink-600 w-full h-2 bg-gray-200 rounded-lg appearance-none text-green-400  cursor-pointer dark:bg-gray-700"/>
    
       <div>
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Max Price Per Item (optional)</label>
         <input type="number" value={range}  id="small-input" class="range block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
       </div>
       <div className='flex justify-between mb-3 mt-3'>
                <p className='font-bold text-xs '>Item Price</p>
                <p className='font-bold text-xs text-pink-600 '> 351.00</p>
            </div>
            <div className='flex justify-between mb-3'>
                <p className='font-bold text-xs '>Royalty</p>
                <p className='font-bold text-xs text-pink-600 '> 351.00</p>
            </div>
            <div className='flex justify-between mb-3'>
                <p className='font-bold text-lg '>Total</p>
                <p className='font-bold text-lg text-pink-600 '> 351.00</p>
            </div>
            <div>
                <button className='font-bold text-white w-full bg-pink-600 py-2 rounded'>
                    Sweep

                </button>
        </div>

        


        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>



    </div>
  )
}

export default Buy