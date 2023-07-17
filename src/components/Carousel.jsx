import React, { useState } from 'react';
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs';

import './Carousel.css';

// import cimgsrc0 from '../assets/infra.jpg'
// import cimgsrc1 from '../assets/gate.jpg'
// import cimgsrc2 from '../assets/office.jpg'
// import cimgsrc3 from '../assets/cca.jpg'
// import cimgsrc4 from '../assets/schoolname.jpg'

const imgArray=[cimgsrc0,cimgsrc1,cimgsrc2,cimgsrc3,cimgsrc4]

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
          data.map((item,idx)=>{  {/*one change can do every think */}
              return <img src={item.src} alt={item.alt} key={idx} className={slide===idx?"slides":'slides slides-hidden'} />  
          })
        }
                <div className="img-text">Image Description </div>
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