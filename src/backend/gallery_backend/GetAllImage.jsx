import React, { useEffect, useState } from 'react'
import { galleryGet } from '../../crud/UserService';

const GetAllImage = () => {

  const [galleryList,setgalleryList]=useState();
    useEffect(()=>{
        allgallery();
    },[])
    const allgallery = () => {
        galleryGet().then((resp)=>{
            setgalleryList(resp);
        }).catch((error)=>{
            console.log(error);
        })
    }

  return (
    <>
    <div className='main-element'>
        <h3>All Images  are </h3>

        <table>
            <thead>
                <tr>
                <th> Serial No </th>
                <th> Image Id </th>
                <th> caption </th>
                <th> Alt </th>
                <th> Drive link </th>
                <th> image </th>
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
                    
                }) : <tr><td>loading ...</td></tr>
            }
            </tbody>
        </table>
        
    </div>
    </>
  )
}

export default GetAllImage
