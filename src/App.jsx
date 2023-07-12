import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import src1 from "https://picsum.photos/200/300";
import src2 from "./assets/preity.jpg"
import src3 from "./assets/pawan.jpg"
const src1="https://picsum.photos/200/300";
const src4='./assets/preity.jpg';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={src1} alt="lorem image" />
      <p>deploying static page on github pages</p>
      <img src={src3} alt="our image" />
      <img src={src2} style={{height:'200px'}} alt="cat image"/>
      <img src={src2} style={{height:'200px'}} alt="cat image"/>
    </>
  )
}

export default App
