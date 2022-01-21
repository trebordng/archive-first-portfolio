import React, { useState } from "react";
import "./Home.css";
import Popup from "./Popup";
var isClicked = true;

function Home() {
  const [buttonPopup, setButtonPopup] = useState(false);
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
            <button className="moreButton" onClick={() => setButtonPopup(true)}>
              <span>More</span>
            </button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <div className="popupText">
                <h1>Robert (Nguyen) Tran </h1>
                <p>
                  A post-graduate IT developer with a bachelor certification in
                  Information Technology from QUT. Skillful in HTML, CSS,
                  JavaScript, React,managing and maintaining data server.
                </p>
              </div>
            </Popup>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
