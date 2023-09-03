import React, { useEffect, useState } from 'react'
import { topperGet } from '../../crud/UserService';

const GetAllTopper = () => {
    const [topperList,setTopperList]=useState();
    useEffect(()=>{
        topperGet().then((resp)=>{
            setTopperList(resp);
        }).catch((error)=>{
            console.log(error);
        })
    },[])
  return (
    <>
    <div className='main-element'>
        <h3>All Topper  </h3>
        <table>
            <thead>
                <tr>
                    <th> Serial No </th>
                    <th> Topper Id </th>
                    <th> Name </th>
                    <th> Year </th>
                    <th> feedback </th>
                    <th> Score </th>
                </tr>

            </thead>
            <tbody>
            {
                
                topperList!=null ? topperList.map((topper,idx)=>{
                    const {topperId,topperName,topperYear,topperFeedback,topperScore}=topper;
                    return <tr key={idx}>
                        <td>{idx+1} </td>
                        <td>{topperId}</td>
                        <td>{topperName}</td>
                        <td>{topperYear}</td>
                        <td>{topperFeedback} </td>
                        <td>{topperScore}</td>
                    </tr>
                    
                }) : <tr><td>loading ...</td></tr>
            }
            </tbody>
        </table>
        
    </div>

    </>
  )
}

export default GetAllTopper
