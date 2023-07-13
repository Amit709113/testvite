import { useState } from 'react'
import './App.css'

import Topper from './components/Topper';
import Testimonial from './components/Testimonial';
import data from './data/topperData.json';

function App() {
  return (
    <>
      <Topper />
      <Testimonial testimonialData={data} />
    </>
  )
}

export default App