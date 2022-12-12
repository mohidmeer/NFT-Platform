import React from 'react'
import { useState } from 'react';
import ConnectWallet from './ConnectWallet'
import Watchlist from './Watchlist/Watchlist';




const Index = () => {
 const [page,setPage]=useState('login');
  return (
    <div className='p-4'>

        { page=='login' ? <ConnectWallet stateChanger={setPage}  />:
        (
         <Watchlist/>
            
        )


        }
        
        
    </div>
  )
}

export default Index