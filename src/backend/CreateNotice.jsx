import React, { useState } from 'react'
import './Backend-style.css'
import { noticePost } from '../crud/UserService';
import { getCurrentUserDetail, getToken } from '../auth';
import { useNavigate } from 'react-router-dom';
const url="http://127.0.0.1:9090/api/notices/"

const CreateNotice = () => {

    
    const navigate=useNavigate()
    const [notice,setNotice]=useState({noticeTitle:"",noticeDesc:"",noticeDate:"",noticeLink:"",noticeAuthor:""})
    const [message,setMessage]=useState("");
    const handleChange=(event)=>{
        const {name,value}=event.target;
        setNotice({...notice,[name]:value});
        console.log(name,value)
    }

    const handlerSubmit=(event)=>{
        event.preventDefault();

        const {noticeTitle,noticeDesc,noticeAuthor,noticeLink,noticeDate}=notice;
        //validate
        if(noticeTitle.trim()=="" || noticeDesc.trim()=="" ){
            setMessage("title and description must have some value")
            return ;
        }   
        //call server
        noticePost(notice).then((resp)=>{
            console.log(resp);
            setMessage(`notice is created successfully 
                         ${JSON.stringify(resp)}`)
            setTimeout(()=>{
                setMessage("")
                navigate("/testvite/user/dashboard")
            },3000);


            //problem encountered here unauthorised case and how to fix authorized case 
            //cors issue happen when we try to send token along with header fix it later
            //print success message and navigate to a new page where
        }).catch(()=>{
            console.log(error);

        })


    }
    const handlerReset=(event)=>{
        setNotice({noticeTitle:"",noticeDesc:"",noticeDate:"",noticeLink:"",noticeAuthor:""})
    }

  return (
    <>
    <div id='item-dash'>
      
        <h1 className='form-heading'> Create new Notice  </h1>
    <hr />
        <div className='main-form'>
            <form onSubmit={(event)=>handlerSubmit(event)} onReset={(e)=>{handlerReset(e)}}>
                <label htmlFor='noticeTitle'> Notice Title : </label>
                <input
                    type="text"
                    placeholder='Enter notice title'
                    id='noticeTitle'
                    name='noticeTitle'
                    onChange={(e)=>handleChange(e)}
                    value={notice.noticeTitle}
                />
                <br />
                <br />

                <label htmlFor='noticeDate'> Notice Date : </label>
                <input
                    type="date"
                    placeholder='Enter notice Date'
                    id='noticeDate'
                    name='noticeDate'
                    onChange={(e)=>handleChange(e)}
                    value={notice.noticeDate}
                />
                <br />
                <br />

                <label htmlFor='noticeDesc' >Notice Description : </label>
                <input
                    type="textarea"
                    placeholder='Enter notice Description'
                    id='noticeDesc'
                    name='noticeDesc'
                    onChange={(e)=>handleChange(e)}
                    value={notice.noticeDesc}
                />
                <br />
                <br />

                <label htmlFor='noticeAuthor'> authority : </label>
                <input
                    type="text"
                    placeholder='Enter notice authority'
                    id='noticeAuthor'
                    name='noticeAuthor'
                    onChange={(e)=>handleChange(e)}
                    value={notice.noticeAuthor}
                />
                <br />
                <br />

                <label htmlFor='noticeLink'> Notice Link : </label>
                <input
                    type="text"
                    placeholder='Enter notice Link'
                    id='noticeLink'
                    name='noticeLink'
                    onChange={(e)=>handleChange(e)}
                    value={notice.noticeLink}
                />
                <br />
                <br />

                <input type="submit" / > 
                <span> ______________ </span>
                <button type="reset"> reset </button>
            </form>
        </div>
        <p>{message}</p>
    </div>
    </>
  )
}

export default CreateNotice
