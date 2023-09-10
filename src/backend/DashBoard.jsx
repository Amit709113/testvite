import React from 'react'
import BackendNav from './BackendNav'
import './Backend-style.css'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
const DashBoard = () => {
  const navigator=useNavigate()
  return (
    <>
      <div id='dashboard'>
      <h1 className='dashboard-heading'>Dashboard </h1>
        <nav>
          <ul className='dash-nav'>
            
            <li > 
              <NavLink to={"/testvite/user/dashboard/notice"}>
                Notice
              </NavLink>
             </li>

             <li > 
              <NavLink to={"/testvite/user/dashboard/carousel"}>
                carousel
              </NavLink>
             </li>

             <li > 
              <NavLink to={"/testvite/user/dashboard/category"}>
                category
              </NavLink>
             </li>
            <li > 
              <NavLink to={"/testvite/user/dashboard/gallery"}>
                gallery
              </NavLink>
            </li>

            <li > 
              <NavLink to={"/testvite/user/dashboard/topper"}>
                topper
              </NavLink>
            </li>

            <li > 
              <NavLink to={"/testvite/user/dashboard/users"}>
                users
              </NavLink>
            </li>
            
            
            
          </ul>
        </nav>

      </div>
      <Outlet />

    </>
  )
}

export default DashBoard
