import React from 'react'
import './SchoolHeading.css'
import logo from '../assets/logo.jpg'

const SchoolHeading = () => {
  return (
    <div className="school_info">
        <div className='container-school-heading'>
                <div className="logo-container">
                    <img src={logo} alt="logo" className='logo-image' width={100} />
                </div>

                <div className="school-detail">
                    <div className="row">
                        <div className="school-name">
                            <h1>DIVINE PUBLIC SCHOOL</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="school-address">
                            <span> Chandlaso Kuru Lohardaga 835213 </span>
                        </div>

                    </div>
                </div>
            
        </div>
    </div>
    )    
}
        
export default SchoolHeading
