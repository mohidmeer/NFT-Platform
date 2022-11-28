import React from 'react'
import Items from "./Items";
const Community = () => {
  return (
    <div>

      <div className="text-center">
        <h3 className="text-4xl font-bold ">Create And Join Communities</h3>
        <p className="text-gray-600 font-bold">Shared Vision | Shared Passion | Shared Purpose</p>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 gap-2 mt-4 ">
        <Items Status={true}/>
        <Items/>
        <Items/>
        <Items/>
        <Items Status={true}/>
        <Items/>
        <Items Status={true}/>
        <Items/>
        <Items Status={true}/>
        <Items/>
        <Items Status={true}/>
        <Items/>
        <Items/>
        <Items Status={true}/>
        <Items Status={true}/>



      </div>



    </div>
  )
}

export default Community