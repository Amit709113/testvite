import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import './NewNavbar.css'

const NewNavbar = () => {

    const[showNavbarForMobile,setShowNavbarForMobile]=useState(false);

    const[showToggler1,setShowToggler1]=useState(false);
    const[showToggler2,setShowToggler2]=useState(false);
    const[showToggler3,setShowToggler3]=useState(false);
    

  return (
    <>
        <div id="section-menu-header" className=' sticky section-menu-header-class'>
            <div className="containern">
                    <nav className="navbar navbar-expand-lg p-0">
                        {/* menu for mobile */}
                        <button className={showNavbarForMobile===true?"navbar-toggler collapsed":"navbar-toggler"} type='button' onClick={()=>{
                            setShowNavbarForMobile(!showNavbarForMobile);
                            setShowToggler1(false);
                            setShowToggler2(false);
                            setShowToggler3(false);
                        }} >
                            <span className="navbar-toggle-icon">
                                <IoMenu />
                            </span>
                        </button>

                        <div className={showNavbarForMobile?"navbar-collapse collapse show ":"navbar-collapse collapse"} id="navbar-supported-content">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a href="#" className="nav-link">
                                        Home
                                        <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                {/* nav inside nav */}
                                <li className={showToggler1?"nav-item dropdown show":"nav-item dropdown"}
                                onClick={()=>{
                                    setShowToggler1(!showToggler1);
                                    setShowToggler2(false);
                                    setShowToggler3(false);
                                }
                                }>
                                {/* bgimg here */}

                                    <a className="nav-link dropdown-toggle "  id='navbar-dropdown-drops' role='buttton' aria-haspopup='true' aria-expanded={showToggler1} name={0}>
                                        About Us
                                    </a>
                                    <div className={showToggler1?"dropdown-menu-top dropdown-menu show":"dropdown-menu"}>
                                        <a href="#" className="dropdown-item">
                                            Dps History 
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            School as a glance
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            Vision and Mission
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            The Staff
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            Homeage to the founder
                                        </a>
                                    </div>
                                </li>

                                <li className={showToggler2?"nav-item dropdown show":"nav-item dropdown"}
                                onClick={()=>{
                                    setShowToggler1(false);
                                    setShowToggler2(!showToggler2);
                                    setShowToggler3(false);
                                }
                                }>
                                    <a className="nav-link dropdown-toggle "  id='navbar-dropdown-drops' role='buttton' aria-haspopup='true' aria-expanded={showToggler2} name={2}>
                                        Admission
                                    </a>
                                    <div className={showToggler2?"dropdown-menu-top dropdown-menu show":"dropdown-menu"}>
                                        <a href="#" className="dropdown-item">
                                            Why DPS
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            Admission Procedure
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            Rules and Regulations
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            Fee Structure
                                        </a>
                                    </div>
                                </li>

                                <li className={showToggler3?"nav-item dropdown show":"nav-item dropdown"}
                                onClick={()=>{
                                    setShowToggler1(false);
                                    setShowToggler2(false);
                                    setShowToggler3(!showToggler3);
                                }
                                }>
                                    <a className="nav-link dropdown-toggle "  id='navbar-dropdown-drops' role='buttton' aria-haspopup='true' aria-expanded={showToggler3} name={3}>
                                        Facilities
                                    </a>
                                    <div className={showToggler3?"dropdown-menu-top dropdown-menu show":"dropdown-menu"}>{/*include show class when it is clicked */}
                                        <a href="#" className="dropdown-item">
                                            Transportation
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            Abusus Class
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            Sports
                                        </a>
                                    
                                    </div>
                                </li>

                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Gallery
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Help Desk
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        News and Event
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
            </div>    
        </div> 

    </>
  )
}

export default NewNavbar 
