import React from 'react';

import MostImpInfo from '../components/MostImpInfo';
import SchoolHeading from '../components/SchoolHeading';
import NewNavbar from '../components/NewNavbar';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery.jsx'
import galleryData from '../data/galleryData.json'



function GalleryApp() {
  return (
    <>
        {/* <MostImpInfo /> */}
        <SchoolHeading />
        <NewNavbar />
        <Gallery galleryData={galleryData.galleryData} />
        <Footer />

    </>
  )

}

export default GalleryApp

// next to decrease the cupling on content page heading jsx file by decomposing it into multiple components
//some are at src/components and remaining are at comp_about
