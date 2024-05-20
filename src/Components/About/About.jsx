import React from 'react'
import './About.css'
import aboutImg from '../../assets/about.png'
const About = () => {
  return (
    <div className='about'>
       <div className="about-left">
        <img src={aboutImg} alt="" />
       </div>
       <div className="about-right">
           <h2>Welcome to our Institute</h2>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Facilis id asperiores animi aliquid veniam ex autem, ipsum non earum in!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
             Deserunt possimus quae aliquid asperiores porro obcaecati ad. 
             Doloremque odio corporis eius.</p>
            <button className='btn btn-about'>Learn More &rarr;</button>
       </div>
    </div>
  )
}

export default About