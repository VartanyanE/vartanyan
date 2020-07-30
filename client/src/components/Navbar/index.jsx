import React, {useState} from 'react'
import "./style.css"
import {animated} from 'react-spring'

 const Navbar = ( {style}) => {
  return (
    <animated.div className="nav-wrapper" style={style}>
      <nav>
        <a href="#">Home</a>
        <a href="#">Contact</a>
        <a href="#">Projects</a>
      </nav>
      
    </animated.div>
  )
}

export default Navbar;
