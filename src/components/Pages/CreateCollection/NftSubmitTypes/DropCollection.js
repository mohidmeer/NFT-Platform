import React, { useState } from 'react'

const DropCollection = () => {
    const [exptime,setExptime]=useState('')
    const [transaction,setTransaction]=useState(false)
    const handleChange = (event) => {   
        setExptime(event.target.value);
      };
    const handletransaction=()=>{
        
        setTransaction(!transaction);
        console.log(transaction)
    }
    
  return (
    <div className='lg:w-1/3 lg:ml-auto'>
        <h3 className="font-semibold text-3xl text-center mb-4">Drop Collection</h3>
        <div className="p-3">
              <div class="mb-4">
                 <label  class="block mb-2 font-bold  text-gray-900 ">Date of Listing Expiration</label>
                 <input onChange={handleChange} type='datetime-local' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l block w-full p-2.5 focus:border-pink-600 focus:outline-none "  required />
                 <p className="text-xs font-bold">Expiration Time:&nbsp; {exptime} </p>
              </div>
              <div class="mb-4">
                 <label  class="block mb-2 font-bold  text-gray-900 ">How much do you want to charge to claim NFTs?</label>
                 <input  type='number' defaultValue={1} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l block w-full p-2.5 focus:border-pink-600 focus:outline-none "  required />
              </div>
              <label for="countries" class="block mb-2 font-bold  text-gray-900">Who can claim NFTs during this phase?</label>
                    <select id="countries" className="mb-4  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 outline-none">
                        <option  selected>Any wallet</option>
                        <option value="US">Matic</option>
                        <option value="CA">Poly</option>
                        <option value="FR">BNB</option>
                        <option value="DE">Metamask</option>
                    </select>
              <div class="mb-4">
                 <label  class="block mb-2 font-bold  text-gray-900 ">How many NFTs can be claimed per transaction?</label>
                 <input  type='number' defaultValue={1} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l block w-full p-2.5 focus:border-pink-600 focus:outline-none "  required />
              </div>
              <div class="mb-4">
                 <label  class="block mb-2 font-bold  text-gray-900 ">How many NFTs will you drop in this phase?</label>
                 <input  type='number' defaultValue={1} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l block w-full p-2.5 focus:border-pink-600 focus:outline-none "  required />
              </div>
              <label for="countries" class="block mb-2 font-bold  text-gray-900">What currency you want to use?</label>
                    <select id="countries" className="mb-4  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 outline-none">
                        <option  selected>Any wallet</option>
                        <option value="US">Matic</option>
                        <option value="CA">Poly</option>
                        <option value="FR">BNB</option>
                        <option value="DE">Metamask</option>
                    </select>
              <div class="mb-4">
                 <label  class="block mb-2 font-bold  text-gray-900 ">How many seconds do wallets have to wait in between claiming ?</label>
                 <input disabled={transaction} placeholder={transaction?'Unlimited':'e.g 1000'}  type='number' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l block w-full p-2.5 focus:border-pink-600 focus:outline-none "  required />
              </div>
              <div class="flex items-center mb-4">
                <input onChange={handletransaction} checked={transaction} type="checkbox"  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Select this to only allow one claim transaction per wallet</label>
            </div>


        </div>

    </div>
  )
}

export default DropCollection