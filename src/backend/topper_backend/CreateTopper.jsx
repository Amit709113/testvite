import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { topperPost } from '../../crud/UserService';

const CreateTopper = () => {
  const navigator=useNavigate();
  const [message,setMessage]=useState();
  const [topper,setTopper]=useState({topperId:"",topperName:"",topperYear:"",topperFeedback:"",topperScore:"",topperLink:""})
  
  const handleChange=(event)=>{
    const {name,value}=event.target;
    setTopper({...topper,[name]:value})
  }

  const handlerSubmit=(event)=>{
    event.preventDefault();
    const {topperName,topperFeedback,topperYear}=topper;

    //validate 
    if(topperName.trim()=="" || topperFeedback.trim()==""|| topperYear.trim()==""){
      setMessage("name, feedback and year must have some value")
      return;
    }
    //call server
    topperPost(topper).then((resp)=>{
      console.log(resp);
      setMessage("carousel is successfully created ");
            setTimeout(()=>{
                setMessage("")
                navigator("/testvite/user/dashboard/topper/all")  // to be tested

            },3000)

    }).catch((error)=>{
        console.log(error);
    })
  }

  const handlerReset=()=>{
    setTopper({topperName:"",topperYear:"",topperFeedback:"",topperScore:"",topperLink:""})
  }
  
  return (
    <>
    <div id='item-dash'>
      
      <h1 className='form-heading'> Create new Topper </h1>
      <hr />
      <div className='main-form'>
        <form onSubmit={(event)=>handlerSubmit(event)} onReset={(e)=>{handlerReset(e)}}>
            <label htmlFor='topperName'> Name : </label>
            <input
                type="text"
                placeholder='Enter student name '
                id='topperName'
                name='topperName'
                onChange={(e)=>handleChange(e)}
                value={topper.topperName}
            />
            <br />
            <br />

            <label htmlFor='topperYear'> Year : </label>
            <input
                type="text"
                placeholder='Enter passout Year '
                id='topperYear'
                name='topperYear'
                onChange={(e)=>handleChange(e)}
                value={topper.topperYear}
            />
            <br />
            <br />

            <label htmlFor='topperFeedback'> Feedback : </label>
            <input
                type="text"
                placeholder='Enter feedback '
                id='topperFeedback'
                name='topperFeedback'
                onChange={(e)=>handleChange(e)}
                value={topper.topperFeedback}
            />
            <br />
            <br />

            <label htmlFor='topperScore'> Score : </label>
            <input
                type="text"
                placeholder='Enter score '
                id='topperScore'
                name='topperScore'
                onChange={(e)=>handleChange(e)}
                value={topper.topperScore}
            />
            <br />
            <br />

            <label htmlFor='topperLink'> drive link : </label>
            <input
                type="text"
                placeholder='Enter Drive Link '
                id='topperLink'
                name='topperLink'
                onChange={(e)=>handleChange(e)}
                value={topper.topperLink}
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

export default CreateTopper
