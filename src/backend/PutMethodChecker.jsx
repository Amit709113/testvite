import React,{useState,useEffect} from 'react'
const url="http:///localhost:9090/api/notices/90"

const PutMethodChecker = () => {

    const[changeData,setChangeData]=useState(()=>{
        return{
          Date:'',
          Title:'',
          Desc:'',
          Author:'',
          Link:''
        }
      })
      const[finalData,setFinalData]=useState(()=>{
        return{
          noticeDate:'',
          noticeTitle:'',
          noticeDesc:'',
          author:'',
          noticeLink:'',
        }
      })
    
      const[res,setRes]=useState();
    
      // const[receivedData,setReceivedData]=useState();
    
    
      const changeEvent=(event)=>{
        const {name,value}=event.target;
        setChangeData((prevData)=>{
          return{
            ...prevData,
            [name]:value
          }
        })
      }
    
      const submitEvent=(event)=>{
        event.preventDefault();
        setFinalData(()=>{
          const{Date,Title,Desc,Author,Link}=changeData;
          return{
            noticeDate:Date,
            noticeTitle:Title,
            noticeDesc:Desc,
            author:Author,
            noticeLink:Link,
          }
        })  
          }
    
    
        const sendDataFromForm=async(event)=>{
          event.preventDefault();
          try{
            const resp=await fetch(url,{
              method:"put",
              body:JSON.stringify(finalData),
              headers:{
                "Content-type": "application/json; charset=UTF-8"
              }
            }
              )
            const temp=await resp.json();
            
            console.log(temp);
            setRes(temp);
    
          }catch(error){
            console.warn(error);
          }
        }
    


  return (<>
      <form action="" onSubmit={submitEvent}>
        <p>Enter Date </p>
        <input type='text' name="Date"  placeholder='Enter Date' onChange={changeEvent}/><br/>

        <p>Enter Title </p>
        <input type="text" name="Title"  placeholder='Enter Title' onChange={changeEvent}/><br/>

        <p>Enter Description (not more then 500 characters) </p>
        <input type="text" name="Desc"  placeholder='Enter Description ' onChange={changeEvent}/><br/>

        <p>Enter author </p>
        <input type="text" name="Author"  placeholder='Enter author' onChange={changeEvent}/><br/>

        <p>Enter Link </p>
        <input type="text" name="Link"  placeholder='Enter Link' onChange={changeEvent}/><br/>

        <button type="submit">submit data </button>
      </form>

      <br /> 

      <button onClick={sendDataFromForm}>Send to DataBase</button>


      <div>
        <p>{res?res.noticeId:null}</p>
        <p>{res?res.noticeTitle:null}</p>
        <p>{res?res.noticeDesc:null}</p>
        <p>{res?res.noticeLink:null}</p>
        <p>{res?res.author:null}</p>
        <p>{res?res.noticeDate:null}</p>


      </div>
    </>
  )
}

export default PutMethodChecker
