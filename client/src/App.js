import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./pages/Landing";

function App() {
  useEffect(() => {}, []);

  return (
    <Router>
      <Route exact path="/" component={Landing}  />
      <Route exact path="/bio" component={Landing}  />
    </Router>
  );
}

export default App;
