import React from 'react'
import './RegCourse.css'

const RegCourse = () => {
  return (
    <div className='regcourse'>
           <div className="regcourse-left">
                 <h1>Register Now</h1>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci possimus quos minus beatae? Ratione, facilis. 
                    Ex quas tenetur soluta itaque?</p>
                    <div className="time">
                      <span className='item'><span className='number'>150</span><span className='text'>Days</span></span>
                      <span className='item'><span className='number'>23</span><span className='text'>Hours</span></span>
                      <span className='item'><span className='number'>47</span><span className='text'>Mins</span></span>
                      <span className='item'><span className='number'>59</span><span className='text'>Secs</span></span>
                  </div>
           </div>
           <div className="regcourse-right">
                 <div className="reghere">
                      <h2>Course for free</h2>
                      <p>It is high time for learning</p>
                      <input type="text" placeholder='Your Name' />
                      <input type="number" placeholder='Your Phone Number' />
                      <input type="email" placeholder='Your Email' name="" id="" />
                      <button className='btn btn-regcourse'>SUBMIT</button>
                 </div>
            </div>
    </div>
  )
}

export default RegCourse