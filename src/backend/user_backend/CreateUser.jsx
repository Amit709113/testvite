import React, { useState } from 'react'
import { userPost } from '../../crud/UserService';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const navigator=useNavigate();
  const [message,setMessage]=useState();
  const [user,setUser]=useState({name:"",email:"",password:"",about:""})
  
  const handleChange=(event)=>{
    const {name,value}=event.target;
    console.log(name,value)
    setUser({...user,[name]:value})
  }

  const handlerSubmit=(event)=>{
    event.preventDefault();
    const {name,email,password,about}=user;

    //validate 
    if(name.trim()=="" || email.trim()==""|| password.trim()==""){
      setMessage("name, email and password must have some value")
      return;
    }
    //call server
    userPost(user).then((resp)=>{
      console.log(resp);
      setMessage(`user is successfully created ${JSON.stringify(resp)}` );
            setTimeout(()=>{
                setMessage("")
                navigator("/testvite/user/dashboard/users/all")  // to be tested
            },3000)

    }).catch((error)=>{
        console.log(error);
        setMessage(error.response.data.name);
        setTimeout(()=>{
            setMessage("")
        },3000)
    })
  }

  const handlerReset=()=>{
    setUser({name:"",email:"",password:"",about:""})
  }
  

  return (
    <>
      <div id='item-dash'>
      <h1 className='form-heading'> Create new User </h1>
      <hr />
      <div className='main-form'> 
      <form id="forms" onSubmit={(event)=>handlerSubmit(event)} onReset={(e)=>{handlerReset(e)}}>
      <label htmlFor="name"> Enter Name : </label>
        <input
            type="text"
            placeholder='Enter your name'
            id='name'
            name='name'
            onChange={(e)=>handleChange(e)}
            value={user.name}
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
            value={user.email}
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
            value={user.password}
        
        />
        <br/>
        <br/>

        <label htmlFor="about"> Enter about  : </label>
        {/* <input
            type="textarea"
            placeholder='About Yourself'
            id='about'
            name='about'
            onChange={(e)=>handleChange(e)}
            value={user.about}
        
        /> */}
        {/* the below line of code for adding text area and is successfully tested */}
        <textarea 
        placeholder='about yourself'
        id="about"
        name='about'
        value={user.about}
        onChange={(e)=>handleChange(e)}> </textarea>
       
        <br/>
        <br/>


        <div className='btn-container'>
            <button  type="submit"> SUBMIT </button>
            <button type="reset">RESET</button>
        </div>
        </form>
      </div>
      <p>{message}</p>
      </div>
    </>
  )
}

export default CreateUser
