import React, { useEffect, useState } from 'react'
import { userGet } from '../../crud/UserService';

const GetAllUser = () => {
  const [userList,setUserList]=useState();
    useEffect(()=>{
        userGet().then((resp)=>{
            setUserList(resp);
        }).catch((error)=>{
            console.log(error);
        })
    },[])
    
  return (
    <>
    <div className='main-element'>
        <h3>All User  </h3>
        <table>
            <thead>
                <tr>
                    <th> Serial No </th>
                    <th> User Id </th>
                    <th> Name </th>
                    <th> email </th>
                    <th> password </th>
                    <th> about </th>
                </tr>
            </thead>
            <tbody>
            {
                userList!=null ? userList.map((user,idx)=>{
                    const {id,name,email,password,about}=user;
                    return <tr key={idx}>
                        <td>{idx+1} </td>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{password} </td>
                        <td>{about}</td>
                    </tr> 
                }) : <tr><td>loading ...</td></tr>
            }
            </tbody>
        </table>
    </div>
    </>
  )
}

export default GetAllUser
