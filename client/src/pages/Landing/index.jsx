import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import bg from "../../images/background.jpg";
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import ImgMediaCard from "../components/Card";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router } from "react-router-dom";
// import About from "../pages/About";
// import Icon from "@material-ui/core/Icon";
// import SaveIcon from "@material-ui/icons/Save";
// import Box from "@material-ui/core/Box";
// import CardComp from "../../components/Card";
// import ImageCardContext from "../../utils/ImageCardContext";
import "./style.css";
import { useTransition, animated, useSpring, config } from "react-spring";
import Card from "../../components/Card/index";
import FlipCard from "../../components/FlipCard/index";
import FlipCardTwo from "../../components/FlipCard2/index";
import { CssBaseline, Tooltip } from "@material-ui/core";
import GridEffect from "../../components/GridEffect/index";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from "@material-ui/icons/Menu";
import Navbar from "../../components/Navbar/index";
import ComputerRoundedIcon from "@material-ui/icons/ComputerRounded";
import MediaCard from "../../components/Card/index";
import Card3d from "../../components/Card3d/index";
import Card3dPlanthood from "../../components/Card/index";
import { Waypoint } from "react-waypoint";
import SimpleCard from "../../components/Card";
import Contact from "../../components/Contact/index";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";
import IconButton from "@material-ui/core/IconButton";
import AboutCard from "../../components/About/index";
import DeckIcon from "@material-ui/icons/Deck";
import Card1 from "../../components/Card1/index";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "10px",
    gridAutoRows: "min-content",
    margin: 0,
    padding: 0,
    height: "1200px",
    width: "100%",
    position: "relative",
  },

  font: {
    fontSize: 50,
    color: "white",
    fontFamily: " Red Rose, Arial",
  },

  root1: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "10px",
    gridAutoRows: "min-content",
    margin: 0,
    padding: 0,

    width: "100%",
    position: "relative",
  },

  one: {
    gridColumn: "1",
    gridRow: "1",
  },

  two: {
    gridColumn: "2",
    gridRow: "1",
  },

  container: {
    marginBottom: 0,
    overflow: "show",
  },

  card: {
    display: "flex",
    // maxWidth: 345,
    marginTop: "100px",
  },

  card1: {
    display: "flex",
    // maxWidth: 345,
    marginTop: 180,
  },
  media: {
    height: 140,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  height: {
    marginTop: "50px",
  },

  buttonCenter: {
    display: "flex",
    justifyContent: "center",
    height: "200px",
    alignItems: "center",
  },

  buttonStyle: {
    color: theme.palette.success.light,
  },
}));

const ToggleMenu = () => {
  // useEffect(() => {
  //   setToggle(!isToggled);
  // }, []);

  const [isToggled, setToggle] = useState(false);
  const fade = useSpring({
    transform: isToggled
      ? `translate3d(0,0,0) scale(1)`
      : `translate3d(0,-300%,0) scale(-0.5) `,
  });

  return (
    <animated.div style={fade}>
      <MenuIcon />
    </animated.div>
  );
};

function Landing(props) {
  console.log(props);
  const classes = useStyles();
  const [isNavOpen, setNavOpen] = useState(false);
  const [isAboutOpen, setAboutOpen] = useState(false);
  const [on, toggle] = useState(false);
  const animation = useSpring({
    opacity: on ? 1 : 0,
    transform: on ? `tranlate3d(0,0,0)` : `translate3d(-1000%, 0,0)`,
    config: config.slow,
  });

  const animation1 = useSpring({
    opacity: on ? 1 : 0,
    transform: on ? `tranlate3d(0,0,0)` : `translate3d(1000%, 0,0)`,
    config: config.slow,
  });

  const navAnimation = useSpring({
    transform: isNavOpen
      ? `tranlate3d(0,0,0) scale(1)`
      : `translate3d(100%,0,0) scale(0.6)`,
  });
  const aboutAnimation = useSpring({
    transform: isAboutOpen ? `tranlate3d(0,0,0)` : `translate3d(-500px,0,0)`,
  });

  const fade = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
  });

  return (
    <div className="container">
      <Navbar style={navAnimation} />

      <div className="pimg1">
        {" "}
        <div className="aboutIcon">
          <Tooltip title="Info" placement="right">
            <IconButton href="#projects" aria-label="Home" aria-haspopup="true">
              <AccountBoxRoundedIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className="homeIcon">
          <Tooltip title="Home" placement="right">
            <IconButton href="#homeIcon">
              <DeckIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className="heading" id="homeIcon">
          <h3 className="cd-headline clip is-full-width">
            <span className="cd-words-wrapper">
              <b className="is-visible"></b>
              <b className="effect-font">hello</b>
              <b className="effect-font">i am emanuil vartanyan</b>
              <b className="effect-font">i am a full stack engineer</b>
              <b className="effect-font">i specialize in the mern stack</b>
              <b className="effect-font">react developer</b>
            </span>
          </h3>
          <AboutCard style={aboutAnimation} />
        </div>
        <span className="textbox">
          {" "}
          <GridEffect />
        </span>
      </div>

      <section className="section section-light projects" id="projects">
        <div className="item1">
          <Waypoint onEnter={() => toggle(true)} />

          <animated.div style={animation}>
            <Card3dPlanthood />
          </animated.div>
        </div>
      </section>
      <section className="section section-light info" id="projects">
        <div className="item1">
          <Waypoint onEnter={() => toggle(true)} />

          <animated.div style={animation1}>
            <Card3d />
          </animated.div>
        </div>
      </section>
      <section className="section section-light projects" id="info">
        <div className="item1">
          <Waypoint onEnter={() => toggle(true)} />

          <animated.div style={animation1}> </animated.div>
        </div>
      </section>

      <div className="pimg2">
        <div className="aboutIcon">
          <Tooltip title="Info" placement="right">
            <IconButton href="#projects" aria-label="Home" aria-haspopup="true">
              <AccountBoxRoundedIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className="homeIcon">
          <Tooltip title="Home" placement="right">
            <IconButton href="#homeIcon">
              <DeckIcon />
            </IconButton>
          </Tooltip>
        </div>
        <span className="textbox">
          <Contact />
        </span>
      </div>
    </div>
  );
}

export default Landing;
