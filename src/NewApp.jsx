import React from 'react'
import Register from './crud/Register'
import "./NewApp.css"
import Login from './crud/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SharedLayout from './router/SharedLayout'
import DashBoard from './backend/DashBoard'
import PrivateRoute from './backend/PrivateRoute'
import BackendNav from './backend/BackendNav'
import Noticedash from './backend/Noticedash.jsx'

const NewApp = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/testvite/' element={<BackendNav />}>
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />
        <Route path='user' element={<PrivateRoute />}>
          <Route path="info" element={<h1>info</h1>}/>
          <Route path='dashboard' element={<DashBoard/>} >
            <Route path='notice' element={<Noticedash />}/>
          </Route>
        </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default NewApp
