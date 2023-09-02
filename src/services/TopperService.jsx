import axios from 'axios';
import React,{useState,useEffect } from 'react'

const API="http://localhost:9090/api/topper/";

const TopperService = () => {
    const [isLoading,setLoading] = useState(true);
    const[data,setData]=useState();
    const fetchData=async(url)=>{
        try{
            const response=await fetch(url);
            const temp=await response.json();
            setData(temp);
            setLoading(false);
        }
        catch(error){
            console.error(error);
        }
    }
    useEffect(()=>{
        fetchData(API);
    },[]);
  return (
    <>
    {data? 
    
    
        
        data.map(({topperId,topperName,topperFeedback,topperYear,topperScore},idx)=>{
            return (<div>
                <p>{topperId}</p>
                <p>{topperName}</p>
                <p>{topperFeedback}</p>
                <p>{topperYear}</p>
                <p>{topperScore}</p>
                
            </div>)
        })
        :
        null
    
    
    
    }
    

    </>
  )
}

export default TopperService
