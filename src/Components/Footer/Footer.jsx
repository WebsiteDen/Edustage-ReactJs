import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
          <div className="social-icons">
              <span><i class="fa-brands fa-facebook"></i></span>
              <span><i class="fa-brands fa-instagram"></i></span>
              <span><i class="fa-brands fa-twitter"></i></span>
              <i class="fa-brands fa-google-plus-g"></i>
              <span><i class="fa-brands fa-youtube"></i></span>
          </div>
          <div className="navbar-links">
               <ul>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Courses</li>
                    <li>Testimonial</li>
                    <li>About</li>
                    <li>Contact </li>
                 </ul>
          </div>
          <hr />
         <span className='copyright'><p>Copyright&copy;2024 Powered by Edustage</p></span> 
    </div>
  )
}

export default Footer