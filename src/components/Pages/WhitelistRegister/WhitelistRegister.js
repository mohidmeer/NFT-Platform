import { RadioGroup } from '@headlessui/react'
import { React,  useState } from 'react'
import { Link } from 'react-router-dom'
import TableItem from './TableItem'

const WhitelistRegister = () => {

    const [plan, setPlan] = useState('ether')
  return (
    <div className="mt-7 p-4 ">
        <h2 className='text-5xl font-bold '>Whitelist Register</h2>
       
         <div className='flex mt-4'>
         <RadioGroup as='div' className={'flex justify-between p-1 border border-dark  justify-items-center mt-1 rounded-full  '}  value={plan} onChange={setPlan}> 
      
      <RadioGroup.Option value="ether">
      {({ checked }) => (
        <span className={`text-sm px-4 py-1 font-bold  rounded-full ${checked ? 'bg-pink-600 text-white' : 'text-black'}`}>Ether</span>
      )}
    </RadioGroup.Option>
    <RadioGroup.Option value="binance">
      {({ checked }) => (
        <span className={`text-sm px-4 py-1 font-bold rounded-full   ${checked ? 'bg-pink-600 text-white':'text-black'}`}>Binance</span>
      )}
    </RadioGroup.Option>
    <RadioGroup.Option value="polygon">
      {({ checked }) => (
        <span className={`text-sm px-4 py-1 font-bold rounded-full   ${checked ? 'bg-pink-600 text-white':'text-black'}`}>Polygon</span>
      )}
    </RadioGroup.Option>
    <RadioGroup.Option value="all">
      {({ checked }) => (
        <span className={`text-sm px-4 py-1 rounded-full font-bold  ${checked ? 'bg-pink-600 text-white' : 'text-black'}`}>Show all</span>
      )}
    </RadioGroup.Option>
      </RadioGroup>

         
         </div>

         <div class="overflow-x-auto relative shadow-md sm:rounded-lg mt-4 border border-dark ">
    <table class="w-full text-sm text-left  ">
        <thead class="text-xs  uppercase bg-dark ">
            <tr>
                
                <th scope="col" class="py-3 px-6">
                    Project Name
                </th>
                <th scope="col" class="py-3 px-6">
                    Social Links
                </th>
                <th scope="col" class="py-3 px-6">
                   Mint Date
                </th>
                <th scope="col" class="py-3 px-6">
                  Blockchain
                </th>
                <th scope="col" class="py-3 px-6">
                    No of Spots
                </th>
                <th scope="col" class="py-3 px-6">
                    Action
                </th>
               
            </tr>
        </thead>
        <tbody>
            <TableItem/>
            <TableItem/>
            
            
            
            
            
            
           
        </tbody>
    </table>
</div>

   
   
    </div>


   
         
  


  

    
  )
}

export default WhitelistRegister