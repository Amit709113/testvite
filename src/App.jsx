import { useState } from 'react'
import MostImpInfo from './components/MostImpInfo';
import SchoolHeading from './components/SchoolHeading';
import VlogList from './components/VlogList.jsx';
import Topper from './components/Topper';
import Testimonial from './components/Testimonial';

import data from './data/topperData.json';
import artical from './data/vlogData.json'

import './App.css'


function App() {
  return (
    <>
      <MostImpInfo />
      <SchoolHeading/>
      <VlogList data={artical.articals}/>
      <Topper />
      <Testimonial testimonialData={data} />
    </>
  )
}

export default App