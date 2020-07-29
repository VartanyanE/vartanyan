import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useSpring, animated } from "react-spring";


import Container from "@material-ui/core/Container";
import Landing from "./pages/Landing";
// import About from "./pages/About";
import { ThemeProvider, Paper, CssBaseline } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core";
import ModeContext from "./utils/ModeContext";
// import { createGlobalStyle } from "styled-components"

import PersistentDrawerRight from "./components/Navbar/index";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const props = useSpring({
    opacity: 1,
    duration: 0,
    from: { opacity: -2, duration: 10000 },
  });

  useEffect(() => {}, []);

  const theme = createMuiTheme({
    typography: {
      fontFamily: " Red Rose, Arial",
    },

    palette: {
      primary: {
        main: "#878a87",
        text: "#81c784",
      },
      secondary: {
        main: "#0E1649",
        text: "#81c784",
      },
      success: {
        main: "#bcbda4",
      },
    },
  });

//   const GlobalStyle = createGlobalStyle`
//   body {
//     margin: 0;
//     padding: 0;
//   }
// `


  return (
    <Router>
      
      {/* <Switch> */}
      <ModeContext.Provider value={{ darkMode, setDarkMode }}>
        <ThemeProvider theme={theme}>
         
          {/* <Paper> */}
         <>
          
              
           
              <Landing />
           
          </>
          {/* </Paper> */}
        
        </ThemeProvider>
      </ModeContext.Provider>
      {/* </Switch> */}
    </Router>
  );
}

export default App;
