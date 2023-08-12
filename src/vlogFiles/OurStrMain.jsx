import React from 'react'

import ContentPageHeading from '../components/contentPageHeading'
import NbStartColumn from '../components/NbStartColumn'
import OurStrMainContent from './OurStrMainContent'


import '../components/MainContent.css'

const OurStrMain = ({data}) => {

  const {bgimgsrc,heading,...remData} =data;
  const newData={bgimgsrc,heading};
   
    
  return (
    <>
      <ContentPageHeading obj={newData} />

        <div id="section-content-inner">
            <div className="containera">
                <div className="rowa  pmni">
                    <NbStartColumn />
                    <OurStrMainContent  reqData={remData} />
                </div>
            </div>
        </div>
    </>
  )
}

export default OurStrMain