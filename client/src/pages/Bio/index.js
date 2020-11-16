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
       <div className="bio-heading"><h1>BIOGRAPHY</h1></div>
      </div>
    </>
  );
}

export default Bio;
