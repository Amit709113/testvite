import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { categoryGet, galleryPost } from '../../crud/UserService';

const UploadImage = () => {
    const navigator=useNavigate();
    const [gallery,setGallery]=useState({galleryCaption:"",galleryAlt:"",galleryLink:"",galleryCategory:""})
    const [message,setMessage]=useState("");
    const [categoryList,setCategoryList]=useState();


    useEffect(()=>{
        //get all category
        categoryGet().then((resp)=>{setCategoryList(resp)}).catch((e)=>console.log(e));
    },[])

    

    const handleChange=(event)=>{
        const {name,value}=event.target;
        setGallery({...gallery,[name]:value});
        // console.log(name,value)
    }

    const handlerSubmit = (event)=>{
        event.preventDefault();
        const {galleryLink,galleryAlt,galleryCategory}=gallery;

        //validate here
        if(galleryLink.trim()=="" || galleryAlt.trim()==""){
            setMessage("link and alternative must have some value ")
            return;

        }
        //call server here 
        if(galleryCategory==0) {
            setMessage(`please select any one category ${categoryId}`)
            return ;
        }
        galleryPost(gallery).then((resp)=>{
            console.log(resp);
            setMessage(`Image is successfully added ${gallery.galleryCategory}`);
            setTimeout(()=>{
                setMessage("")
                navigator("/testvite/user/dashboard/gallery/create")  // to be tested
            },3000)
            //problem related to unauthorized and authorized case
            //cors issue with token 
            //printed successs message

        }).catch((error)=>{
            console.log(error);   //error to be tested 
        })
    }

    const handlerReset=()=>{

        setGallery({galleryCaption:"",galleryAlt:"",galleryLink:""})
        console.log(categoryId);
    }



  return (
    <>
    <div id='item-dash'>      
      <h1 className='form-heading'> UPLOAD Image </h1>
      <hr />
      <div className='main-form'>
        <form onSubmit={(event)=>handlerSubmit(event)} onReset={(e)=>{handlerReset(e)}}>
            <label htmlFor='galleryCaption'> gallery Caption </label>
            <input
                type="text"
                placeholder='Enter image caption'
                id='galleryCaption'
                name='galleryCaption'
                onChange={(e)=>handleChange(e)}
                value={gallery.galleryComment}
            />
            <br />
            <br />

            <label htmlFor='galleryAlt'> gallery Alternative : </label>
            <input
                type="text"
                placeholder='Enter gallery alternative'
                id='galleryAlt'
                name='galleryAlt'
                onChange={(e)=>handleChange(e)}
                value={gallery.galleryAlt}
            />
            <br />
            <br />

            <label htmlFor='galleryLink'> Image Drive Link </label>
            <input
                type="text"
                placeholder='Enter Image Drive Link'
                id='galleryLink'
                name='galleryLink'
                onChange={(e)=>handleChange(e)}
                value={gallery.galleryLink}
            />
            <br />
            <br />


            <label htmlFor='galleryCategory'> select category : </label>
                <select
                    name="galleryCategory"
                    id="galleryCategory" 
                    onChange={(event)=>handleChange(event)}>
                    value={gallery.galleryCategory}
                    <option> select </option>
                    {categoryList?categoryList.map((cate,idx)=>{
                            return <option key={idx} > {cate.categoryId} </option>
                    }):null}
                </select> 
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

export default UploadImage
