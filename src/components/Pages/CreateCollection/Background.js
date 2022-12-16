import React, { useState } from 'react'
import { GiCancel } from 'react-icons/gi';

const Background = ({stateChanger}) => {

  const [val,setVal]=useState([1,2]);
  const handleAdd =()=>{
    const abc =[...val,[]]
    setVal(abc)
  }

  const handleChange=(OnChangeValue,i)=>{const inputdata=[...val];
    inputdata[i]=OnChangeValue.target.value ;}
   
  const handleDelete=(i)=>{
    const deleteVal=[...val]
    deleteVal.splice(i,1)
    setVal(deleteVal)
  }
  return (
    <div className='p-6'>
       <p className='font-bold text-sm text-gray-700'>Step 5 of 6</p>

       <div className='  '>
       <div className="text-center ">
          <h2 className="font-bold text-2xl">Add Team</h2>
          {val.map((data,i)=>{

            return(

              <div className="flex  justify-center mt-4">
            <div>
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input 
                type="text"
                
                class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Character"
                required
              />
            </div>
            <div>
              <label
                for="last_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Position
              </label>
              <input 
                type="text"
                
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Male"
                required
              />
            </div>
            <button onClick={()=>handleDelete(i)} className="mt-5 text-3xl text-red-600">
              <GiCancel />
            </button>

          </div>
            )



           }) }
          <div className=''>
          <button
            onClick={() => handleAdd()}
            className="mt-4 bg-pink-600 px-4  font-bold py-2 rounded focus:ring-4  text-white "
          >
            Add More
          </button>
          </div>
        </div>

       </div>
       <div class="mb-4 mt-4">
            <label  class="block mb-2 font-bold  text-gray-900 dark:text-white">White Paper</label>
            <input type='text' id="disname" placeholder='External Link' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
      </div>
      <div class="mb-4">
            <label  class="block mb-2 font-bold  text-gray-900 dark:text-white">Road Map</label>
            <input type='text' id="disname" placeholder='External Link' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
      </div>

       <div className='flex justify-center'>
        <button onClick={() => stateChanger(6)} className=' mt-2 p-3  w-52 flex justify-center rounded-lg text-white font-bold text-sm bg-pink-600'>
              Save and Proceed 
        </button>

        </div>




    </div>
  )
}

export default Background