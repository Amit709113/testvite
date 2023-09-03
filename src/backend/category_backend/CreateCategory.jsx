import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { categoryPost } from '../../crud/UserService';

const CreateCategory = () => {
  const navigator=useNavigate();
  const [message,setMessage]=useState();
  const [category,setCategory]=useState({categoryName:"",categoryAbout:""});

  const handleChange=(event)=>{
    const {name,value}=event.target;
    setCategory({...category,[name]:value});
  }
  
  const handlerSubmit=(event)=>{
    event.preventDefault();
    const {categoryName}=category;

    //validate
    if(categoryName.trim()==""){
      setMessage("name feild must have some value")
      return;
    }
    
    //call server
    categoryPost(category).then((resp)=>{
      console.log(resp);
      setMessage("category is created successfully");
      setTimeout(()=>{
        setMessage("")
        navigator("/testvite/user/dashboard/category/all")
      },3000)
    }).catch((error)=>{
      console.log(error);
    })
  }

  const handlerReset=()=>{
    setCategory({categoryName:"",categoryAbout:""})
  }

  return (
    <>
    <div id='item-dash'>
      
      <h1 className='form-heading'> Create category </h1>
      <hr />
      <div className='main-form'>
        <form onSubmit={(event)=>handlerSubmit(event)} onReset={(e)=>{handlerReset(e)}}>
            <label htmlFor='categoryName'>Category Name : </label>
            <input
                type="text"
                placeholder='Enter category '
                id='categoryName'
                name='categoryName'
                onChange={(e)=>handleChange(e)}
                value={category.categoryName}
            />
            <br />
            <br />

            <label htmlFor='categoryAbout'>About : </label>
            <input
                type="text"
                placeholder='category about '
                id='categoryAbout'
                name='categoryAbout'
                onChange={(e)=>handleChange(e)}
                value={category.categoryAbout}
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

export default CreateCategory
