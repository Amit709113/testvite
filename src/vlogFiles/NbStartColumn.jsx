import React from 'react'

import {FaGreaterThan} from 'react-icons/fa'

const NbStartColumn = () => {
  return(
    <>
        <div className="nb-start-column">
            <div className='rowa'>
                <div className="column-second padder-mobile">
                    <div className="inner-left">
                        <div className="inner-left-top-nav-header">
                            Notice Board
                        </div>
                        <div className="rowa">
                            <div className="column-notice-body">
                                <div className="inner-left-body">
                                    <ul className="left-nav">
                                        <li>
                                            <a href='#'> <FaGreaterThan />New Notice</a>
                                        </li>
                                        <li>
                                            <a href='#'> <FaGreaterThan />Home </a>
                                        </li>
                                        <li>
                                            <a href='#'> <FaGreaterThan />Admission</a>
                                        </li>
                                        <li>
                                            <a href='#'> <FaGreaterThan />News and Event</a>
                                        </li>
                                        <li>
                                            <a href='#'> <FaGreaterThan />Facilities</a>
                                        </li>
                                        <li>
                                            <a href='#'> <FaGreaterThan />Contect Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default NbStartColumn
