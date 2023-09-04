import React, { useEffect, useState } from 'react'
import { categoryGet, gelleryGetByCategory } from '../../crud/UserService';


const GetAllImageByCategory = () => {

  const [message,setMessage]=useState("");
  const [categoryList,setCategoryList]=useState();
  const [cId,setCId]=useState(0);
  const[cName,setCName]=useState("");
  const[galleryList,setGalleryList]=useState();
  const[para,setPara]=useState("");

  useEffect(()=>{
     //get all category
     categoryGet().then((resp)=>{setCategoryList(resp)}).catch((e)=>console.log(e));
  },[])

  const handleChange=(event)=>{
    const {name,value}=event.target;
    setCName(value);
    
    categoryList && categoryList.map(({categoryId,categoryName},idx)=>{
      if(value===categoryName){
        setCId(categoryId)
        return;
      }

    })
    
  }


  const handlerSubmit=(e)=>{
    e.preventDefault();
    if(cId==null  || cId==undefined){
      setMessage("please select a valid category ")
      return ;
    }
    //call server
    gelleryGetByCategory(cId).then((resp)=>{
      setGalleryList(resp)
      setMessage("success ")
      setPara(cName);
    }).catch((error)=>{
      console.log(error);
    })
  }

  return (
    <>
    <div id="item-dash">
    <h1 className='form-heading'> Find All Image by category </h1>
    <hr />
    <div className='main-form'>
    <form onSubmit={(event)=>handlerSubmit(event)} onReset={(e)=>{handlerReset(e)}}>
        
    <label htmlFor='galleryCategory'> select category : </label>
    <select
        name="galleryCategory"
        id="galleryCategory" 
        onChange={(event)=>handleChange(event)}>
        value={cName}
        <option> select </option>
        {categoryList?categoryList.map((cate,idx)=>{
                return <option key={idx} > {cate.categoryName} </option>
        }):null}
    </select> 
  <br />
    <input type="submit"  / > 
  </form>
    
    </div>
    <p>message: {message}</p>
    <div className='main-element'>
        <h3>Images of category : {para} </h3>

        <table>
            <thead>
                <tr>
                <th> Serial No </th>
                <th> Image Id </th>
                <th> caption </th>
                <th> Alt </th>
                <th> Drive link </th>
                <th> preview </th>
                </tr>

            </thead>
            <tbody>
            {
                
                galleryList!=null ? galleryList.map((gallery,idx)=>{
                    const {galleryId,galleryAlt,galleryCaption,galleryLink}=gallery;
                    return <tr key={idx}>
                        <td> {idx+1} </td>
                        <td> {galleryId}</td>
                        <td> {galleryCaption}</td>
                        <td> {galleryAlt}</td>
                        <td> {galleryLink} </td>
                    </tr>
                    
                }) : <tr><td>loading ... please select a category </td></tr>
            }
            </tbody>
        </table>
        
    </div>

        
    </div>

    </>
  )
}

export default GetAllImageByCategory
