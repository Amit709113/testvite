import { useState } from 'react'
import './App.css'

import Testimonial from './components/Testimonial';
import data from './data/topperData.json';
import img1 from './assets/preity.jpg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Testimonial testimonialData={data} />
    </>
  )
}

export default App