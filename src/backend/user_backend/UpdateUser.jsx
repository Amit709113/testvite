import React, { useState } from 'react'
import { userPut } from '../../crud/UserService';

const UpdateUser = ({uId,usr,closeFn,messageSetter}) => {
  const[user,setUser]=useState(usr)

  const handleChange=(event)=>{
    const {name,value}=event.target;
    setUser({...user,[name]:value})
  }

  const handlerSubmit=(event)=>{
    event.preventDefault();
    const {name,email,password}=user;
    
    //validate 
    //this is not working as expected
    if(JSON.stringify(name).trim()=="" ||JSON.stringify(email).trim()==""||JSON.stringify(password).trim()==""){
      messageSetter("name, email and password must have some value")
      return;
    }
    //call server
    userPut(uId,user).then((resp)=>{
      console.log(resp);
      messageSetter(`user is successfully updated ${JSON.stringify(resp)}` );
            setTimeout(()=>{
                messageSetter("")
            },3000)

    }).catch((error)=>{
      console.log(error);
      messageSetter(error.response.data.name);
      setTimeout(()=>{
          messageSetter("")
      },3000)
    })
  }

  const handlerReset=()=>{
    setUser({name:"",email:"",password:"",about:""})
  }
  
  return (
    <>
      <div id='item-dash'>
      <h1 className='form-heading'> Update User </h1>
      <button style={{float:"right",padding:"6px",margin:"12px"}}  onClick={()=>{
          closeFn()
        }}> close </button>
      <hr />
      <div className='main-form'> 
      <form onSubmit={(event)=>handlerSubmit(event)} onReset={(e)=>{handlerReset(e)}}>
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
            placeholder='Enter password'
            id='password'
            name='password'
            onChange={(e)=>handleChange(e)}
            value={user.password}
        
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
            value={user.about}
        
        />
        {/* try to add text area here  */}
        <br/>
        <br/>
        <div className='btn-container'>
            <button  type="submit"> SUBMIT </button>
            <button type="reset">RESET</button>
        </div>
        </form>
      </div>
     </div>
    </>
  )
}

export default UpdateUser
