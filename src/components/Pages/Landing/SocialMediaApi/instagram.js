import React from 'react'
import { toast } from 'react-toastify';

const Instagram = () => {
  const notify = () => toast("Linking Instagram");
  return (
    <div onClick={notify} className= 'shadow-xl rounded-lg bg-green-300 h-72 flex text-white text-lg font-bold  justify-center   items-center  '>Instagram </div>
  )
}

export default Instagram