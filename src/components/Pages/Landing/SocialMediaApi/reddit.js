import React from 'react'
import { toast } from 'react-toastify';

const Reddit = () => {
  const notify = () => toast("Linking Reddit");
  return (
    <div onClick={notify} className= ' shadow-xl rounded-lg bg-green-300 h-72 flex text-white text-lg font-bold  justify-center   items-center  '>Reddit </div>
  )
}

export default Reddit