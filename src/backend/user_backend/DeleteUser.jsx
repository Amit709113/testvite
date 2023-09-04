import React, { useEffect, useState } from 'react'
import { userDelete, userGet } from '../../crud/UserService';
import UpdateUser from './UpdateUser';

const DeleteUser = () => {
  const [userList,setUserList]=useState();
  const[user,setUser]=useState({})
  const[message,setMessage]=useState("");
  const[uId,setUId]=useState(0);  //to whom we want to update
  const[isClose,setClose]=useState(false);

  const messageSetter=(mess)=>{
    setMessage(mess);
  }

  useEffect(()=>{
      userGet().then((resp)=>{
          setUserList(resp);
      }).catch((error)=>{
          console.log(error);
      })
  },[])

  const handlerDelete=(id)=>{
    userDelete(id).then((resp)=>{
      console.log(resp);
      setMessage(`user with id ${id} is deleted successfully !!`)
    }).catch((error)=>{
      console.log(error);
    })

  }
  const handlerUpdate=(userId,usr)=>{
    setUId(userId);
    setUser(usr);
  }

  const closeFn=()=>{
    setClose(false);
  }


  return (
    <>
      <div className='main-element'>
        <h3>delete user  </h3>
        <table>
            <thead>
                <tr>
                    <th> Serial No </th>
                    <th> User Id </th>
                    <th> Name </th>
                    <th> email </th>
                    <th> delete </th>
                    <th> update </th>
                </tr>
            </thead>
            <tbody>
            {
                userList!=null ? userList.map((ur,idx)=>{
                    const {id,name,email}=ur;
                    return <tr key={idx}>
                        <td>{idx+1} </td>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td><button onClick={()=>handlerDelete(id)}>Delete</button></td>
                        <td><button onClick={()=>{
                          handlerUpdate(id,ur);
                          setClose(true);
                        }}> Update </button></td>
                    </tr> 
                }) : <tr><td>loading ...</td></tr>
            }
            </tbody>
        </table>
        <p>message:{message}</p>
        {/* user updation */}
        {
          isClose ? <UpdateUser uId={uId} usr={user} closeFn={closeFn} messageSetter={messageSetter}/> : null
        }
    </div>
    </>
  )
}

export default DeleteUser
