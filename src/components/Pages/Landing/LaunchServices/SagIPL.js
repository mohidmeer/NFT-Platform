import React from 'react'
import { Link } from 'react-router-dom'
import Auction from '../../../../Assets/Brands/sage.png'
const SagIPL = () => {
  return (
    <Link cLinksName="" >
    <div class=" shadow-xl  relative rounded-xl bg-dark p-1 border border-dark-2 overflow-hidden">
    <img
        draggable="false"
        loading="lazy"
        class="  rounded-xl"
src={Auction}      />
      
    </div>
  </Link>
  )
}

export default SagIPL