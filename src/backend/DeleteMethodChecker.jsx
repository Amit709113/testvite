import React, { useState } from 'react'
const url="http:///localhost:9090/api/notices"
const DeleteMethodChecker = () => {
    const [text,setText]=useState(0);
    const[finalText,setFinalText]=useState();
    const[returnedData,setReturnedData]=useState();

    const changeEvent=(event)=>{
        const{name,value}=event.target;
        setText(value);
    }
    const submitEvent=(event)=>{
        event.preventDefault();
        setFinalText(text);

    }

    const deleteEventCall = async()=>{
        try{
            const resp=await fetch(`${url}/${finalText}`,{
                method:"delete",

            })
            const temp= await resp.json();
            console.log(temp);
            setReturnedData(temp);
        }catch(error){
            console.error(error);
        }

    }
  return (<>
    <form action="" onSubmit={submitEvent}>
    <p>Enter id to delete an notice </p>
    <input type='text' name="Date"  placeholder='Enter Date' onChange={changeEvent}/><br/>
    <button type="submit">submit data </button>
    </form>
    <button onClick={deleteEventCall}>delete the entered data  </button>
    {returnedData?<div>
    <div>message:{returnedData.message} </div>
    <div> status:{`${returnedData.success}`} </div>
    </div>:null}


    </>
  )
}

export default DeleteMethodChecker
