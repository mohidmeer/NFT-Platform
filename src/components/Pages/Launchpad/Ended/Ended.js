import React from 'react'
import Card from './Card'
import LoaderCard from './LoaderCard'

const Ended = () => {
  return (
    <div>
    <h2 className='text-3xl font-bold mb-8 '>Ended</h2>
<div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2  gap-8 '>
   
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <LoaderCard/>
   <LoaderCard/>
   <LoaderCard/>


   
  
</div>
</div>
  )
}

export default Ended