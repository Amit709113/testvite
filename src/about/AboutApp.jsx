import React from 'react';

import MostImpInfo from '../components/MostImpInfo';
import SchoolHeading from '../components/SchoolHeading';

import NewNavbar from '../components/NewNavbar';

import AboutMain from './comp_about/AboutMain';

import Footer from '../components/Footer';

import obj from '../data/AboutMainData.json'



function AboutApp() {
  return (
    <>
        <MostImpInfo />
        <SchoolHeading />
        {/* <Navbar /> */}
        <NewNavbar />
        <AboutMain data={obj.about} />
        <Footer />

    </>
  )

}

export default AboutApp

// next to decrease the cupling on content page heading jsx file by decomposing it into multiple components
//some are at src/components and remaining are at comp_about