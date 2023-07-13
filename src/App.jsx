import { useState } from 'react'

import VlogList from './components/VlogList.jsx';
import Topper from './components/Topper';
import Testimonial from './components/Testimonial';

import data from './data/topperData.json';
import artical from './data/vlogData.json'

import './App.css'


function App() {
  return (
    <>

      <VlogList data={artical.articals}/>
      <Topper />
      <Testimonial testimonialData={data} />
    </>
  )
}

export default App