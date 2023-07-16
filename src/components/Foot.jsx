

import {FaGreaterThan} from 'react-icons/fa'
import {FaLocationDot} from 'react-icons/fa6'
// FaLocationDot
import {BsFillTelephoneFill} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md'

const Foot = () => {
  return (
    <>
       <div className="row-element">
                    <div className="columns">
                        <div className="column-heading">Quick Links</div>
                        <div className="link-section">
                            <ul>
                                <li>
                                <a href="#"><FaGreaterThan style={{paddingTop:'4px' , marginTop:'3px' ,marginRight:"6px"}} /> Home</a>
                                </li>
                                <li>
                                    <a href="#"><FaGreaterThan style={{paddingTop:'4px' , marginTop:'3px' ,marginRight:"6px"}} /> About Us</a>
                                </li>
                                <li>
                                <a href="#"><FaGreaterThan style={{paddingTop:'4px' , marginTop:'3px' ,marginRight:"6px"}} /> Admission</a>
                                </li>
                                <li>
                                <a href="#"><FaGreaterThan style={{paddingTop:'4px' , marginTop:'3px' ,marginRight:"6px"}} /> Holyday List</a>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
    </>
  )
}

const Facilities = ()=> {
    return (
        <>
           <div className="row-element">
                        <div className="columns">
                            <div className="column-heading">Facilities</div>
                            <div className="link-section">
                                <ul>
                                    <li>
                                    <a href="#"><FaGreaterThan style={{paddingTop:'4px' , marginTop:'3px' ,marginRight:"6px"}} />Sports</a>
                                    </li>
                                    <li>
                                        <a href="#"><FaGreaterThan style={{paddingTop:'4px' , marginTop:'3px' ,marginRight:"6px"}} /> Library</a>
                                    </li>
                                    <li>
                                    <a href="#"><FaGreaterThan style={{paddingTop:'4px' , marginTop:'3px' ,marginRight:"6px"}} /> Transportation</a>
                                    </li>
                                    <li>
                                    <a href="#"><FaGreaterThan style={{paddingTop:'4px' , marginTop:'3px' ,marginRight:"6px"}} /> Computer Labs</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>
        </>
      )

}


const OtherActivities=()=>{
return (
    <>
       <div className="row-element">
                    <div className="columns">
                        <div className="column-heading">Other Activities</div>
                        <div className="link-section">
                            <ul>
                                <li>
                                <a href="#"><FaGreaterThan style={{paddingTop:'4px' , marginTop:'3px' ,marginRight:"6px"}} /> Learning and Assignment Projects</a>
                                </li>
                                <li>
                                    <a href="#"><FaGreaterThan style={{paddingTop:'4px' , marginTop:'3px' ,marginRight:"6px"}} /> Social Activities</a>
                                </li>
                                <li>
                                <a href="#"><FaGreaterThan style={{paddingTop:'4px' , marginTop:'3px' ,marginRight:"6px"}} /> Group Activities</a>
                                </li>
                                <li>
                                <a href="#"><FaGreaterThan style={{paddingTop:'4px' , marginTop:'3px' ,marginRight:"6px"}} /> Academics Events</a>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
    </>
  )
}

const JoinUs=() => {
    return (
        <>
           <div className="row-element">
                        <div className="columns">
                            <div className="column-heading">Join Us</div>
                            <div className="link-section">
                                <ul>
                                    <li>
                                    <span  href="#"><FaLocationDot style={{ fontSize:"1.5rem",marginRight:"6px"}} /> Chandlaso Road, Chandlaso, Kuru-835213,Lohardaga,Jharkhand</span>
                                    </li>
                                    <li>
                                        <a href="#"><BsFillTelephoneFill style={{fontSize:"1.5rem",marginTop:"14px"}} /> 0123456789,1234567890</a>
                                    </li>
                                    <li>
                                    <a href="#"><MdEmail style={{fontSize:"1.6rem",margin:"14px 0 0 0"}}  /> dps@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>
        </>
      )

}

export default Foot;
export {Facilities,OtherActivities,JoinUs};

