import { useState } from 'react'
import './App.css'
// import src1 from "https://picsum.photos/200/300";
import Testimonial from './components/Testimonial';
import data from './data/topperData.json';
import img1 from './assets/preity.jpg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1> Alumni data</h1>
      <p>deploying static page on github pages</p>
      <Testimonial testimonialData={data} />
      <img src={img1} alt="my name"  style={{width:'100px', height:'100px'}}/>
    </>
  )
}

export default App