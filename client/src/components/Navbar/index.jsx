import React, { useState } from "react";
import "./style.css";
import { animated } from "react-spring";
import HomeIcon from '@material-ui/icons/Home';

const Navbar = ({ style }) => {
  return (
    <animated.div className="nav-wrapper" style={style}>
      
       <HomeIcon style={{color: "white"}}/>
    
    </animated.div>
  );
};

export default Navbar;
