import React from 'react'
import { useState } from 'react'
import {BASE_URL, myAxios } from '../services/helper'
const url="http://127.0.0.1:9090/api/notices/"
const PostMethodChecker  = () => {


  const[changeData,setChangeData]=useState(()=>{
    return{
      Date:'',
      Title:'',
      Desc:'',
      Author:'',
      Link:''
    }
  })
  const[finalData,setFinalData]=useState(()=>{
    return{
      noticeDate:'',
      noticeTitle:'',
      noticeDesc:'',
      noticeAuthor:'',
      noticeLink:'',
    }
  })

  const[res,setRes]=useState();

  // const[receivedData,setReceivedData]=useState();


  const changeEvent=(event)=>{
    const {name,value}=event.target;
    setChangeData((prevData)=>{
      return{
        ...prevData,
        [name]:value
      }
    })
  }

  const submitEvent=(event)=>{
    event.preventDefault();
    setFinalData(()=>{
      const{Date,Title,Desc,Author,Link}=changeData;
      return{
        noticeDate:Date,
        noticeTitle:Title,
        noticeDesc:Desc,
        noticeAuthor:Author,
        noticeLink:Link,
      }
    })  
      }

    const sendData= async()=>{
      // try{
      //   const response = await myAxios.post(`${BASE_URL}/notices/`,finalData)
      //   setData(response.data);
      //   console.log("the uploaded data is : ")
      //   console.log(response.data);
      // }
      // catch(error){
      //   console.log(error)
      // }


      try{
      const response=await fetch(url,{
        method:"post",
        body:JSON.stringify({
          noticeDate:"22-Aug-2023",
          noticeTitle:"admissionnotice",
          noticeDesc:"admission open",
          noticeLink:"www.github.com/Amit709113",
          noticeauthor:"amit kr"
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      
    
      


      })
      const tempData=await response.json();
      console.log(tempData);
    }
      catch(error){
        console.log(error)

      }
      const datas=await response.json();
      console.log(datas)

      const reqBody={
        noticeDate:"amtee",
        noticeAuthor:"amit",
        noticeDesc:"description",
        noticeLink:"link",
        noticeTitle:"title"
      }

      
      
    }

    const sendDataFromForm=async(event)=>{
      event.preventDefault();
      try{
        const resp=await fetch(url,{
          method:"post",
          body:JSON.stringify(finalData),
          headers:{
            "Content-type": "application/json; charset=UTF-8"
          }
        }
          )
        const temp=await resp.json();
        
        console.log(temp);
        setRes(temp);

      }catch(error){
        console.warn(error);
      }
    }


    return (
    <>
      <form action="" onSubmit={submitEvent}>
        <p>Enter Date </p>
        <input type='text' name="Date"  placeholder='Enter Date' onChange={changeEvent}/><br/>

        <p>Enter Title </p>
        <input type="text" name="Title"  placeholder='Enter Title' onChange={changeEvent}/><br/>

        <p>Enter Description (not more then 500 characters) </p>
        <input type="text" name="Desc"  placeholder='Enter Description ' onChange={changeEvent}/><br/>

        <p>Enter author </p>
        <input type="text" name="Author"  placeholder='Enter author' onChange={changeEvent}/><br/>

        <p>Enter Link </p>
        <input type="text" name="Link"  placeholder='Enter Link' onChange={changeEvent}/><br/>

        <button type="submit">submit data </button>
      </form>

      <br /> 

      <button onClick={sendDataFromForm}>Send to DataBase</button>


      <div>
        <p>{res?res.noticeId:null}</p>
        <p>{res?res.noticeTitle:null}</p>
        <p>{res?res.noticeDesc:null}</p>
        <p>{res?res.noticeLink:null}</p>
        <p>{res?res.noticeAuthor:null}</p>
        <p>{res?res.noticeDate:null}</p>


      </div>
    </>
  )
}

export default PostMethodChecker 
