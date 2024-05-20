import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
           <div className="contact-text">
             <h3>Contact Us</h3>
             <p>Replenish man have thing gathering lights yielding shall you</p>
         </div>
        

         <div className="contact-map">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63433
         .47227329264!2d3.3340426216796875!3d6.446395799999997!2m3!1f0!2f0!3f0!3m2
         !1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b24500ec575%3A0x7aaa96f240f1e995!2s
         National%20Open%20University%20Of%20Nigeria%20(NOUN)!5e0!3m2!1sen!2sng!4v
         1711301594917!5m2!1sen!2sng"></iframe>
         </div>
         <div className="contact-col">
             <div className="contact-address">
                  <div className='address'>
                    <span><i className='fa-solid fa-house'></i></span>
                    <div>
                     <h4>California USA.</h4>
                     <p>Santa Monica bullered</p>
                  </div>
                  </div>
                  <div className='address'>
                    <span><i className='fa-solid fa-headphones'></i></span>
                    <div>
                     <h4>00 (440) 9865 526</h4>
                     <p>Mon to Fri 9am to 6pm</p>
                  </div>
                  </div>
                  <div className='address'>
                    <span><i class="fa-solid fa-envelope"></i></span>
                    <div>
                     <h4>support@edustage.com</h4>
                     <p>Send us your query</p>
                  </div>
                  </div>
             </div>
             <div className="contact-input">
                 <input type="text" placeholder='Enter Your Name' />
                 <input type="email" placeholder='Enter Your Email' />
                 <input type="text" placeholder='Enter Your Subject' />
             </div>
             <div className="contact-msg">
                 <textarea name="message" placeholder='Enter Your Message' id="" cols="30" rows="10">
                 </textarea>
             </div>
         </div>
         <button className='btn btn-message'>Enter Message</button>

    </div>
  )
}

export default Contact