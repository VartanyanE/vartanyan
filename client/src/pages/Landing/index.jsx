import React, { useEffect, useState } from "react";
import Contact from "../../components/Contact/index";
import "./style.css";
import image from "../../photo.jpg";

function Landing(props) {
  console.log(props);
  return (
    <>
      <div className="wrapper">
        <div>
          <img src={image} />
        </div>
        <div className="main">
          <h1>
            hello.
            <br /> <br /> i am emanuil vartanyan.
          </h1>
          <div className="nested">
            <div className="info">
              <h1>web artist</h1>
            </div>

            <div className="info1">
              <h1>code magician</h1>
            </div>
            <div className="button-margin">
              <a href="#" className="btn">
                skills
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
