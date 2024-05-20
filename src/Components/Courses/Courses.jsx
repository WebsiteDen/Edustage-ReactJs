import React from 'react'
import './Courses.css'
import course1 from '../../assets/c1.png'
import course2 from '../../assets/c2.png'
import course3 from '../../assets/c3.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'

const Courses = () => {
  return (
    <div className='courses'>
          <h2>Our Popular Courses</h2>
          <p>Explore about life-changing popular courses below</p>
          <div className="courses-card">
              <div className="c-card">
                  <img src={course3} alt="" />
                  <span className='price'>$25</span>
                <div className="user-col">
                    <button className='btn course-btn'>DESIGN</button>
                     <h3>Computer Engineering</h3>
                     <p>One make creepeth, man bearing their one firmament won't great heaven</p>
                    <div className="user-div">
                        <div className="user">
                              <img src={user1} alt="" />
                              <h5>Cameron</h5>
                          </div>
                            <div className='user-about'>
                              <span><i className='fa-solid fa-heart'></i></span>
                              <span>25</span>
                            </div>
                            <div className='user-about'>
                              <span><i className='fa-solid fa-user'></i></span>
                              <span>35</span>
                            </div>
                    </div>
                </div>
              </div>
              <div className="c-card">
                  <img src={course1} alt="" />
                  <span className='price'>$25</span>
                <div className="user-col">
                    <button className='btn course-btn'>DESIGN</button>
                     <h3>Custom Product Design</h3>
                     <p>One make creepeth, man bearing their one firmament won't great heaven</p>
                    <div className="user-div">
                        <div className="user">
                              <img src={user2} alt="" />
                              <h5>Cameron</h5>
                          </div>
                            <div>
                              <span><i className='fa-solid fa-heart'></i></span>
                              <span>25</span>
                            </div>
                            <div>
                              <span><i className='fa-solid fa-user'></i></span>
                              <span>35</span>
                            </div>
                    </div>
                </div>
              </div>
              <div className="c-card">
                  <img src={course2} alt="" />
                  <span className='price'>$25</span>
                <div className="user-col">
                    <button className='btn course-btn'>DESIGN</button>
                     <h3>Social Media Network</h3>
                     <p>One make creepeth, man bearing their one firmament won't great heaven</p>
                    <div className="user-div">
                        <div className="user">
                              <img src={user3} alt="" />
                              <h5>Cameron</h5>
                          </div>
                            <div>
                              <span><i className='fa-solid fa-heart'></i></span>
                              <span>25</span>
                            </div>
                            <div>
                              <span><i className='fa-solid fa-user'></i></span>
                              <span>35</span>
                            </div>
                    </div>
                </div>
              </div>
          </div>
    </div>
  )
}

export default Courses