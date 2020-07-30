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
import { useTransition, animated, useSpring } from "react-spring";
import Card from "../../components/Card/index";
import FlipCard from "../../components/FlipCard/index";
import FlipCardTwo from "../../components/FlipCard2/index";
import { CssBaseline } from "@material-ui/core";
import GridEffect from "../../components/GridEffect/index";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuIcon from "@material-ui/icons/Menu";
import Navbar from "../../components/Navbar/index"


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
    position: "relative"
    
  },

  font: {
    fontSize: 20,
    color: "white",
  },

  root1: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "10px",
    gridAutoRows: "min-content",
    margin: 0,
    padding: 0,
 
    width: "100%",
    position: "relative"
    
  },

  one : {
    gridColumn: "1",
    gridRow: "1"

  },

  two : {
    gridColumn: "2",
    gridRow: "1"

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

function Landing() {
  const classes = useStyles();
  const [isNavOpen, setNavOpen] = useState(false);
  const navAnimation = useSpring({
    transform: isNavOpen ? `tranlate3d(0,0,0) scale(1)` : `translate3d(100%,0,0) scale(0.6)`
  })
  const fade = useSpring ({

    from : {
      opacity:0
    },
    opacity:1
  });
  
  //   const { imageCard } = useContext(ImageCardContext);

  return (
   
    <div className="container">
  
    <div className="pimg1">
    
        <div className="ptext">
        { isNavOpen ? <Navbar style={navAnimation} /> : " "}
          <span className="menubox">
          <button onClick={() => setNavOpen(!isNavOpen)} className="menu-button">Menu </button>
          
          </span>
          <span className="textbox">
          <div className="heading">
                <h3 className="cd-headline clip is-full-width">
                  <span className="cd-words-wrapper">
                    <b className="is-visible"></b>
                    <b className={classes.font}>HTML</b>
                    <b className={classes.font}>CSS</b>
                    <b className={classes.font}>JAVASCRIPT</b>
                    <b className={classes.font}>NODE</b>
                    <b className={classes.font}>EXPRESS</b>
                    <b className={classes.font}>MYSQL</b>
                    <b className={classes.font}>MONGODB</b>
                    <b className={classes.font}>REACT</b>
                    <b className={classes.font}>GIT</b>
                  </span>
                </h3>
              </div>
</span>

        </div>


    </div>

    <section className="section section-light">
      <h2>Section One</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas veritatis ad corrupti nihil cupiditate minima nobis aliquam dignissimos a atque eveniet quia, officia ipsum ipsa saepe ex voluptatibus rem in culpa vitae quisquam rerum. Quaerat labore consequuntur ea magni debitis. Accusantium tempore architecto nostrum commodi mollitia nisi doloremque animi autem consequatur vitae rem illo ullam totam iusto facere quo inventore natus nesciunt veniam, hic repellendus earum saepe. Animi blanditiis dolores a reprehenderit aliquid error iure eum optio voluptatum at consequatur magnam, minus odit in beatae! Rem ad pariatur qui quaerat ea incidunt maxime enim excepturi laboriosam? Beatae quis itaque sint!</p>
    </section>

    <div className="pimg2">
        <div className="ptext">
          <span className="textbox">

              Image Two Text
          </span>

        </div>


    </div>

    <section className="section section-dark">
     <FlipCard />
    </section>

    <div className="pimg3">
        <div className="ptext">
          <span className="textbox">

              Image Three Text
          </span>

        </div>


    </div>

    <section className="section section-dark">
      <h2>Section THree</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, eum! Id, eius eveniet! Magnam veritatis maxime nostrum voluptates saepe sapiente optio debitis ex! Animi ad ducimus officia quasi recusandae, libero debitis placeat quia voluptates ea hic doloremque eligendi accusamus cum quas ullam eius? Itaque cumque minima assumenda eos ipsam nesciunt?</p>
    </section>

    <div className="pimg1">
        <div className="ptext">
          <span className="border">

              Parallex Website
          </span>

        </div>

</div></div>
 

  );
}

export default Landing;
