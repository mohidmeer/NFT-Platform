import React from 'react'
import { toast } from 'react-toastify';

const Pintrest = () => {
  const notify = () => toast("Linking Pintrest");
  return (
    <div onClick={notify} className= ' shadow-xl rounded-lg bg-green-300 h-72 shadow-xl flex text-white text-lg font-bold  justify-center   items-center  '>Pintrest </div>
  )
}

export default Pintrest