import React, { useState } from 'react'
import Background from './Background'
import Collection from './Collection'
import Detail from './Detail'
import Hashlist from './Hashlist'
import Intro from './Intro'
import Kyc from './Kyc'
import Launch from './Launch'
import ProgressBar from './ProgressBar'
import Socials from './Socials'

const CreateCollection = () => {

  const [page,setPage]=useState(1);


  const PageDisplay = ()=>{
    if (page===1){
      return <Intro stateChanger={setPage} />;
    } else if ( page===2){
      return <Collection stateChanger={setPage}/>;
    } else if ( page===3){
      return <Detail stateChanger={setPage}/>;
    }else if ( page===4){
      return <Socials stateChanger={setPage}/>;
    }
    else if ( page===5){
      return <Background stateChanger={setPage}/>;
    }
    else if ( page===6){
      return <Launch stateChanger={setPage}/>;
    }
    

  }
  return (
    <div className='mt-8 md:p-10 '>
      <h2 className='font-bold text-3xl'>List Your Collection</h2>
      <ProgressBar stateChanger={setPage} page={page} />
      {PageDisplay()}
    </div>
  )
}

export default CreateCollection