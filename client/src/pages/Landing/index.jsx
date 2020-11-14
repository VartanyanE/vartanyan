import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

import "./style.scss";

import { Link } from "react-router-dom";

import { withRouter } from "react-router-dom";

function Landing(props) {
  useEffect(() => {
    setToggle(true);
  }, []);

  const [toggle, setToggle] = useState(false);
  console.log(props);
  const animate = useSpring({
    transform: toggle ? `translate3d(0,0,0) ` : `translate3d(100%, 0,0) `,
  });

  const tog = useSpring({});
  return (
    <>
      <div className="wrapper">
        {/* <div className="image">
          <img src={image} />{" "}
        </div> */}

        <animated.div className="main" style={animate}>
          <h1 style={{ textAlign: "center" }}>i am emanuil vartanyan</h1>
        </animated.div>

        <animated.div
          style={tog}
          className="info"
          onClick={() => setToggle(!toggle)}
        >
          <h1>web artist</h1>
        </animated.div>
        <div className="image"></div>

        <div className="info1">
          <h1>code magician</h1>
        </div>
      </div>
    </>
  );
}

export default withRouter(Landing);
