import { RadioGroup } from '@headlessui/react'
import { React,  useState } from 'react'
import { Link } from 'react-router-dom'
import TableItem from './TableItem'

const UpcomingDrops = () => {

  const [currency, setCurrency] = useState('solana')
  return (
    <div className="mt-7 p-4 ">
        <h2 className='text-5xl font-bold text-center'>Upcoming Drops</h2>
        <p className='text-center mt-4  font-semibold text-gray-500'>Mark your calendars. Get ready to mint the latest NFT projects<br/>
         Minting across <span><Link to='/launchpad' className='text-pink-600'>Launchpad</Link></span> on a Blockchain near you!</p>
   
         <div className='flex'>
            <RadioGroup
 as="div"
 className={
   "flex justify-start gap-2 p-1 border border-dark  justify-items-center mt-1 rounded-full  ml-auto  "
 }
 value={currency}
 onChange={setCurrency}
>
 <RadioGroup.Option value="solana">
   {({ checked }) => (
     <span
       className={`text-sm px-4 py-1 rounded-full ${
         checked ? "bg-pink-600" : ""
       }`}
     >
       Solana
     </span>
   )}
 </RadioGroup.Option>
 <RadioGroup.Option value="ethereium">
   {({ checked }) => (
     <span
       className={`text-sm px-4 py-1 rounded-full  ${
         checked ? "bg-pink-600" : ""
       }`}
     >
       Ethereium
     </span>
   )}
 </RadioGroup.Option>
 <RadioGroup.Option value="all">
   {({ checked }) => (
     <span
       className={`text-sm px-4 py-1 rounded-full  ${
         checked ? "bg-pink-600" : ""
       }`}
     >
       Show all
     </span>
   )}
 </RadioGroup.Option>
            </RadioGroup>

         </div>

         <div class="overflow-x-auto relative shadow-md sm:rounded-lg mt-4 border border-dark ">
    <table class="w-full text-sm text-left  ">
        <thead class="text-xs  uppercase bg-dark ">
            <tr>
                <th scope="col" class="py-3 px-6">
                    #Upvotes
                </th>
                <th scope="col" class="py-3 px-6">
                    Project Name
                </th>
                <th scope="col" class="py-3 px-6">
                   Community
                </th>
                <th scope="col" class="py-3 px-6">
                  When 
                </th>
                <th scope="col" class="py-3 px-6">
                    Blockchain
                </th>
                <th scope="col" class="py-3 px-6">
                    Mint Link
                </th>
                <th scope="col" class="py-3 px-6">
                    Description
                </th>
               
            </tr>
        </thead>
        <tbody>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            
            
            
            
            
           
        </tbody>
    </table>
</div>

   
   
    </div>


   
         
  


  

    
  )
}

export default UpcomingDrops