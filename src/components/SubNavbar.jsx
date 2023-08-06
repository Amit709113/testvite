import React, { useState } from 'react'

const SubNavbar = () => {
    const [showToggler,setShowToggler]=useState([false,false,false]);

  return (
    <>
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a href="#" className="nav-link">
                    Home
                    <span className="sr-only">(current)</span>
                </a>
            </li>
            {/* nav inside nav */}
            <li className={showToggler[0]?"nav-item dropdown show":"nav-item dropdown"}
            onClick={()=>{
                setShowToggler((prev)=>{
                    return [!prev[0],false,false]
                });
            }
            }>
            {/* bgimg here */}

                <a className="nav-link dropdown-toggle "  id='navbar-dropdown-drops' role='buttton' aria-haspopup='true' aria-expanded={showToggler[0]} name={0}>
                    About Us
                </a>
                <div className={showToggler[0]?"dropdown-menu-top dropdown-menu show":"dropdown-menu"}>
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

            <li className={showToggler[1]?"nav-item dropdown show":"nav-item dropdown"}
            onClick={()=>{
                setShowToggler((prev)=>{
                    return [false,!prev[1],false]
                });
            }
            }>
                <a className="nav-link dropdown-toggle "  id='navbar-dropdown-drops' role='buttton' aria-haspopup='true' aria-expanded={showToggler[1]} name={2}>
                    Admission
                </a>
                <div className={showToggler[1]?"dropdown-menu-top dropdown-menu show":"dropdown-menu"}>
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

            <li className={showToggler[2]?"nav-item dropdown show":"nav-item dropdown"}
            onClick={()=>{
                setShowToggler((prev)=>{
                    return [false,false,!prev[2]]
                });
            }
            }>
                <a className="nav-link dropdown-toggle "  id='navbar-dropdown-drops' role='buttton' aria-haspopup='true' aria-expanded={showToggler[2]} name={3}>
                    Facilities
                </a>
                <div className={showToggler[2]?"dropdown-menu-top dropdown-menu show":"dropdown-menu"}>{/*include show class when it is clicked */}
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
                <a href="./gallery/" className="nav-link">
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
      
    </>
  )
}

export default SubNavbar
