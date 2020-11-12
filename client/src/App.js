import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";


import Landing from "./pages/Landing";
import Bio from "./pages/Bio";

function App() {
  useEffect(() => {}, []);

  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Route exact path="/bio" component={Bio} />
   
    </Router>
  );
}

export default App;
