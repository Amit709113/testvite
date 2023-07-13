import React from 'react';
import Carousel from './Carousel';
import slide from '../data/carouselData.json'

const CarouselSlider=()=>{

    return(
        <>
           <div style={{display:'flex',
                  justifyContent:'center',
                  alignItems:'center'
                }}>
                <Carousel data={slide.slides} />
            </div>
        </>
    )
}
export default CarouselSlider;