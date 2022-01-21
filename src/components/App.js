import React from "react";
import Navigation from "./Navigation/Navigation";
import Home from "./Home/Home";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Professional from "./Professional/Professional";

function App() {
  
  return (
    <Router>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" index element={<Home />} />
        <Route path="Professional" element={<Professional />} />
      </Routes>
    </Router>
  );
}

export default App;
