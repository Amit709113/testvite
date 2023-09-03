import React, { useEffect, useState } from 'react'
import { noticeDelete, noticeGet,noticeUpdateApiCall } from '../crud/UserService';
import { useNavigate } from 'react-router-dom';

const DeleteNotice = () => {

    const[noticeList,setNoticeList]=useState([])
    const[message,setMessage]=useState("");
    const[updateNotice,setUpdateNotice]=useState({noticeTitle:"",noticeDesc:"",noticeDate:"",noticeLink:"",noticeAuthor:""})
    const[updateId,setUpdateId]=useState(0);
    const[updateBox,setUpdateBox]=useState(false);
    const navigate=useNavigate();

    const getAllNotice=()=>{
        noticeGet().then((resp)=>{
            setNoticeList(resp)
        }).catch((error)=>{
            console.log(error);
        })
    }

    useEffect(()=>{
        getAllNotice();
    },[message,updateBox])  //careful for this change using 2 element 
    
    const deleteNoticeById = (id)=>{
        // console.log(id);
        noticeDelete(id).then(()=>{

            setMessage(`notice with ${id} is deleted successfully !!`)

            //use state which will refresh page

        }).catch((error)=>{
            console.log(error);
        })
    }

    const handlerDelete=(id)=>{
        deleteNoticeById(id);
    }

    const updateNoticeById=(notice)=>{
        //more action like closing and opening of update notice tab 
        setUpdateNotice(notice);
    }

    const handlerUpdate=(noticeId,notice)=>{
        setUpdateId(noticeId);
        updateNoticeById(notice);
        setUpdateBox(true)
    }

    const handleChange=(event)=>{

        const {name,value}=event.target;
        console.log(name,value);
        setUpdateNotice({...updateNotice,[name]:value});

    }
    const handlerSubmit=(event)=>{
        event.preventDefault();

        const {noticeTitle,noticeDesc,noticeAuthor,noticeLink,noticeDate}=updateNotice;
        //validate
        if(noticeTitle.trim()=="" || noticeDesc.trim()=="" ){
            setMessage("title and description must have some value")
            return ;
        }   
        //call server
        noticeUpdateApiCall(updateId,updateNotice).then((resp)=>{
            console.log(resp);
            setMessage("notice is updated successfully refresh page to see changes")
            setTimeout(()=>{setTimeout("")},3000)
            setUpdateBox(false);
            //do more like removing of update notice box
            
        }).catch((error)=>{
            console.log(error);
        })
        //close the notice box
    }

    const handlerReset=()=>{
        setUpdateNotice({noticeTitle:"",noticeDesc:"",noticeDate:"",noticeLink:"",noticeAuthor:""})

    }

  return (
    <>
     <div className='main-element'>
        <h3>delete notice here</h3>

        <table>
            <thead>
                <tr>
                    <td> Serial No </td>
                    <td> Notice Id </td>
                    <td> Date </td>
                    <td> Title </td>
                    <td>Delete</td>
                    <td> Update</td>
                </tr>
            </thead>
            <tbody>
            {
                noticeList!=null ? noticeList.map((notice,idx)=>{
                    const {noticeId,noticeDate,noticeTitle}=notice;
                    return <tr>
                        <td> {idx+1} </td>
                        <td> {noticeId}</td>
                        <td> {noticeDate}</td>
                        <td> {noticeTitle}</td>
                        <td>
                            <button onClick={()=>handlerDelete(noticeId)}>delete</button>
                        </td>
                        <td>
                            <button onClick={()=>handlerUpdate(noticeId,notice)}>update</button>
                        </td>

                    </tr>
                    
                }) : <div>loading ...</div>
            }
            </tbody>
        </table>
        <p> message : {message}</p>

        {/* update notice  */}
            
        {!updateBox?null:
        <>
            <div id='item-dash'>
            
                <h1 className='form-heading'> Update Notice  </h1>
                <button style={{float:"right",padding:"6px",margin:"12px"}} onClick={()=>setUpdateBox(false)}> close </button>
                <hr />
                <div className='main-form'>
                    <form onSubmit={(event)=>handlerSubmit(event)} onReset={(e)=>{handlerReset(e)}}>

                        <label htmlFor='noticeTitle'> Notice Title : </label>
                        <input
                            type="text"
                            placeholder='Enter notice title'
                            id='noticeTitle'
                            name='noticeTitle'
                            onChange={(e)=>handleChange(e)}
                            value={updateNotice.noticeTitle}
                        />
                        <br />
                        <br />

                        <label htmlFor='noticeDate'> Notice Date : </label>
                        <input
                            type="text"
                            placeholder='Enter notice Date'
                            id='noticeDate'
                            name='noticeDate'
                            onChange={(e)=>handleChange(e)}
                            value={updateNotice.noticeDate}
                        />
                        <br />
                        <br />

                        <label htmlFor='noticeDesc' >Notice Description : </label>
                        <input
                            type="textarea"
                            placeholder='Enter notice Description'
                            id='noticeDesc'
                            name='noticeDesc'
                            onChange={(e)=>handleChange(e)}
                            value={updateNotice.noticeDesc}
                        />
                        <br />
                        <br />

                        <label htmlFor='noticeAuthor'> authority : </label>
                        <input
                            type="text"
                            placeholder='Enter notice authority'
                            id='noticeAuthor'
                            name='noticeAuthor'
                            onChange={(e)=>handleChange(e)}
                            value={updateNotice.noticeAuthor}
                        />
                        <br />
                        <br />

                        <label htmlFor='noticeLink'> Notice Link : </label>
                        <input
                            type="text"
                            placeholder='Enter notice Link'
                            id='noticeLink'
                            name='noticeLink'
                            onChange={(e)=>handleChange(e)}
                            value={updateNotice.noticeLink}
                        />
                        <br />
                        <br />

                        <input type="submit" / > 
                        <span> ______________ </span>
                        <button type="reset"> reset </button>
                    </form>
                </div>
                <p>{message}</p>
            </div>
    </>
        }


    </div>
    </>
  )
}

export default DeleteNotice
