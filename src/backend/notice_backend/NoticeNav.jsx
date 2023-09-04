import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const NoticeNav = () => {
    const navigator=useNavigate();
  return (
    <>
    <div className='element-dashboard'>
        <ul className='dash-item'>
            <li onClick={()=>{
                navigator("/testvite/user/dashboard/notice/create")
            }}>
                create notice
            </li>

            <li onClick={()=>{
                navigator("/testvite/user/dashboard/notice/delete")
            }}>
                delete / update notice
            </li>

            <li onClick={()=>{
                navigator("/testvite/user/dashboard/notice/all")
            }}>
                All notices 
            </li>

        </ul>
    </div>
    {/* <GetAllNotice /> */}
    <Outlet />
    </>
  )
}

export default NoticeNav
