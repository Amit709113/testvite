import React, { useState,useEffect } from 'react'
import { carouselPost } from '../../crud/UserService';
import { useNavigate } from 'react-router-dom';

const CreateCarousel = () => {
    const navigator=useNavigate();
    const [carousel,setCarousel]=useState({carouselComment:"",carouselAlt:"",carouselLink:""})
    const [message,setMessage]=useState("");
    const handleChange=(event)=>{
        const {name,value}=event.target;
        setCarousel({...carousel,[name]:value});
        // console.log(name,value)
    }

    const handlerSubmit = (event)=>{
        event.preventDefault();
        const {carouselLink,carouselAlt}=carousel;

        //validate here
        if(carouselLink.trim()=="" || carouselAlt.trim()==""){
            setMessage("link and alternative must have some value ")
            return;

        }
        //call server here 
        carouselPost(carousel).then((resp)=>{
            console.log(resp);
            setMessage("carousel is successfully created ");
            setTimeout(()=>{
                setMessage("")
                navigator("/testvite/user/dashboard/carousel/all")  // to be tested

            },3000)
            //problem related to unauthorized and authorized case
            //cors issue with token 
            //printed successs message

        }).catch((error)=>{
            console.log(error);   //error to be tested 

        }
        )
    }

    const handlerReset=()=>{
        setCarousel({carouselComment:"",carouselAlt:"",carouselLink:""})
    }

    return (
    <>
    <div id='item-dash'>
      
        <h1 className='form-heading'> Create new Carousel </h1>
        <hr />
        <div className='main-form'>
          <form onSubmit={(event)=>handlerSubmit(event)} onReset={(e)=>{handlerReset(e)}}>
              <label htmlFor='carouselComment'> Carousel Caption </label>
              <input
                  type="text"
                  placeholder='Enter carousel caption'
                  id='carouselComment'
                  name='carouselComment'
                  onChange={(e)=>handleChange(e)}
                  value={carousel.carouselComment}
              />
              <br />
              <br />

              <label htmlFor='carouselAlt'> Carousel Alternative : </label>
              <input
                  type="text"
                  placeholder='Enter carousel alternative'
                  id='carouselAlt'
                  name='carouselAlt'
                  onChange={(e)=>handleChange(e)}
                  value={carousel.carouselAlt}
              />
              <br />
              <br />

              <label htmlFor='carouselLink'> Carousel Drive Link </label>
              <input
                  type="text"
                  placeholder='Enter carousel Drive Link'
                  id='carouselLink'
                  name='carouselLink'
                  onChange={(e)=>handleChange(e)}
                  value={carousel.carouselLink}
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

export default CreateCarousel
