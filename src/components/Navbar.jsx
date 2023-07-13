import React, { useState } from 'react';
import './navbar_style.css';

const Navbar = () =>{
    const [showMediaIcon,setShowMediaIcon]=useState(false);

    return(
        <>
        <nav className='main-nav'>
            <div className='menu-link'>
                <ul className={showMediaIcon?"menu-link-desktop desktop":"menu-link-desktop mobile"}> {/* menu-link-desktop  */}
                    <li>
                        <a href="#" className='active'>Home</a>
                    </li>

                    <li>
                        <a href="#">News and Event</a>
                    </li>

                    <li>
                        <a href="#">Notice</a>
                    </li>
                    <li>
                        <a href="#">Faclities</a>
                    </li>
                    <li>
                        <a href="#">Infrastructure</a>
                    </li>
                    <li>
                        <a href="#">Gallery</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>

            </div>
            <div id="hamburger-menu" onClick={()=>{
                setShowMediaIcon(!showMediaIcon)
            }}>
                <i className='fas fa-bars'></i>
            </div>
            

        </nav>

        </>
    )
}
export default Navbar;