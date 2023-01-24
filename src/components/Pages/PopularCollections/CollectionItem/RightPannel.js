import React from 'react'
import Cart from './Cart'
import RadioFilters from './RadioFilters'

const RightPannel = ({ collection }) => {
  return (
    <div className='w-full'>
      <Cart />
      <div className='mt-8'>
        <RadioFilters characteristics={collection?.characteristics} />
      </div>
    </div>
  )
}

export default RightPannel