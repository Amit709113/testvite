import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./NewApp.css"

import Register from './crud/Register'
import Login from './crud/Login'

import DashBoard from './backend/DashBoard'
import PrivateRoute from './backend/PrivateRoute'
import BackendNav from './backend/BackendNav'
import NoticeNav from './backend/notice_backend/NoticeNav'
import CreateNotice from './backend/notice_backend/CreateNotice'
import DeleteNotice from './backend/notice_backend/DeleteNotice.jsx';
import GetAllNotice from './backend/notice_backend/GetAllNotice'
import CarouselNav from './backend/carousel_backend/CarouselNav'
import GetAllCarousel from './backend/carousel_backend/GetAllCarousel'
import CreateCarousel from './backend/carousel_backend/CreateCarousel'
import DeleteCarousel from './backend/carousel_backend/DeleteCarousel'

import DeleteTopper from './backend/topper_backend/DeleteTopper'
import GetAllTopper from './backend/topper_backend/GetAllTopper'
import ElementNav from './backend//ElementNav'
import CreateTopper from './backend/topper_backend/CreateTopper'

import GetAllImageByCategory from './backend/gallery_backend/GetAllImageByCategory'
import DeleteCategory from './backend/category_backend/DeleteCategory'
import CreateCategory from './backend/category_backend/CreateCategory'
import GetAllCategory from './backend/category_backend/GetAllCategory'
import GetAllImage from './backend/gallery_backend/GetAllImage'
import UploadImage from './backend/gallery_backend/UploadImage'
import DeleteImage from './backend/gallery_backend/DeleteImage'

import GetAllUser from './backend/user_backend/GetAllUser'
import CreateUser from './backend/user_backend/CreateUser'
import DeleteUser from './backend/user_backend/DeleteUser'

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
            <Route path='notice' element={<ElementNav element='notice' />}>
              <Route path="all" element={<GetAllNotice />}/>
              <Route path="create" element={<CreateNotice />}/>
              <Route path="delete" element={<DeleteNotice />}/>
            </Route>

            {/* carousel related routing */}
            <Route path='carousel' element={<ElementNav element="carousel"/>}>
              <Route path="all" element={<GetAllCarousel />}/>
              <Route path="create" element={<CreateCarousel />}/>
              <Route path="delete" element={<DeleteCarousel />}/>
            </Route>

            {/* topper related routing */}
            <Route path='topper' element={<ElementNav element="topper"/>}>
              <Route path="all" element={<GetAllTopper />}/>
              <Route path="create" element={<CreateTopper />}/>
              <Route path="delete" element={<DeleteTopper />}/>
            </Route>

            {/* category related routing */}
            <Route path='category' element={<ElementNav element="category"/>}>
              <Route path="all" element={<GetAllCategory />}/>
              <Route path="create" element={<CreateCategory />}/>
              <Route path="delete" element={<DeleteCategory />}/>
              <Route path="cname" element={<GetAllImageByCategory />}/>
            </Route>

            {/* Image related routing */}
            <Route path='gallery' element={<ElementNav element="gallery"/>}>
              <Route path="all" element={<GetAllImage  />}/>
              <Route path="create" element={<UploadImage />}/>
              <Route path="delete" element={<DeleteImage />}/>
              <Route path="category" element={<GetAllImageByCategory />}/>
            </Route>

            {/* user related routing */}
            <Route path='users' element={<ElementNav element="users"/>}>
              <Route path="all" element={<GetAllUser  />}/>
              <Route path="create" element={<CreateUser />}/>
              <Route path="delete" element={<DeleteUser />}/>
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
