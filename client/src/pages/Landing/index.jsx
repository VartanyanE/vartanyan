import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import bg from '../../images/background.jpg'
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
import {useTransition, animated, useSpring} from 'react-spring'
import Card from "../../components/Card/index"
import FlipCard from "../../components/FlipCard/index"
import FlipCardTwo from "../../components/FlipCard2/index"
import { CssBaseline } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
  
    
  },

  card: {
    display: "flex",
    // maxWidth: 345,
    marginTop : 250,
    
  },
  media: {
    height: 240,
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
//   const { imageCard } = useContext(ImageCardContext);

  return (
    <Router>
      <div className={classes.root}>
          
        <Grid container spacing={2} >
          <Grid item xs={12} sm={6}>  <FlipCard /></Grid>
          <Grid item xs={0} sm={6}>
            <FlipCardTwo />
          </Grid>
         

          
          
         </Grid>
         <div className={classes.card}>
         <Card />
       </div>
      </div>
    </Router>
  );
}

export default Landing;
