import React from 'react'
import './SearchBar.css'

const SearchBar = ({setSearchIcon ,setShowSearchBar}) => {


  return (
    <div className='searchbar'>
            <input type="text" placeholder='Search'/>
            <span 
             onClick={()=>{
              {setSearchIcon(false);
                setShowSearchBar(false);
            }}} ><i class="fa-solid fa-xmark"></i></span>
    </div>
  )
}

export default SearchBar