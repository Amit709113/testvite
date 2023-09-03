import React, { useEffect, useState } from 'react'
import { topperDelete, topperGet } from '../../crud/UserService';
import UpdateTopper from './UpdateTopper'
const DeleteTopper = () => {
  
  const [topperList,setTopperList]=useState();
  const[isclose,setClose]=useState(false);
  const[topper,setTopper]=useState({})
  const[tId,setTId]=useState(0);
  const[message,setMessage]=useState("");

  const messageSetter=(mess)=>{
    setMessage(mess);
  }

  useEffect(()=>{
      topperGet().then((resp)=>{
          setTopperList(resp);
      }).catch((error)=>{
          console.log(error);
      })
  },[])

  const handlerDelete=(id)=>{

    topperDelete(id).then((resp)=>{
      console.log(resp);
      setMessage(`topper with id ${id} is deleted successfully !!`)
    }).catch((error)=>{
      console.log(error);
    })

  }
  const handlerUpdate=(topperId,topper)=>{
    setTId(topperId);
    setTopper(topper);
  }

  const closeFn=()=>{
    console.log(" i am called from child componet")
    setClose(false);
  }


  return (
    <>
    
    <div className='main-element'>
        <h3>delete topper  </h3>
        <table>
            <thead>
                <tr>
                    <th> Serial No </th>
                    <th> Topper Id </th>
                    <th> Name </th>
                    <th> Year </th>
                    <th> feedback </th>
                    <th> delete </th>
                    <th> update </th>
                </tr>

            </thead>
            <tbody>
            {
                
                topperList!=null ? topperList.map((topper,idx)=>{
                    const {topperId,topperName,topperYear,topperFeedback}=topper;
                    return <tr key={idx}>
                        <td>{idx+1} </td>
                        <td>{topperId}</td>
                        <td>{topperName}</td>
                        <td>{topperYear}</td>
                        <td>{topperFeedback} </td>
                        <td><button onClick={()=>handlerDelete(topperId)}>Delete</button></td>
                        <td><button onClick={()=>{
                          handlerUpdate(topperId,topper);
                          setClose(true);
                        }}> Update </button></td>
                    </tr>
                    
                }) : <tr><td>loading ...</td></tr>
            }
            </tbody>
        </table>
        <p>message: {message}</p>
        {/* topper updation new  */}
        {
          isclose ? <UpdateTopper tId={tId} tpr={topper} closeFn={closeFn} messageSetter={messageSetter}/> : null
        } 
    </div>
    </>
  )
}

export default DeleteTopper
 