import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import "./style.scss";

function Bio(props) {
  useEffect(() => {
    setToggle(true);
  }, []);
  const [main, setMain] = useState(false);
  const [toggle, setToggle] =useState(false);
  const scale = useSpring({
    transform: main ? " scale(1.2) " : `scale(1)`,
  });
  const animate = useSpring({
    config: { duration: 950, tension: 400, mass: 5 },
    transform: toggle ? `translate3d(0,0,0) ` : `translate3d(100%, 0,0) `,
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
          <animated.div style={animate} style={{display: "inline",}}>JUST&nbsp;</animated.div>
          <div   style={{display: "inline",}}>A&nbsp;</div>
          <div   style={{display: "inline",}}>SOFTWARE ENGINEER&nbsp;</div>
          <div   style={{display: "inline",}}>WHO&nbsp;</div><br/>
          <div   style={{display: "inline",}}>LOVES&nbsp;</div>
          <div   style={{display: "inline",}}>TO&nbsp;</div>
          <div   style={{display: "inline",}}>CODE.&nbsp;&nbsp;</div>
          <div   style={{display: "inline",}}>SKILLS&nbsp;</div>
          <div   style={{display: "inline",}}>I&nbsp;</div>
          <div   style={{display: "inline",}}>HAVE&nbsp;</div> <br/>
          <div   style={{display: "inline",}}>MASTERED&nbsp;</div>
          <div   style={{display: "inline",}}>ARE&nbsp;&nbsp;</div>
          <div   style={{display: "inline", fontSize: "28px"}}>HTML,&nbsp;</div>
          <div   style={{display: "inline", fontSize: "28px"}}>CSS,&nbsp;</div><br/>
          <div   style={{display: "inline", fontSize: "28px"}}>JAVASCRIPT,&nbsp;</div>
          <div   style={{display: "inline", fontSize: "28px"}}>REACT,&nbsp;</div>
          <div   style={{display: "inline", fontSize: "28px"}}>NODE,&nbsp;</div><br/>
          <div   style={{display: "inline", fontSize: "28px"}}>EXPRESS,&nbsp;</div>
          <div   style={{display: "inline", fontSize: "28px"}}>MONGODB,&nbsp;</div>
          <div   style={{display: "inline", fontSize: "28px"}}>GIT.</div>
        </animated.div>
      </div>
    </>
  );
}

export default Bio;
