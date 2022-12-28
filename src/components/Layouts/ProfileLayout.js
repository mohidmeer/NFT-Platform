import React, {useContext} from 'react'
import {Outlet, Link} from "react-router-dom";
import Topbar from '../Topbar/Topbar'
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar'
import ProfileSidebar from '../Sidebar/ProfileSidebar';
import {useQuery} from '@apollo/client';
import {CHECK_USER_LOGGED_IN} from '../../graphql/queries/userQueries';
import {AuthContext} from '../../Provider/AuthProvider';
const ProfileLayout = () => {
  const {setUser} = useContext(AuthContext)
  const {data} = useQuery(CHECK_USER_LOGGED_IN, {
    onCompleted: (data) => setUser(data.checkUserLoggedIn)
  })

  return (
    <div>
      <Topbar />
      <Navbar />
      <div className='flex sm:flex lg:flex md:flex '>
        <ProfileSidebar />
        <div className='container mx-auto  h-full app-text'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default ProfileLayout
