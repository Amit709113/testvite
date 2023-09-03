import React, { useEffect, useState } from 'react'
import { categoryDelete, categoryGet } from '../../crud/UserService';
import UpdateCategory from './UpdateCategory';

const DeleteCategory = () => {

  const[categoryList,setCategoryList]=useState();
  const[category,setCategory]=useState();
  const[message,setMessage]=useState("");
  const[cId,setCId]=useState(0);
  const[isClose,setClose]=useState(false);


  useEffect(()=>{
    categoryGet().then((resp)=>{
      setCategoryList(resp);
    }).catch((error)=>{
      console.log(error);
    })
  },[])

  const handlerDelete=(id)=>{

    categoryDelete(id).then((resp)=>{
      console.log(resp);
      setMessage(`category with id ${id} is deleted successfully !!`)
    }).catch((error)=>{
      console.log(error);
    })
  }
  const handlerUpdate=(categoryId,category)=>{
    setCId(categoryId);
    setCategory(category);
  }

  const messageSetter=(msg)=>{
    setMessage(msg);
  }
  const closeFn=()=>{
    //console.log(" i am called from child componet")
    setClose(false);
  }

  return (
    <>
      
    <div className='main-element'>
        <h3>delete category  </h3>
        <table>
            <thead>
                <tr>
                    <th> Serial No </th>
                    <th> Category Id </th>
                    <th> Name </th>
                    <th> delete </th>
                    <th> update </th>
                </tr>

            </thead>
            <tbody>
            {
                
                categoryList!=null ? categoryList.map((category,idx)=>{
                    const {categoryId,categoryName}=category;
                    return <tr key={idx}>
                        <td>{idx+1} </td>
                        <td>{categoryId}</td>
                        <td>{categoryName}</td>
                        <td><button onClick={()=>handlerDelete(categoryId)}>delete</button></td>
                        <td><button  onClick={()=>{
                          handlerUpdate(categoryId,category);
                          setClose(true);
                        }}>update</button></td>
                    </tr>
                    
                }) : <tr><td>loading ...</td></tr>
            }
            </tbody>
        </table>
        <p>message: {message}</p>
        {/* topper updation new  */}
        {
          isClose ? <UpdateCategory cId={cId} cgy={category} closeFn={closeFn} messageSetter={messageSetter}/> : null
        } 
    </div>
    </>
  )
}

export default DeleteCategory
