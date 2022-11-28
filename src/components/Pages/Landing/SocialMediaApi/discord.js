import React from 'react'
import { toast } from 'react-toastify';

const Discord = () => {
  const notify = () => toast("Linking Discord");
  return (
    <div onClick={notify} className= ' shadow-xl rounded-lg bg-green-300 h-72 flex text-white text-lg font-bold  justify-center   items-center  '>Discord </div>
  )
}

export default Discord