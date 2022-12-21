import React from 'react'
import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const people = [
    { id: 1, name: 'Option 1', unavailable: false },
    { id: 2, name: 'Option 2', unavailable: false },
    { id: 3, name: 'Option 3', unavailable: false },
    { id: 4, name: 'Option 4', unavailable: false },
    { id: 5, name: 'Option 5', unavailable: false },
    { id: 6, name: 'Option 6', unavailable: false },
  ]







const WhitelistForm = () => {

    const [selectedPerson, setSelectedPerson] = useState(people[0])
    const [open, setOpen] = useState(true)
  return (
    <div className='mt-10 border-2 lg:w-1/2   rounded-xl    p-4 lg:pb-8 border-white '>

        <form>
            <p className='text-xs font-bold mb-2'>Which Collection of yours is this for</p>
        <Listbox as='div'  className={` w-full mb-2  relative p-2 rounded-lg   bg-white`} value={selectedPerson} onChange={setSelectedPerson}>
         
       <Listbox.Button   className={`w-full flex justify-between text-sm`}> {selectedPerson.name}    <ChevronUpIcon className={`${ open ? "rotate-180 transform" : "" } h-5 w-5 `}  /> </Listbox.Button>
       <Listbox.Options className={`text-sm`}>
        {people.map((person) => (
          <Listbox.Option
            key={person.id}
            value={person}
            disabled={person.unavailable}
          >
            {person.name}
          </Listbox.Option>
        ))}
       </Listbox.Options>
    </Listbox>
  <div class="mb-4">
     <label for="twitter" class="block mb-2 text-xs font-bold  text-gray-900 dark:text-white">Twitter Account For Follow </label>
     <input type="text" id="twitter" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
  </div>
  <div class="mb-4">
     <label for="twitter" class="block mb-2 text-xs font-bold  text-gray-900 dark:text-white">Discord Server Name</label>
     <input type="text" id="disname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
  </div>
  <div class="mb-4">
     <label  class="block mb-2 text-xs font-bold  text-gray-900 dark:text-white">Discord Server Id</label>
     <input type="text" id="disname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
  </div>
  <div class="mb-4">
     <label  class="block mb-2 text-xs font-bold  text-gray-900 dark:text-white">Discord Server Url</label>
     <input type="text" id="disname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
  </div>
  <div class="mb-4">
     <label  class="block mb-2 text-xs font-bold  text-gray-900 dark:text-white">Discord Role Name 1</label>
     <input type="text" id="disname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
  </div>
  <div class="mb-4">
     <label  class="block mb-2 text-xs font-bold  text-gray-900 dark:text-white">Discord Role Id</label>
     <input type="text" id="disname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
  </div>
  <div class="mb-4">
     <label  class="block mb-2 text-xs font-bold  text-gray-900 dark:text-white">Minimum Solana To Enter</label>
     <input type="number" value={0} id="solana" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
  </div>
  <div class="mb-4">
     <label  class="block mb-2 text-xs font-bold  text-gray-900 dark:text-white"> NFT Collection Name</label>
     <input type="text" id="disname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
  </div>
  <div class="mb-4">
     <label  class="block mb-2 text-xs font-bold  text-gray-900 dark:text-white"> NFT Collection Symbol</label>
     <input type="text" id="disname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
  </div>
  <div class="mb-4">
     <label  class="block mb-2 text-xs font-bold  text-gray-900 dark:text-white"> Expected Mint Date</label>
     <input type='date' id="disname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
  </div>
  <button className='block bg-pink-600 text-white rounded-lg text-sm font-bold  w-full p-2 '>Save</button>
    



       
            
            



        </form>


        {/* <div class="mb-4">
     <label for="twitter" class="block mb-2 text-xs font-bold  text-gray-900 dark:text-white">Twitter Account to Follow </label>
     <input type="text" id="twitter" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
  </div>
  <div class="mb-4">
     <label for="twitter" class="block mb-2 text-xs font-bold  text-gray-900 dark:text-white">Discord Server to Follow </label>
     <input type="text" id="twitter" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
  </div>
  <div class="mb-4">
     <label for="twitter" class="block mb-2 text-xs font-bold  text-gray-900 dark:text-white">Facebook Page to Follow </label>
     <input type="text" id="twitter" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
  </div>
  <div class="mb-4">
     <label for="twitter" class="block mb-2 text-xs font-bold  text-gray-900 dark:text-white">Instagram Page to Follow </label>
     <input type="text" id="twitter" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
  </div>
  <div class="mb-4">
     <label for="twitter" class="block mb-2 text-xs font-bold  text-gray-900 dark:text-white">Instagram Page to Follow </label>
     <input type="text" id="twitter" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
  </div>
  <div class="mb-4">
     <label for="twitter" class="block mb-2 text-xs font-bold  text-gray-900 dark:text-white">Instagram Page to Follow </label>
     <input type="text" id="twitter" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
  </div> */}


    </div>
  )
}

export default WhitelistForm