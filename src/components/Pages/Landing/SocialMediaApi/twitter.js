import React from 'react'
import { toast } from 'react-toastify';

const Twitter = () => {
  const notify = () => toast("Linking Twitter");
  return (
    <div onClick={notify} className= 'shadow-xl rounded-lg bg-green-300 h-72 flex text-white text-lg font-bold  justify-center   items-center  '>Twitter</div>
  )
}

export default Twitter