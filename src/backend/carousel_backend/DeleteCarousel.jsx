import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { carouselDelete } from '../../crud/UserService';
import { carouselGet ,carouselUpdateApiCall} from '../../crud/UserService';

const DeleteCarousel = () => {

  const[carouselList,setCarouselList]=useState();
  const[message,setMessage]=useState("");
  const[updateCarousel,setUpdateCarousel]=useState();
  const[updateId,setUpdateId]=useState(0);
  const[updateBox,setUpdateBox]=useState(false);

  const navigate=useNavigate();

  useEffect(()=>{
    allCarousel();
  },[message])  //to be include updateCarousel 

  const allCarousel = () => {
      carouselGet().then((resp)=>{
          setCarouselList(resp);
      }).catch((error)=>{
          console.log(error);
      })
  }

  const  deleteCarouselById=(id)=>{
    carouselDelete(id).then((resp)=>{
      console.log(message)
      setMessage(`carousel with id ${id} is deleted successfully ${JSON.stringify(resp)}`)
    }).catch((error)=>{
      console.log(error)
    })
  }
  const handlerDelete=(id)=>{
    deleteCarouselById(id);
  }

  const handlerUpdate=(id,carousel)=>{
    
    setUpdateId(id);
    setUpdateCarousel(carousel)
    setUpdateBox(true);

  }

  const handleChange=(event)=>{
    const {name,value}=event.target;
    setUpdateCarousel({...updateCarousel,[name]:value});
    // console.log(name,value)
}

const handlerSubmit = (event)=>{
    event.preventDefault();
    const {carouselLink,carouselAlt}=updateCarousel;

    //validate here
    if(carouselLink.trim()=="" || carouselAlt.trim()==""){
        setMessage("link and alternative must have some value ")
        return;

    }
    //call server here 
    carouselUpdateApiCall(updateId,updateCarousel).then((resp)=>{
        console.log(resp);
        setMessage("carousel is successfully updated ");
        setUpdateBox(false);
        setTimeout(()=>{
            setMessage("")
           // navigator("/testvite/user/dashboard/carousel/all")  // to be tested

        },3000)
        //problem related to unauthorized and authorized case
        //cors issue with token 
        //printed successs message

    }).catch((error)=>{
        console.log(error);   //error to be tested 

    }
    )
}

const handlerReset=()=>{
    setUpdateCarousel({carouselComment:"",carouselAlt:"",carouselLink:""})
}

  return (
    <>
      <div className='main-element'>

        <h3> delete carousel</h3>
        <table>
          <thead>
            <tr>
              <th> Serial No </th>
              <th> Carousel Id </th>
              <th> caption </th>
              <th> delete </th>
              <th> update </th>
            </tr>
          </thead>
          <tbody>
            {
              carouselList!=null? carouselList.map((carousel,idx)=>{
                  const {carouselId,carouselComment}=carousel;
                  return (<tr key={idx}>
                    <td>{idx+1}</td>
                    <td>{carouselId}</td><td>{carouselComment}</td>
                    <td><button onClick={()=>handlerDelete(carouselId)}>Delete</button></td>
                    <td><button onClick={()=>handlerUpdate(carouselId,carousel)}> Update </button></td>
                  </tr>)
              }):<tr><td>loading ...</td></tr>
            }
          </tbody>
        </table>
        <p> message : {message}</p>
      </div>

      {/* updating logic */}

    <>{!updateBox?null:
      <div id='item-dash'>
      
        <h1 className='form-heading'> Update Carousel </h1>
        <button style={{float:"right",padding:"6px",margin:"12px"}}  onClick={()=>{
          setUpdateBox(false);
        }}> close </button>
        <hr />
        <div className='main-form'>
          <form onSubmit={(event)=>handlerSubmit(event)} onReset={(e)=>{handlerReset(e)}}>
              <label htmlFor='carouselComment'> Carousel Caption </label>
              <input
                  type="text"
                  placeholder='Enter carousel caption'
                  id='carouselComment'
                  name='carouselComment'
                  onChange={(e)=>handleChange(e)}
                  value={updateCarousel.carouselComment}
              />
              <br />
              <br />

              <label htmlFor='carouselAlt'> Carousel Alternative : </label>
              <input
                  type="text"
                  placeholder='Enter carousel alternative'
                  id='carouselAlt'
                  name='carouselAlt'
                  onChange={(e)=>handleChange(e)}
                  value={updateCarousel.carouselAlt}
              />
              <br />
              <br />

              <label htmlFor='carouselLink'> Carousel Drive Link </label>
              <input
                  type="text"
                  placeholder='Enter carousel Drive Link'
                  id='carouselLink'
                  name='carouselLink'
                  onChange={(e)=>handleChange(e)}
                  value={updateCarousel.carouselLink}
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
    }
      </>
    </>
  )
}

export default DeleteCarousel
