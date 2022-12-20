import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Topbar from '../Topbar/Topbar'
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar'
const CollectionDetail = () => {
  return (
    <div>
      <Topbar/>
      <Navbar/>
        <div className='lg:flex md:flex '>
          <Sidebar/>
          <div className=' lg:max-w-[1936px] w-full   mx-auto h-full app-text'>
              <Outlet/>
            </div>
        </div>
     </div>
  )
}

export default CollectionDetail