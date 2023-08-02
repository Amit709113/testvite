import React from 'react';

import MostImpInfo from '../components/MostImpInfo';
import SchoolHeading from '../components/SchoolHeading';

import NewNavbar from '../components/NewNavbar';

import OurStrMain from './comp_ourstr/OurStrMain';

import Footer from '../components/Footer';

import obj from '../data/AboutMainData.json'



function OurStrApp() {
  return (
    <>
        <MostImpInfo />
        <SchoolHeading />
        {/* <Navbar /> */}
        <NewNavbar />
        <OurStrMain data={obj.ourstrength} />  
        {/* to be change */}
        <Footer />

    </>
  )

}

export default OurStrApp

// next to decrease the cupling on content page heading jsx file by decomposing it into multiple components
//some are at src/components and remaining are at comp_about
