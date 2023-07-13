import React, { useState } from 'react';
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs';
 
// import {slides} from '../data/carouselData.json'
import './Carousel.css';


const Carousel = ({data}) => {
  const [slide,setSlides]=useState(0);


  const nextSlide=()=>{
    setSlides((slide+1)%data.length);
  }
  const prevSlide=()=>{
    setSlides(slide===0?data.length-1:slide-1);
  }

  return (<>
    <div className='carousel'>
      <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide} />
        {
          data.map((item,idx)=>{
            console.log(idx);
            return <img src={item.src} alt={item.alt} key={idx} className={slide===idx?"slides":'slides slides-hidden'} />
          })
        }
      <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>
      <span className="indicators">
          {data.map((_,idx)=>{
            return (
            <button 
              key={idx} 
              onClick={()=>setSlides(idx)} 
              className={slide===idx?'indicator':"indicator indicator-inactive"}>
            </button>
            )
          })}
      </span>
    </div>
    
    </>
    
  )
}

export default Carousel