import React, { useState } from 'react'
import { logIn } from './UserService';
import { doLogin } from '../auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();

  const[loginDetails,setLoginDetails]=useState({username:"",password:""});
  const[message,setMessage]=useState("")

  const handleChange=(event)=>{
    const{name,value}=event.target;
    setLoginDetails({ ...loginDetails,[name]:value })
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    //validate data
    if(loginDetails.username.trim()=="" || loginDetails.password.trim()==""){
      setMessage("Credentials must not be empty")
      setTimeout(()=>setMessage(""),3000)
      return;
    }
    else{
      //call server data
      logIn(loginDetails).then((data)=>{
        console.log(data);
        doLogin(data,()=>{
          console.log("user info is saved in local storage")
          //redirct to user dashboard page 
          navigate("/testvite/user/dashboard");
        })
        
        setMessage("login Success");
        setTimeout(()=>{setMessage("")},3000)

      }).catch((error)=>{

        console.log(error);
        if(error.response.status==400){
          setMessage("password is incorrect")
          setTimeout(()=>setMessage(""),3000);
        }
        if(error.response.status==404){
          setMessage(`Username in invalid ${error.response.data.message}`)
          setTimeout(()=>setMessage(""),3000)
        }

      })

    }
    
  
  }

  const resetData=()=>{
    setLoginDetails({username:"",password:""});
    setMessage("")
  }

  return (
    <>
    <h1> Login </h1>
    <form
        onSubmit={(e)=>{
        handleSubmit(e);
    }}>
        
        <label htmlFor="username"> Enter username : </label>
        <input
            type="text"
            placeholder='Enter registered email'
            id='username'
            name='username'
            onChange={(e)=>handleChange(e)}
            value={loginDetails.username}
        
        />
        <br/>
        <br/>

        <label htmlFor="password"> Enter Password : </label>
        <input
            type="text"
            placeholder='Enter password'
            id='password'
            name='password'
            onChange={(e)=>handleChange(e)}
            value={loginDetails.password}
        
        />
        <br/>
        <br/>

        <div className='btn-container'>
            <button  type="submit"> SUBMIT </button>
            <button type="reset" onClick={()=>resetData()}>RESET</button>
        </div>
    </form>

    <h3>{message}</h3>
    </>
  )
}

export default Login

