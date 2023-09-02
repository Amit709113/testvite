import React from 'react'
import BackendNav from './BackendNav'
import './Backend-style.css'
import { Outlet } from 'react-router-dom'
const DashBoard = () => {
  return (
    <>
      <div id='dashboard'>
      <h1>Dashboard </h1>
        <nav>
          <ul className='dash-nav'>
            <li> Notice </li>
            <li> Event </li>
            <li> Gallery </li>
            <li>Topper</li>
            <li>Carousel</li>
            <li>Category</li>
            <li>User</li>
          </ul>
        </nav>

      </div>
      <Outlet />

    </>
  )
}

export default DashBoard
