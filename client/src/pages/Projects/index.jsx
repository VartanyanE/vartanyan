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
        <div className="project-main"></div>
        <div className="project-main"></div>
        <div className="github" onClick={myGithub}></div>
      </div>
    </>
  );
}
export default withRouter(Projects);
