import React from 'react'
import './Testimonial.css'
import client1 from '../../assets/t1.png'
import client2 from '../../assets/t2.png'
import client3 from '../../assets/t3.png'
import client4 from '../../assets/t4.png'

const Testimonial = () => {
  return (
    <div className='testimonial'>
          <h1>What They Say About Us</h1>
          <p>Replenish man have thing gathering lights yielding shall you</p>   
                <div className="testimonial-div">
                    <div className="testimonial-card">
                            <img src={client2} alt="" />
                            <div>
                                <h3>David Saden</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Unde hic maiores amet quo vitae corporis at impedit magnam
                                 exercitationem velit?</p>
                            </div>
                    </div>
                    <div className="testimonial-card">
                            <img src={client1} alt="" />
                            <div>
                                <h3>David Saden</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Unde hic maiores amet quo vitae corporis at impedit magnam
                                 exercitationem velit?</p>
                            </div>
                    </div>  
              </div>
        </div>
  )
}

export default Testimonial