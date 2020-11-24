import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

import "./styles.scss";

import { withRouter } from "react-router-dom";

function Projects(props) {
  useEffect(() => {}, []);

  const myGithub = () => window.open("https://github.com/VartanyanE", "_blank");

  return (
    <>
      <div className="projects-wrapper">
        <div className="project-heading">
          <h1>PROJECTS</h1>
        </div>
        <div className="project-main">
          <div className="planthood" onClick={()=> window.open("http://planthood.herokuapp.com/", "_blank")}><h3>PLANTHOOD</h3> <br/> </div>
        </div>
        <div className="project-main">  <div className="palmbuddy" onClick={()=> window.open("http://palmbuddy.herokuapp.com/", "_blank")}><h3 style={{opacity:0}}>--------------------</h3> <br/> </div></div>
        <div className="github" onClick={ () => window.open("https://github.com/VartanyanE", "_blank")}></div>
      </div>
    </>
  );
}
export default withRouter(Projects);
