import React, { useEffect, useState } from 'react'

const url="http://127.0.0.1:9090/api/notices/";



const NoticeDelete = () => {
    useEffect(()=>{
        getAllData();
    },[])
    const [data,setData]=useState([]);
    const [message,setMessage]=useState({});

    const getAllData=async()=>{
        
        try{
            const response=await fetch(url);
            const allData=await response.json();
            setData(allData);

    
        }catch(error){
            console.log("error")
            console.error(error);
        }
    }

    const deleteEvent=async(id)=>{
        try{
            const resp=await fetch(`${url}${id}`,{
                method:"delete",
            })
            const temp=await resp.json();
            setMessage(temp);
            console.log(temp);
            getAllData();

        }catch(error){
            console.log(error);
        }
        
    }
  return (
    
    <>
        <div>
            <h2>All notices are</h2> 
            <p>total no of notice : {data&&data.length}</p>
            {data && data.map((item,idx)=>{
                const {noticeId,noticeDate,noticeTitle,author}=item;
                return (
                <div key={idx}>
                    <p>{noticeId}</p>
                    <button onClick={
                        ()=>{
                            deleteEvent(noticeId)
                            
                        }
                    }>delete-btn</button>
                    <div>{`date:
                    ${noticeDate},  title: ${noticeTitle},  author:${author}`}
                    </div>
                    
                </div>)
            })
            }

            <p>
                {
                    JSON.stringify(message)
            }</p>
                      
        </div>

      
    </>
  )
}

export default NoticeDelete
