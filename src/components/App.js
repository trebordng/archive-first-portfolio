import React from "react";
import Navigation from "./Navigation/Navigation";
import Home from "./Home/Home";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Professional from "./Professional/Professional";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Home" index element={<Home />} />
          <Route path="Professional" element={<Professional />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
