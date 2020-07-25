import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import bg from "../../images/background.jpg";
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import ImgMediaCard from "../components/Card";
// import Button from "@material-ui/core/Button";
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

function Landing() {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');
  //   const { imageCard } = useContext(ImageCardContext);

  return (
    <Router>
      <div className={matches ? classes.root : classes.root1}>
    <div className={classes.one}>

    <GridEffect />


    </div>

    <div className={classes.two}>

<p>Hello</p>


</div>

        {/* <Grid container spacing={2}> */}
          {/* <Grid item xs={12} sm={12} className={classes.card} > */}
            {/* <div className={classes.card}> */}
            {/* <GridEffect /></div> */}
          {/* </Grid>

          <Grid item xs={6} sm={0}></Grid> */}

          {/* <div >
            <Card />
          </div> */}
        {/* </Grid> */}
      </div>
    </Router>
  );
}

export default Landing;
