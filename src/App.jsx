import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import src1 from "https://picsum.photos/200/300";
import src2 from "./assets/preity.jpg"
import src3 from "./assets/pawan.jpg"
import Testimonial from './components/Testimonial';
import data from './data/topperData.json';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Alumni data</h1>
      <p>deploying static page on github pages</p>
      <Testimonial testimonialData={data} />

    </>
  )
}

export default App