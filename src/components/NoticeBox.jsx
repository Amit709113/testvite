import React, { useEffect,useState } from 'react'
import './NoticeBox.css'

 import { BASE_URL,myAxios} from '../services/helper';

// import axios from 'axios';





const NoticeBox = (props) => {
  // const{notice}=props;
  const[notice,setData]=useState()
  const[error,setError]=useState()

//Note using promises
  
  // useEffect(()=>{
  //   axios.get(`${BASE_URL}/notices/`).
  //     then((res)=>{
  //       console.log(res.data)
  //       setData(res.data)
  //   }).
  //   catch((error)=>setError(error))
  // },[])



  //using async and await
  // const getNoticeData =async()=> {
  //   try{
  //     const response= await axios.get(`${BASE_URL}/notices/`); 
  //     setData(response.data)

  //   }
  //   catch(error){
  //     setError("error")
  //   }
  // }
 
  
  //osam way to do this 

  const getNoticeData=async()=>{
    try{
        const response =await myAxios.get("/notices/");
        setData(response.data)

    }
    catch(error){
        console.error(error.message);    
    }
  }


  useEffect(()=>{
    getNoticeData();
  })


  return (
    <>
      <div id="notice-section-container">
        <div  className='notice-content-section'>
         <div className='notice-board-heading'>Notice Board</div>
         <marquee
            
            direction="up" 
            scrollAmount="6" 
            scrollDelay="6"   
         >
        {notice?
          
          notice.map((item,idx)=>{
            return(
              <div className='notice-tab'  key={idx}>
                <div className='notice-date' >
                  {item.noticeDate}
                </div>
                <div className="notice-title">
                  <a href={item.noticeLink} target='_blank' >{item.noticeTitle}</a>
                </div>

                <div className='notice-content'>
                  {item.noticeDesc}
                </div>
                <br />
                <div className='authority'>{item.author}</div>
                <hr />
              </div>
            )
          })
          :<div>loading....</div>
        }
        </marquee>
        </div>
      </div>
    </>
  )
}

export default NoticeBox
