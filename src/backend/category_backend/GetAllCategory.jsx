import React, { useEffect, useState } from 'react'
import { categoryGet } from '../../crud/UserService';

const GetAllCategory = () => {
  const[categoryList,setCategoryList]=useState();
  useEffect(()=>{
    categoryGet().then((resp)=>{
      setCategoryList(resp);
    }).catch((error)=>{
      console.log(error);
    })
  },[])

  
  return (
    <>
      <div className='main-element'>
        <h3>All Category  </h3>
        <table>
            <thead>
                <tr>
                    <th> Serial No </th>
                    <th> Category Id </th>
                    <th> Name </th>
                    <th> About </th>
                </tr>

            </thead>
            <tbody>
            {
                
                categoryList!=null ? categoryList.map((category,idx)=>{
                    const {categoryId,categoryName,categoryAbout}=category;
                    return <tr key={idx}>
                        <td>{idx+1} </td>
                        <td>{categoryId}</td>
                        <td>{categoryName}</td>
                        <td>{categoryAbout}</td>
                    </tr>
                    
                }) : <tr><td>loading ...</td></tr>
            }
            </tbody>
        </table>
        
    </div>
    </>
  )
}

export default GetAllCategory
