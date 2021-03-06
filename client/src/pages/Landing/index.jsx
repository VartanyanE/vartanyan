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
  const [scaler, setScale] = useState(false);
  console.log(props);
  const animate = useSpring({
    config: { duration: 950, tension: 400, mass: 5 },
    transform: toggle ? `translate3d(0,0,0) ` : `translate3d(100%, 100%,0) `,
  });

  const image = useSpring({
    transform: scaler ? `scale(2)` : `scale(1)`,
    config: {
      duration: 2000,
      tension: 400,
      mass: 5,
    },
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 900,
  });

  const tog = useSpring({});
  return (
    <>
      <div className="wrapper">
        {/* <div className="image">
          <img src={image} />{" "}
        </div> */}

        <animated.div className="main" style={animate}>
          <h1 style={{ textAlign: "center" }}>EMANUIL VARTANYAN</h1>
        </animated.div>

        <animated.div style={tog} className="info">
          <h1>web artist</h1>
        </animated.div>
        <animated.div
          style={image}
          className="image"
          onMouseEnter={() => setScale(!scaler)}
        ></animated.div>

        <div className="info1">
          <h1>code connoisseur</h1>
        </div>
      </div>
    </>
  );
}
export default withRouter(Landing);
