import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Topbar from '../Topbar/Topbar'
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar'
import ProfileSidebar from '../Sidebar/ProfileSidebar';
const ProfileLayout = () => {
  return (
    <div>
            <Topbar/>
            <Navbar/>
            <div className='flex sm:flex lg:flex md:flex '>
            <ProfileSidebar/>
            <div className='container mx-auto  h-full app-text'>
                <Outlet/>
            </div>
     </div>
     </div>
  )
}

export default ProfileLayout