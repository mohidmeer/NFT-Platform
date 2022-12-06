import React, { useState } from 'react'
import Collection from './Collection'
import Detail from './Detail'
import Hashlist from './Hashlist'
import Intro from './Intro'
import ProgressBar from './ProgressBar'

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
      return <Hashlist stateChanger={setPage}/>;
    }

  }
  return (
    <div className='mt-8 '>
      <ProgressBar stateChanger={setPage} page={page} />


      {PageDisplay()}
     

     
    </div>
  )
}

export default CreateCollection