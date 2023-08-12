import React from 'react';
import MostImpInfo from './components/MostImpInfo';
import SchoolHeading from './components/SchoolHeading';
import VlogList from './components/VlogList.jsx';
import Topper from './components/Topper';
import Testimonial from './components/Testimonial';
import ContectInfo from './components/ContectInfo';
import Footer from './components/Footer';
import data from './data/topperData.json';
import artical from './data/vlogData.json'

import slide from './data/carouselData.json'

import './App.css'
import NewNavbar from './components/NewNavbar';
import Carousel from './components/Carousel';
import EventBox from './components/EventBox'
import NoticeBox from './components/NoticeBox'
import noticeData from './data/noticeData.json'; 
import eventData from './data/eventData.json'


function App() {
  return (
    <>

      <MostImpInfo />
      <SchoolHeading/>
      <NewNavbar />
      <Carousel carouselData={slide.slides}/>
      <div className='notice-wrapper'>
        <NoticeBox notice={noticeData.noticeBoard}/>
        <EventBox event={eventData.eventData}/>
      </div>
      <VlogList data={artical.articals}/>
      <Topper />
      <Testimonial testimonialData={data} />
      <ContectInfo />
      <Footer />
    </>
  )

}

export default App