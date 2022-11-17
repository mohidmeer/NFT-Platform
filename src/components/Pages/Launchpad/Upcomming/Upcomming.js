import React from 'react'
import Card from './Card'
import LoaderCard from './LoaderCard'

const Upcomming = () => {
  return (
<div>
    <h2 className='text-3xl font-bold mb-8'>Upcoming</h2>
<div className=' grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2  gap-8 '>

  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <LoaderCard/>
  <LoaderCard/>
  <LoaderCard/>
  <LoaderCard/>
   
</div>
</div>
  )
}

export default Upcomming