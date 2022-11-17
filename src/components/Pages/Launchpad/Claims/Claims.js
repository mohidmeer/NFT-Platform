import React from 'react'
import Card from './Card'
import LoaderCard from './LoaderCard'


const Claims = () => {
  return (
    <div className=' grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2  gap-8 '>

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
      <LoaderCard/>
      

    </div>
  )
}

export default Claims