import React from 'react'
import { toast } from 'react-toastify';

const Telegram = () => {
  const notify = () => toast("Linking Telegram");
  return (
    <div onClick={notify} className= ' shadow-xl rounded-lg bg-green-300 h-72 flex text-white text-lg font-bold  justify-center   items-center  '>Telegram </div>
  )
}

export default Telegram