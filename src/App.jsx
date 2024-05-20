import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Features from './Components/Features/Features'
import Courses from './Components/Courses/Courses'
import RegCourse from './Components/RegCourse/RegCourse'
import Testimonial from './Components/Testimonial/Testimonial'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import SearchBar from './Components/SearchBar/SearchBar'


const App = () => {

 const [searchIcon, setSearchIcon] = useState(false);
 
 const [showSearchBar, setShowSearchBar] = useState(false);


  return (
    <div>
      {searchIcon?<SearchBar setSearchIcon={setSearchIcon} setShowSearchBar={setShowSearchBar}/>:<></>}
       <Navbar setSearchIcon={setSearchIcon} setShowSearchBar={setShowSearchBar} showSearchBar={showSearchBar} />
       <Hero/>
       <div className="container">
          <Features/>
          <Courses/>
       </div>
       <RegCourse/>
       <div className="container">
        <Testimonial/>
        <About/>
        <Contact/>
       </div>
       <Footer/>
    </div>

  )
}

export default App