import React from 'react'
import Cart from './Cart'
import RadioFilters from './RadioFilters'



const RightPannel = () => {

    const Filters =  [
        {name : 'Eyes' , description : 'Disappointed',rarety:'2% have this trait' }, 
        {name : 'Face' , description : 'Angry',rarety:'20% have this trait' }, 
        {name : 'Mouth' , description : 'Savage',rarety:'12% have this trait' }, 
        {name : 'Background' , description : 'Blue',rarety:'2% have this trait' }, 
        {name : 'Foreground' , description : 'Green',rarety:'2% have this trait' }, 
        {name : 'Mout' , description : 'Savage',rarety:'12% have this trait' }, 
        {name : 'Backgroun' , description : 'Blue',rarety:'2% have this trait' }, 
        {name : 'Foregroun' , description : 'Green',rarety:'2% have this trait' }, 
      ];
  return (
    <div className='w-full'>
        <Cart/>
        <div className='mt-8'>
            <RadioFilters prop={Filters} />

        </div>


    </div>
  )
}

export default RightPannel