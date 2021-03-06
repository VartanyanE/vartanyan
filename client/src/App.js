import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SimpleBottomNavigation from "./components/BottomNav/BottomNav";

import Landing from "./pages/Landing";
import Bio from "./pages/Bio";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact/index";
function App() {
  useEffect(() => {}, []);

  return (
    <Router>
      <SimpleBottomNavigation />
      <Route exact path="/" component={Landing} />
      <Route exact path="/bio" component={Bio} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
