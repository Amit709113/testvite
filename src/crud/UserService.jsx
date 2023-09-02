import React from 'react'
import { myAxios,REG_URL,LOGIN_URL } from './Helper'

export const signUp=(user)=>{
    return myAxios.post(REG_URL,user).then((response) => response.data)
}

export const logIn=(user)=>{
  return myAxios.post(LOGIN_URL,user).then((response)=>response.data);
}

export const noticePost=(notice)=>{
  return myAxios.post(NOTICE_URL,notice).then((response)=>response.data);
}

const UserService = () => {
  return (
    <>

      
    </>
  )
}

export default UserService
