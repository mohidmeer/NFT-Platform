import React from 'react'
import { FaDiscord, FaTwitter } from 'react-icons/fa'

const Top = () => {
  return (
    <div className='grid grid-cols-12   '>
        <div className='ml-10 mt-4 md:col-start-4 md:col-span-4 lg:col-span-3  '>
            <img className=' w-52 ' src="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://res.cloudinary.com/coin-nft/image/upload/c_limit,q_auto,w_1200/f_auto/v1/cache/1/20/56/2056928ce1412f15a5193f740e3630c176ec580d8bd47076b4166d091bac36e2-MjJiYjdmM2QtOTJiMC00M2Q3LTkxMzQtOGFiMmM5MjhjYzE3"/>
        </div>
        <div className=' border col-span-full  lg:col-span-4   mt-4 p-4 '>
            <p className=' font-extrabold text-4xl mb-2'>Mutant Ape Yacht Club </p>
            <div className='flex flex-col gap-2'>
            <div className='grid grid-cols-2 gap-2 shadow-2xl'>
                <div className='bg-white flex justify-between p-2 rounded '>
                    <p className='font-bold '>Floor</p>
                    <p className='font-bold text-pink-600'>14.29</p>
                </div>
                <div className='bg-white flex justify-between p-2 rounded '>
                    <p className='font-bold '>LISTED</p>
                    <p className='font-bold text-pink-600'>261</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2 shadow-2xl'>
                <div className='bg-white flex justify-between p-2 rounded '>
                    <p className='font-bold '>TOTAL VOL</p>
                    <p className='font-bold text-pink-600'>14.29</p>
                </div>
                <div className='bg-white flex justify-between p-2 rounded '>
                    <p className='font-bold '>AVG. SALE(24)</p>
                    <p className='font-bold text-pink-600'>----</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2 shadow-2xl '>
                <div className='bg-white flex justify-between p-2 rounded '>
                    <p className='font-bold '>OWNERS</p>
                    <p className='font-bold text-pink-600'>12,6N</p>
                </div>
                <div className='bg-white flex justify-between p-2 rounded '>
                    <p className='font-bold '>TOTAL SUPPLY</p>
                    <p className='font-bold text-pink-600'>19,4N</p>
                </div>
            </div>
            
            

            </div>
        </div>

        <div className='col-span-full lg:col-span-4 ml-5 mt-20 p-4'>
            <div className='flex gap-3'>
            <a className='border-dark-2 border p-2 rounded'><FaDiscord/></a>
            <a className='border-dark-2 border p-2 rounded'><FaTwitter/></a>
            

            </div>
            <p className='font-bold'>The MUTANT APE YACHT CLUB is a collection of up to 20,000 Mutant Apes that can only be created by exposing an existing Bored Ape to a vial of MUTANT SERUM or by minting a Mutant Ape in the public sale.</p>
        </div>
        



    </div>
  )
}

export default Top