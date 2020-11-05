import React, { useEffect, useState } from "react";
import Contact from "../../components/Contact/index";
import "./style.css";
import image from "../../photo.jpg";
import { Link} from "react-router-dom"

function Landing(props) {
  console.log(props);
  return (
    <>
      <div className="wrapper">
        {/* <div className="image">
          <img src={image} />{" "}
        </div> */}
        <div className="main">
          <h1 style={{textAlign:"center"}}>i am emanuil vartanyan</h1>
          <div className="image">
            <img src={image} style={{border: "15px solid white"}} />
          <div className="nested">
            <div className="info">
              <h1>web artist</h1>
            </div>

            <div className="info1">
              <h1>code magician</h1>
            </div>
          </div></div>
          <div className="nested-again">
            <div class="share-button">
              <span>HOVER </span>
              <Link to ="bio">
              <a href="#">
                <button className="button-style">BIO</button>
              </a></Link>
              <a href="#">
                <button className="button-style">PROJECTS</button>{" "}
              </a>
              <a href="#">
                <button className="button-style">CONTACT</button>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
   
    </>
  );
}

export default Landing;
