import React, { useEffect, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function Bio(props) {
  console.log(props);
  return (
    <>
      <div className="bio-wrapper">
        <div className="bio-cards">
          <div className="bio-cards2"></div>
          <div className="bio-cards3"></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Bio;
