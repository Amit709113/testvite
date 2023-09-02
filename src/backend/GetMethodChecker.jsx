import React, { useEffect ,useState} from 'react'
const url="http://localhost:9090/api/notices/"


const GetMethodChecker = () => {
        
const [data,setData]=useState();
const getData=async()=>{
    try{
        const response=await fetch(url);
        const newData=await response.json();
        console.log(newData);
        setData(newData);
    }
    catch(error){
        console.warn(error)
        console.log(error);
    }
}
useEffect(()=>{
    getData();
},[])

    
  return (
    <>
    {data!=undefined?
    data.map(({noticeId,noticeTitle,noticeDesc,noticeLink,author},idx)=>{
        return(<div key={idx}>
            <p >{noticeId}</p>
            <p>{noticeTitle}</p>
            <p>{noticeDesc}</p>
            <p>{author}</p>
            <p>{noticeLink}</p>

        </div>)
})
    

    :<div>loading ... </div>

    }
    </>
  )
}

export default GetMethodChecker
