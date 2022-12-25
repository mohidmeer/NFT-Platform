import React, {useContext} from 'react'
import {Outlet, Link} from "react-router-dom";
import Topbar from '../Topbar/Topbar'
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar'
import {CHECK_USER_LOGGED_IN} from '../../graphql/queries/userQueries';
import {useQuery} from '@apollo/client';
import {AuthContext} from '../../Provider/AuthProvider';

const AppLayout = () => {
  const {setUser} = useContext(AuthContext)
  const {data} = useQuery(CHECK_USER_LOGGED_IN, {
    onCompleted: (data) => setUser(data.checkUserLoggedIn)
  })

  return (
    <div>
      <Topbar />
      <Navbar />
      <div className='flex sm:flex lg:flex md:flex '>
        <Sidebar />
        <div className='container mx-auto  h-full app-text'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AppLayout
