import React from 'react'

import './NoticeBox.css'

const NoticeBox = (props) => {
  const{notice}=props;

  return (
    <>
      <div id="notice-section-container">
        <div  className='notice-content-section'>
         <div className='notice-board-heading'>Notice Board</div>
         <span></span>
         <marquee
            direction="up" 
            scrollAmount="2" 
            scrollDelay="2"   
         >
        {
          
          notice.map((item,idx)=>{
            return(
              <div className='notice-tab'  key={idx}>
                <div className='notice-date' >
                  {item.noticeDate}
                </div>
                <div className="notice-title">
                  <a href={item.link} target='_blank' >{item.noticeTitle}</a>
                </div>

                <div className='notice-content'>
                  {item.noticeDesc}
                </div>
                <br />
                <div className='authority'>{item.auther}</div>
                <hr />
              </div>
            )
          })
        }
        </marquee>
        </div>
      </div>
    </>
  )
}

export default NoticeBox
