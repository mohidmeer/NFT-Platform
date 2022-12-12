import React from 'react'
import { useState } from 'react';
const ConnectWallet = (  {stateChanger}  ) => {
  return (
    <div className='h-[80vh] flex'>
        <div className='m-auto'>
        <p className='font-bold '>Connect your wallet to view your watchlist</p>
        <div className='flex justify-center'>
        <button onClick={()=>stateChanger('logged')} className='p-3 mt-3 rounded-lg bg-pink-600 font-bold text-white'>
            Connect Wallet
        </button>
        </div>
        </div>

    </div>
  )
}

export default ConnectWallet