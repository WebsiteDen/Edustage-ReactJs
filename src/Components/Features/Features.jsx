import React from 'react'
import './Features.css'

const Features = () => {
  return (
    <div className='features'>
         <div className="features-text">
             <h3>Awesome Feature</h3>
             <p>Replenish man have thing gathering lights yielding shall you</p>
         </div>
          <div className="features-card">
               <div className="f-card">
                  <span><i class="fa-solid fa-graduation-cap"></i></span>
                  <h4>Scholarship Facility</h4>
                  <p>One make creepeth, man bearing theira firmament won't great heaven</p>
               </div>
               <div className="f-card">
                  <span><i class="fa-solid fa-book"></i></span>
                  <h4>Sell Online Course</h4>
                  <p>One make creepeth, man bearing theira firmament won't great heaven</p>
               </div>
               <div className="f-card">
                  <span><i class="fa-solid fa-certificate"></i></span>
                  <h4>Global Certification</h4>
                  <p>One make creepeth, man bearing theira firmament won't great heaven</p>
               </div>
         </div>
    </div>
  )
}

export default Features