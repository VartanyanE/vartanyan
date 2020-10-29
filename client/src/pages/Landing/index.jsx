import React, { useEffect, useState } from "react";
import Contact from "../../components/Contact/index";
import "./style.css";

function Landing(props) {
  console.log(props);
  return (
    <>
      <div className="intro">
        HELLO.
        <br /> i AM EMANUIL VARTANYAN.
      </div>
      <div className="nav">SKILLS </div>
      <div className="nav1">WORKS</div>
      <div className="nav2">EMAIL</div>
      <div className="about">
        [FULL STACK DEVELOPER, <br /> WEB ARTIST, CODE MONKEY]
      </div>
    </>
  );
}

export default Landing;
