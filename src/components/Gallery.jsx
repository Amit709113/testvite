import React, { useState } from 'react'
import {IoClose} from "react-icons/io5";
import './Gallery.css'




const Gallery = ({galleryData}) => {
    const [model,setModel] =useState(false);
    const[tempImgSrc,setTempImgSrc]=useState('');
    const getImg=(imgSrc)=>{
        setTempImgSrc(imgSrc);
        setModel(true);
    }
  return (
    <>
        
        <div id="gallery-section">
        <div className={model?"model open":"model"}>
            <img src={tempImgSrc} alt="model" />
            <IoClose onClick={()=>setModel(false)}/>
        </div>

            <h1 className='heading'>Gallery</h1>
            <div className='gallery-category-section'>
                <button onClick={()=>getAllPhoto} >All</button>
                <button onClick={()=>getBefore22}>before 2022</button>
                <button onClick={()=>getRep22}>2022 republic day</button>
                <button onClick={()=>getFarewell23}>2023</button>
                <button onClick={()=>getOthers}>Others</button>
            </div>
            
            <div className="gallery-main">
                {
                    galleryData.map(({category,id,imgSrc,alt},idx)=>{
                        return (<div className='pics' key={idx} onClick={()=>getImg(imgSrc)}>
                                    <img src={imgSrc} alt={alt} className='gallery-image' />

                            </div>)
                        
                    })
                }
            </div>
                
        </div>        
    </>
  )
}

export default Gallery


/*
<h1  className='mt-5 text-center main-heading'>Order Your Favourite Dish</h1>
        <hr />
        <div className="menu-tabs container">
            <div className="menu-tab d-flex justify-content-arouond">
                <button className="btn btn-warning">BreakFast</button>
                <button className="btn btn-warning">Lunch</button>
                <button className="btn btn-warning">Evening</button>
                <button className="btn btn-warning">Dinner</button>
                <button className="btn btn-warning">All</button>
            </div>
        </div>
        enter commment here my main item section 
        <div className="menu-items contaier-fluid mt-5" >
            <div className="row">
                <div className="col-11 mx-auto"></div>
                    <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="row Item-inside">
                            enter comment for image here
                            <div className='col-12 col-md-12 col-lg-4 img-div'>
                                <img src={imgSrc} alt="pic" className='img-fluid' width={100}/>
                            </div>
                            enter commment here menu Items description 
                            <div className='col-12 col-md-12 col-lg-8'>
                                <div className="main-title pt-4 pb-3">
                                    <h1>MEGGI</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>

                                </div>
                                <div className="menu-price-book">
                                    <div className="price-book-divide d-flex justify-content">
                                        <h2>Price : 12$</h2>
                                        <a href="#">
                                            <button className="btn btn-primary">Order Now</button>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

        </div>
        <div id='gallery-section'>
            <div className="containerg">
                
            </div>

        </div>

 */
