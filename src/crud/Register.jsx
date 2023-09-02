import React, { useEffect, useState } from 'react'
import { signUp } from './UserService'
const Register = () => {

    const[data,setData]=useState({
        name:"",
        email:"",
        password:"",
        about:""
    })
    const[error,setError]=useState({
        errors:{},
        isError:false,
        message:""
    })

    const[message,setMessage]=useState("")

    // useEffect(()=>{
    //     console.log(data);
    // },[data]);
    const handleChange=(event)=>{
        const{name,value}=event.target;
        setData({...data,[name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        //data validate
        

        //call server api for sending the api
        signUp(data).then((resp)=>{
            // console.log(resp);
            setMessage("You are successfully Registered !! ")
            
        })
        .catch((error)=>{
            console.log(error);
        })
    
    }

    const resetData=()=>{
        setData(
            {
                name:"",
                email:"",
                password:"",
                about:""
            })
        setMessage("");

    }

  return (
    <>
    <h1> Register </h1>
    <form
        onSubmit={(e)=>{
        handleSubmit(e);
    }}>
        
        <label htmlFor="name"> Enter Name : </label>
        <input
            type="text"
            placeholder='Enter your name'
            id='name'
            name='name'
            onChange={(e)=>handleChange(e)}
            value={data.name}
        
        />
        <br/>
        <br/>
        

        <label htmlFor="email"> Enter Email : </label>
        <input
            type="email"
            placeholder='Enter your email'
            id='email'
            name='email'
            onChange={(e)=>handleChange(e)}
            value={data.email}
        
        />
        <br/>
        <br/>

        <label htmlFor="password"> Enter Password : </label>
        <input
            type="text"
            placeholder='Enter your name'
            id='password'
            name='password'
            onChange={(e)=>handleChange(e)}
            value={data.password}
        
        />
        <br/>
        <br/>

        <label htmlFor="about"> Enter about  : </label>
        <input
            type="textarea"
            placeholder='About Yourself'
            id='about'
            name='about'
            onChange={(e)=>handleChange(e)}
            value={data.about}
        
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

export default Register

