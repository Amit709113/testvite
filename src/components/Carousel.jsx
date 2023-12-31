import React, { useEffect, useRef, useState } from "react";
const CAROUSEL_DELAY = 3000;

import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs';
import  "./Carousel.css";
import { carouselGet } from "../crud/UserService";
import defaultLink from "../assets/cca.jpg"

const Carousel = (props) => {
  const [ carouselData ,setCarouselData] = useState([]);
  const carouselTimeoutRef = useRef(null);
  const [carouselDelay, setCarouselDelay] = useState(CAROUSEL_DELAY);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(()=>{
    //call server here
    carouselGet().then((resp)=>{
      // console.log(resp);
      setCarouselData(resp);

    }).catch((error)=>{
      setCarouselData([{carouselAlt:`${error.message}`,carouselComment:`${error.message} server is not responding`, carouselLink:{defaultLink}}])
    })
  },[])

  const nextSlide=()=>{
    setCarouselIndex(carouselIndex===carouselData.length-1?0:carouselIndex+1);
  }

  const prevSlide=()=>{
    setCarouselIndex(carouselIndex===0?carouselData.length - 1:carouselIndex-1);

  }
  const setSlide=((idx)=>{setCarouselIndex(idx)})
  useEffect(() => setCarouselDelay(CAROUSEL_DELAY), []);

  useEffect(() => {
    carouselTimeoutRef.current = setTimeout(
      () =>
        setCarouselIndex((prevIndex) =>
          prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
        ),
      carouselDelay
    );

    return () => clearTimeout(carouselTimeoutRef.current);
  }, [carouselData.length, carouselIndex, carouselDelay]);


  return (
    <div  id="section-carousel" className="section-carousel-main">
      <div className="carousel-sub-div" >
        {
          carouselData.map((el, i) => {
            const {carouselLink,carouselAlt}=el;
            return (
                <div
                  key={i}
                  className={carouselIndex===i?"image-div": `image-div not-visible-carousel`}
                  style={{background:'#aaaaaf'}}
                >
                  <img src={carouselLink} alt={carouselAlt} className="image" loading="eager" />
                </div>
            );
        })}
        <BsArrowLeftCircleFill className={`arrow leftArrow`} onClick={prevSlide}/>
        <BsArrowRightCircleFill className={`arrow rightArrow`} onClick={nextSlide}/>
        
        <div className="indicator-btn-parent">
          <span className="indicators">
            {carouselData.map((_,idx)=>{
              return (
              <button 
                key={idx} 
                onClick={()=>setSlide(idx)} 
                className={carouselIndex===idx?'indicator':"indicator indicator-inactive"}>
              </button>
              )
            })}
          </span>
        </div>

        <div className="desc-bar-parent">
            <div className="description-bar">
              {
                carouselData.map((item,idx)=>{
                  const{carouselComment}=item;
                  return(
                    <div className={carouselIndex===idx?"carousel-description":"carousel-description inactive"} key={idx}>{carouselComment}</div>
                  )
                })
              }
            </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;