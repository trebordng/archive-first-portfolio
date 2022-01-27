import React from "react";
import Home from "./Home/Home";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Portfolios from "./Portfolio/Portfolios";
import Portfolio from "./Portfolio/Portfolio";
import Blogs from "./Blog/Blogs";
import Blog from "./Blog/Blog";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" index element={<Home />} />
        <Route path="/Portfolios" element={<Portfolios />}>
          <Route path=":portfolioId" element={<Portfolio />} />
        </Route>
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Blogs/:blogId" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
