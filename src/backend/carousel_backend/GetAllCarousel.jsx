import React, { useEffect, useState } from 'react'
import { carouselGet } from '../../crud/UserService';

const GetAllCarousel = () => {
    const [carouselList,setCarouselList]=useState();
    useEffect(()=>{
        allCarousel();
    })
    const allCarousel = () => {
        carouselGet().then((resp)=>{
            setCarouselList(resp);
        }).catch((error)=>{
            console.log(error);
        })
    }

  return (
   <>
   <div className='main-element'>
        <h3>All Carousel are </h3>

        <table>
            <thead>
                <tr>
                <th> Serial No </th>
                <th> Carousel Id </th>
                <th> Carousel Comment </th>
                <th> Carousel Alt </th>
                <th> Drive link </th>
                </tr>

            </thead>
            <tbody>
            {
                
                carouselList!=null ? carouselList.map((carousel,idx)=>{
                    const {carouselId,carouselAlt,carouselComment,carouselLink}=carousel;
                    return <tr key={idx}>
                        <td> {idx+1} </td>
                        <td> {carouselId}</td>
                        <td> {carouselComment}</td>
                        <td> {carouselAlt}</td>
                        <td> {carouselLink} </td>
                    </tr>
                    
                }) : <tr><td>loading ...</td></tr>
            }
            </tbody>
        </table>
        
    </div>
   </>
  )
}

export default GetAllCarousel
