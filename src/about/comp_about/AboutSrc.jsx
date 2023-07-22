import React from 'react'
import ContentPageHeading from '../../components/contentPageHeading'
import AboutMain from './AboutMain';


const AboutSrc = ({obj}) => {
    const {bgimgsrc,heading,...remObj} =obj;
    const newObj={bgimgsrc,heading}

    
  return (
    <>
        <ContentPageHeading obj={newObj} />
        <AboutMain data={remObj} />
    </>
  )
}

export default AboutSrc
