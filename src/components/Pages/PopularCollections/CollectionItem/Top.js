import React from 'react'
import { FaDiscord, FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaReddit, FaTwitter, FaYoutube } from 'react-icons/fa'

const Top = ({ collection }) => {
    return (
        <div className=' md:full lg:w-3/6 p-4 '>
            <div className='flex'>
                <div className=' mt-4   '>
                    <img className=' w-72 rounded ' src={collection?.collectionImage} />
                </div>
                <div className=' border    mt-4 p-4 '>
                    <p className=' font-bold text-4xl mb-2'>External Link </p>
                    <div class="mb-4 w-full">
                        <label class="block mb-2 text-xs font-bold  text-gray-900 dark:text-white">Providing an External Link allows buyers to find out more about you</label>
                        {/* <input type='text' id="disname" placeholder='External Link' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required /> */}
                        <a href={collection?.websiteUrl} className="text-pink-600" target={"_blank"}>{collection?.websiteUrl}</a>
                    </div>
                    <div className='grid grid-cols-4  gap-2 '>
                        <button className='bg-white rounded-md p-2 flex justify-center'><FaFacebook /></button>
                        <button className='bg-white rounded-md p-2 flex justify-center'><FaTwitter /></button>
                        <button className='bg-white rounded-md p-2 flex justify-center'><FaInstagram /></button>
                        <button className='bg-white rounded-md p-2 flex justify-center'><FaReddit /></button>
                        <button className='bg-white rounded-md p-2 flex justify-center'><FaDiscord /></button>
                        <button className='bg-white rounded-md p-2 flex justify-center'><FaYoutube /></button>
                        <button className='bg-white rounded-md p-2 flex justify-center'><FaLinkedin /></button>
                        <button className='bg-white rounded-md p-2 flex justify-center'><FaPinterest /></button>
                    </div>
                </div>


            </div>
            <div className=''>
                <div class="mb-4 mt-4">
                    <label class="block mb-2 font-bold  text-gray-900 dark:text-white">White Paper</label>
                    <a href={collection?.whitepaper} className="text-pink-600" target={"_blank"}>{collection?.whitepaper}</a>
                    {/* <input type='text' id="disname" placeholder='External Link' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required /> */}
                </div>
                <div class="mb-4">
                    <label class="block mb-2 font-bold  text-gray-900 dark:text-white">Road Map</label>
                    {/* <input type='text' id="disname" placeholder='External Link' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required /> */}
                    <a href={collection?.roadmap} className="text-pink-600" target={"_blank"}>{collection?.roadmap}</a>

                </div>

            </div>
            <div>
                <h2 className='text-3xl font-bold'>Description</h2>
                <p className='leading-7'>
                    {collection?.shortDescription}
                </p>
            </div>
            <div class="mt-5">
                <h2 class="text-white-2 text-[16px] font-semibold" level="2"><strong>Founding Team</strong></h2>
                {
                    collection?.team.map((d, i) => (
                        <>
                            <h1 class="text-white-2 text-[14px] font-semibold mt-3" level="1">{d.name} - {d.position}</h1>
                            <div class="my-1">
                                <p class="text-light-gray-500 text-md text-[14px]"><a class="text-pink-600 font-bold block text-md text-[14px]" href="https://www.linkedin.com/in/wagnermt/" target="_blank" rel="noreferrer">Linkedin</a>
                                    <a class="text-pink-600 font-bold block text-md text-[14px]" href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
                                    A serial entrepreneur and founder with a formal background in capital markets analysis, economics, and valuation methods. He has founded multiple companies centered around the emerging blockchain and cryptocurrency industry, the most recent of which is Star Atlas. Collectively, he possesses 10+ years in capital markets analysis, holds his Chartered Financial Analyst designation, 7+ years in blockchain, 24+ years in gaming, and 5+ years in executive leadership.
                                </p>
                                <br />
                            </div>
                        </>
                    ))
                }

            </div>


        </div>




    )
}

export default Top