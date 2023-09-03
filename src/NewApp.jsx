import React from 'react'
import Register from './crud/Register'
import "./NewApp.css"
import Login from './crud/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SharedLayout from './router/SharedLayout'
import DashBoard from './backend/DashBoard'
import PrivateRoute from './backend/PrivateRoute'
import BackendNav from './backend/BackendNav'
// import Noticedash from './backend/Noticedash.jsx'
import NoticeNav from './backend/NoticeNav'
import CreateNotice from './backend/CreateNotice'
import DeleteNotice from './backend/DeleteNotice.jsx';
import GetAllNotice from './backend/GetAllNotice'
import CarouselNav from './backend/carousel_backend/CarouselNav'
import GetAllCarousel from './backend/carousel_backend/GetAllCarousel'
import CreateCarousel from './backend/carousel_backend/CreateCarousel'
import DeleteCarosel from './backend/carousel_backend/DeleteCarosel'

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
            
            {/* notice relate routing */}
            <Route path='notice' element={<NoticeNav />}>
              <Route path="all" element={<GetAllNotice />}/>
              <Route path="create" element={<CreateNotice />}/>
              <Route path="delete" element={<DeleteNotice />}/>
              {/* <Route path="" element={<GetAllNotice />}/> */}
            </Route>

            {/* carousel related routing */}
            <Route path='carousel' element={<CarouselNav />}>
              <Route path="all" element={<GetAllCarousel />}/>
              <Route path="create" element={<CreateCarousel />}/>
              <Route path="delete" element={<DeleteCarosel />}/>
              {/* <Route path="" element={<GetAllNotice />}/> */}
            </Route>
          </Route>
        </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default NewApp
