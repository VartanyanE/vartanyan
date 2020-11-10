import React, { useEffect, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function Bio(props) {
  console.log(props);
  return (
    <>
      <div className="bio-wrapper">
        <div className="card"></div>
      </div>
    </>
  );
}

export default Bio;
