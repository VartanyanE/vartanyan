import React, { useEffect, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import SimpleBottomNavigation from "../../components/BottomNav/BottomNav";

function Bio(props) {
  console.log(props);
  return (
    <>
      <div className="bio-wrapper">
        <div className="bio-cards">
          <div className="bio-cards2">
            <div className="skills">HTML CSS JAVASCRIPT</div>
          </div>
          <div className="bio-cards3"></div>
          <div className="bio-text">BIOGRAPHY</div>
          <div></div>
          <div></div>
        </div>
        <div className="bottomNav">
        <SimpleBottomNavigation /></div>
      </div>
    </>
  );
}

export default Bio;
