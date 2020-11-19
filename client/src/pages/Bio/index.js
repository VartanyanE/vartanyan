import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import "./style.scss";

function Bio(props) {
  useEffect(() => {
    setToggle(true);
  }, []);
  const [main, setMain] = useState(false);
  const [toggle, setToggle] = useState(false);
  const scale = useSpring({
    transform: main ? " scale(1.2) " : `scale(1)`,
  });
  const animate = useSpring({
    display: "inline-block",
    config: { duration: 950, tension: 400, mass: 5 },
    transform: toggle ? `translate3d(0,0,0) ` : `translate3d(-500px, -50px,0) `,
  });
  const animate1 = useSpring({
    display: "inline-block",
    config: { duration: 650, tension: 200, mass: 3 },
    transform: toggle ? `translate3d(0,0,0) ` : `translate3d(500px, 50px,0) `,
  });
  const animate2 = useSpring({
    display: "inline-block",
    config: { duration: 950, tension: 300, mass: 3 },
    transform: toggle
      ? `translate3d(0,0,0) `
      : `translate3d(-50px, -200px,-200px) `,
  });

  const animate3 = useSpring({
    display: "inline-block",
    config: { duration: 250, tension: 500, mass: 3 },
    transform: toggle
      ? `translate3d(0,0,0) `
      : `translate3d(-80px, -80px,-80px) `,
  });

  const animate4 = useSpring({
    display: "inline-block",
    config: { duration: 550, tension: 600, mass: 3 },
    transform: toggle
      ? `translate3d(0,0,0) `
      : `translate3d(-80px, -80px,-80px) `,
  });

  const animate5 = useSpring({
    display: "inline-block",
    config: { duration: 850, tension: 200, mass: 3 },
    transform: toggle ? `translate3d(0,0,0) ` : `translate3d(250px, 250px,0) `,
  });

  const animate6 = useSpring({
    display: "inline-block",
    config: { duration: 750, tension: 300, mass: 3 },
    transform: toggle ? `translate3d(0,0,0) ` : `translate3d(100px, 50px,0) `,
  });
  const animate7 = useSpring({
    display: "inline-block",
    config: { duration: 350, tension: 400, mass: 3 },
    transform: toggle ? `translate3d(0,0,0) ` : `translate3d(900px, -750px,0) `,
  });

  const animate8 = useSpring({
    display: "inline-block",
    config: { duration: 750, tension: 400, mass: 3 },
    transform: toggle ? `translate3d(0,0,0) ` : `translate3d(600px, -450px,0) `,
  });

  const animate9 = useSpring({
    display: "inline-block",
    config: { duration: 900, tension: 400, mass: 3 },
    transform: toggle
      ? `translate3d(0,0,0) `
      : `translate3d(100px, -450px, 100px) `,
  });

  const animate10 = useSpring({
    display: "inline-block",
    config: { duration: 1050, tension: 400, mass: 3 },
    transform: toggle
      ? `translate3d(0,0,0) `
      : `translate3d(-450px, -750px,0) `,
  });
  const animate11 = useSpring({
    display: "inline-block",
    config: { duration: 1050, tension: 400, mass: 3 },
    transform: toggle ? `translate3d(0,0,0) ` : `translate3d(1000%, 0,0) `,
  });

  const animate12 = useSpring({
    display: "inline-block",
    config: { duration: 1550, tension: 400, mass: 3 },
    transform: toggle ? `translate3d(0,0,0) ` : `translate3d(0, 1000%,0) `,
  });
  const animate13 = useSpring({
    display: "inline-block",
    config: { duration: 750, tension: 400, mass: 3 },
    transform: toggle ? `translate3d(0,0,0) ` : `translate3d(-100px, 500%,0) `,
  });
  const animate14 = useSpring({
    display: "inline-block",
    config: { duration: 1010, tension: 400, mass: 3 },
    transform: toggle ? `translate3d(0,0,0) ` : `translate3d(700px, 700px,0) `,
  });
  const animate15 = useSpring({
    display: "inline-block",
    config: { duration: 650, tension: 400, mass: 3 },
    transform: toggle ? `translate3d(0,0,0) ` : `translate3d(700px, -700px,0) `,
  });
  const animate16 = useSpring({
    display: "inline-block",
    config: { duration: 1250, tension: 400, mass: 3 },
    transform: toggle ? `translate3d(0,0,0) ` : `translate3d(0, -700px,0) `,
  });
  const animate17 = useSpring({
    display: "inline-block",
    config: { duration: 590, tension: 400, mass: 3 },
    transform: toggle ? `translate3d(0,0,0) ` : `translate3d(-80px, -80px,0) `,
  });
  const animate18 = useSpring({
    display: "inline-block",
    config: { duration: 450, tension: 400, mass: 3 },
    transform: toggle ? `translate3d(0,0,0) ` : `translate3d(700%, 1000%,0) `,
  });
  const animate19 = useSpring({
    display: "inline-block",
    config: { duration: 1950, tension: 400, mass: 3 },
    transform: toggle ? `translate3d(0,0,0) ` : `translate3d(1000%, 0,0) `,
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
          <animated.div style={animate}>JUST&nbsp;</animated.div>
          <animated.div style={animate1}>A&nbsp;</animated.div>
          <animated.div style={animate2}>SOFTWARE ENGINEER&nbsp;</animated.div>
          <animated.div style={animate3}>WHO&nbsp;</animated.div>
          <br className="break" />
          <animated.div style={animate4}>LOVES&nbsp;</animated.div>
          <animated.div style={animate5}>TO&nbsp;</animated.div>
          <animated.div style={animate6}>CODE.&nbsp;&nbsp;</animated.div>
          <animated.div style={animate7}>SKILLS&nbsp;</animated.div>
          <animated.div style={animate8}>I&nbsp;</animated.div>
          <animated.div style={animate9}>HAVE&nbsp;</animated.div>{" "}
          <br className="break" />
          <animated.div style={animate10}>MASTERED&nbsp;</animated.div>
          <animated.div style={animate11}>ARE&nbsp;&nbsp;</animated.div>
          <animated.div style={animate12} className="big-font">
            HTML,&nbsp;
          </animated.div>
          <animated.div style={animate13} className="big-font">
            CSS,&nbsp;
          </animated.div>
          <br className="break" />
          <animated.div style={animate14} className="big-font">
            JAVASCRIPT,&nbsp;
          </animated.div>
          <animated.div style={animate15} className="big-font">
            REACT,&nbsp;
          </animated.div>
          <animated.div style={animate16} className="big-font">
            NODE,&nbsp;
          </animated.div>
          <br className="break" />
          <animated.div style={animate17} className="big-font">
            EXPRESS,&nbsp;
          </animated.div>
          <animated.div style={animate18} className="big-font">
            MONGODB,&nbsp;
          </animated.div>
          <animated.div style={animate19} className="big-font">
            GIT.
          </animated.div>
        </animated.div>
      </div>
    </>
  );
}

export default Bio;
