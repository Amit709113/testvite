import React, { useState } from 'react'
import { categoryPost, categoryPut } from '../../crud/UserService';

const UpdateCategory = ({cId,cgy,closeFn,messageSetter}) => {
  const [category,setCategory]=useState(cgy);
  
  const handleChange=(event)=>{
    const {name,value}=event.target;
    setCategory({...category,[name]:value})
  }

  const handlerSubmit=(event)=>{
    event.preventDefault();
    const {categoryName}=category;

    //validate
    if(categoryName.trim()==""){
      messageSetter("name feild must have some value")
      return;
    }

    //call server
    categoryPut(cId,category).then((resp)=>{
      console.log(resp);
      messageSetter("category is created successfully");
      closeFn();
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
      
      <h1 className='form-heading'> update category </h1>
      <button style={{float:"right",padding:"6px",margin:"12px"}}  onClick={()=>{
          closeFn()
        }}> close </button>

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
      
      </div>
    </>
  )
}

export default UpdateCategory
