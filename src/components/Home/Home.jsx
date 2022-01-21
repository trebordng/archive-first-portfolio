import React from "react";
import "./Home.css";

var isClicked = true;

function Home() {
  return (
    <div className="home">
      <img />
      <div className="introduction">
        <h1 className="introductionText">
          I<span className="dot">'</span>m
        </h1>
        <h1 className="introductionText">Robert Tran</h1>
        <br></br>
        <div className="buttonText">
          <div>
            <h1 className="introductionSubText">UX/UI Designer & Web</h1>
            <h1 className="introductionSubText">Developer</h1>|
          </div>
          <div>
            <button className="moreButton"><span>More</span></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
