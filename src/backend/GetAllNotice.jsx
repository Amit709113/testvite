import React, { useEffect, useState } from 'react'
import { noticeGet } from '../crud/UserService';

const GetAllNotice = () => {
    const [noticeList,setNoticeList]=useState();
    useEffect(()=>{
        getAllNotice();
    },[])

    const getAllNotice=()=>{
        noticeGet().then((resp)=>{
            setNoticeList(resp)
        }).catch((error)=>{
            console.log(error);
        })
    }

  return (
   <>
    <div className='main-element'>
        <h3>All notices are </h3>

        <table>
            <thead>
                <td> Serial No </td>
                <td> Notice Id </td>
                <td> Date </td>
                <td> Title </td>
                <td>body</td>
                <td> drive link </td>
                <td> Author </td>
            </thead>
            {
                noticeList!=null ? noticeList.map((notice,idx)=>{
                    const {noticeId,noticeDate,noticeTitle,noticeDesc,noticeLink,author}=notice;
                    return <tbody>
                        <td> {idx+1} </td>
                        <td> {noticeId}</td>
                        <td> {noticeDate}</td>
                        <td> {noticeTitle}</td>
                        <td> {noticeDesc} </td>
                        <td> {noticeLink} </td>
                        <td> {author}</td>

                    </tbody>
                    
                }) : <div>loading ...</div>
            }
        </table>
        
    </div>

   </>
  )
}

export default GetAllNotice
