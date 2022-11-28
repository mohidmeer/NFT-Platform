import React from 'react'
import { toast } from 'react-toastify';

const Facebook = () => {

  const notify = () => toast("Linking Facebook");
  return (
    <div onClick={notify} className= 'shadow-xl rounded-lg bg-green-300 h-72 flex text-white text-lg font-bold  justify-center   items-center  '>Facebook </div>
  )
}

export default Facebook