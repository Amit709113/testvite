import React, { useEffect, useState } from 'react'
import {galleryDelete, galleryGet } from '../../crud/UserService'
const DeleteImage = () => {

  const [galleryList,setGalleryList]=useState();
  const[message,setMessage]=useState("");
  useEffect(()=>{
    galleryGet().then((resp)=>{
      setGalleryList(resp);
    }).catch((error)=>{
      console.log(error);
  })
  },[])

  const handlerDelete=(id)=>{
    galleryDelete(id).then((resp)=>{
      console.log(message)
      setMessage(`image with id ${id} is deleted successfully ${JSON.stringify(resp)}`)
    }).catch((error)=>{
      console.log(error)
    })
  }

  return (
    <>
    <div className='main-element'>
        <h3>delete Image  </h3>
        <table>
            <thead>
                <tr>
                    <th> Serial No </th>
                    <th> Image Id </th>
                    <th> caption </th>
                    <th> delete </th>
                </tr>
            </thead>
            <tbody>
            {
                galleryList!=null ? galleryList.map((gallery,idx)=>{
                    const {galleryId,galleryCaption}=gallery;
                    return <tr key={idx}>
                        <td>{idx+1} </td>
                        <td>{galleryId}</td>
                        <td>{galleryCaption}</td>
                        <td><button onClick={()=>handlerDelete(galleryId)}>Delete</button></td>
                    </tr> 
                }) : <tr><td>loading ...</td></tr>
            }
            </tbody>
        </table>
        <p>message: {message}</p>
    </div>
    </>
    
  )
}

export default DeleteImage
  