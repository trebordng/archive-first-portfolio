import React from "react";
import Navigation from "./Navigation/Navigation";
import Home from "./Home/Home";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Professional from "./Professional/Professional";
import Portfolios from "./Portfolio/Portfolios";
import Portfolio from "./Portfolio/Portfolio";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Blogs from "./Blog/Blogs";
import Blog from "./Blog/Blog";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" index element={<Home />} />
        <Route path="Professional" element={<Professional />} />
        <Route path="Portfolios" element={<Portfolios />}>
          <Route path=":portfolioId" element={<Portfolio />} />
        </Route>
        <Route path="Education" element={<Education />} />
        <Route path="Experience" element={<Experience />} />
        <Route path="Blogs" element={<Blogs />}>
          <Route path=":blogId" element={<Blog/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
