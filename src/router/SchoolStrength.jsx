import React from 'react'

import OurStrMain from '../vlogFiles/OurStrMain'

import obj from '../data/AboutMainData.json'
import GoToTop from './GoToTop'

const SchoolStrength = () => {
  return (
    <>
     <OurStrMain data={obj.ourstrength} />  
      <GoToTop />
    </>
  )
}

export default SchoolStrength
