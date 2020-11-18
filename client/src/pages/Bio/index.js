import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import "./style.scss";

function Bio(props) {
  const [main, setMain] = useState(false);
  const scale = useSpring({
    transform: main ? " scale(1.2) " : `scale(1)`,
  });
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
        <div className="bio-heading">
          <h1>BIOGRAPHY</h1>
        </div>
        <animated.div
          className="bio-main"
          onMouseEnter={() => setMain(!main)}
          onMouseLeave={() => setMain(!main)}
          style={scale}
        >
          <div>JUST</div>
          <div>A</div>
          <div>SOFTWARE</div>
        </animated.div>
      </div>
    </>
  );
}

export default Bio;
