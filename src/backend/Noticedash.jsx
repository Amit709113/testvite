import React, { useState } from 'react'
import './Backend-style.css'
import { noticePost } from '../crud/UserService';

const Noticedash = () => {

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
            //problem encountered here unauthorised case and how to fix authorized case 
            //print success message and navigate to a new page where
        }).catch(()=>{
            console.log(error);

        })


        console.log(notice)

    }
    const handlerReset=(event)=>{
        setNotice({noticeTitle:"",noticeDesc:"",noticeDate:"",noticeLink:"",noticeAuthor:""})
    }

  return (
    <>
    <div id='item-dash'>
      <ul >
        <li>
            create notice
        </li>

        <li>
            update notice
        </li>

        <li>
            delete notice
        </li>
        <li>
            view all notice
        </li>
        <li>
            view by id
        </li>

      </ul>

    <br />
    <hr />
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
                    type="text"
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
    </div>
    </>
  )
}

export default Noticedash
