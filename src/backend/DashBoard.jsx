import React from 'react'
import BackendNav from './BackendNav'
import './Backend-style.css'
import { Outlet, useNavigate } from 'react-router-dom'
const DashBoard = () => {
  const navigator=useNavigate()
  return (
    <>
      <div id='dashboard'>
      <h1>Dashboard </h1>
        <nav>
          <ul className='dash-nav'>
            <li onClick={()=>{
              navigator("/testvite/user/dashboard/notice")

            }}> Notice </li>
            
            <li> Event </li>
            <li> Gallery </li>
            <li onClick={()=>{
              navigator("/testvite/user/dashboard/topper")
            }}> topper </li>

            <li onClick={()=>{
              navigator("/testvite/user/dashboard/carousel")
            }}> carousel </li>

            <li>User</li>
          </ul>
        </nav>

      </div>
      <Outlet />

    </>
  )
}

export default DashBoard
