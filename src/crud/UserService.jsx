import React from 'react'
import { myAxios,REG_URL,LOGIN_URL, NOTICE_URL,CAROUSEL_URL, myAxiosToken } from './Helper'

export const signUp=(user)=>{
    return myAxios.post(REG_URL,user).then((response) => response.data)
}

export const logIn=(user)=>{
  return myAxios.post(LOGIN_URL,user).then((response)=>response.data);
}

//create notice
export const noticePost=(notice)=>{
  const newNotice={
    ...notice,
    author:notice.noticeAuthor
  }
  return myAxiosToken.post(NOTICE_URL,newNotice).then((response)=>response.data);
}

//getting all notice
export const noticeGet=()=>{
  return myAxiosToken.get(NOTICE_URL).then((resp)=>resp.data);
}

//delete notice
export const noticeDelete=(id)=>{
  return myAxiosToken.delete(`${NOTICE_URL}${id}`).then((resp)=>resp.data);
}

//update notice by id 
export const noticeUpdateApiCall=(id,notice)=>{
  const newNotice={
    ...notice,
    author:notice.noticeAuthor
  }
  return myAxiosToken.put(`${NOTICE_URL}${id}`,newNotice).then((resp)=>resp.data);
}




//create carousel
export const carouselPost=(carousel)=>{
  return myAxiosToken.post(CAROUSEL_URL,carousel).then((response)=>response.data);
}

//getting all carousel
export const carouselGet=()=>{
  return myAxiosToken.get(CAROUSEL_URL).then((resp)=>resp.data);
}

//delete carousel
export const carouselDelete=(id)=>{
  return myAxiosToken.delete(`${CAROUSEL_URL}${id}`).then((resp)=>resp.data);
}

//update carousel by id 
export const carouselUpdateApiCall=(id,carousel)=>{
  
  return myAxiosToken.put(`${CAROUSEL_URL}${id}`,carousel).then((resp)=>resp.data);
}


