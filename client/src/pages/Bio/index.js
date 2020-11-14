import React, { useEffect, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function Bio(props) {
  const myGithub = () => window.open("https://github.com/VartanyanE", "_blank");
  const myLinkedin = () => {
    window.open(
      "https://www.linkedin.com/in/emanuil-vartanyan-064318193/",
      "_blank"
    );
  };
  console.log(props);
  return (
    <>
      <div className="bio-wrapper">
        <div className="bio-cards">
          <div className="bio-cards2">
            <span className="github" onClick={myGithub}></span>

            <div className="skills"></div>
            <span className="linkedin" onClick={myLinkedin}></span>
          </div>
          <div className="bio-cards3"></div>
          <div className="bio-text">
            I'M A FULL STACK WEB DEVELOPER. I SPECIALIZE IN CREATING BEAUTIFUL,
            MINIMALISTIC, RESPONSIVE WEB APPS.
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Bio;
