import React from "react";
import Radium, { StyleRoot } from "radium";
import { fadeIn } from "react-animations";
import "./Education.css";
import Navigation from "../Navigation/Navigation";
const styles = {
  fadeIn: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};
function Education() {
  return (
    <StyleRoot>
      <div style={styles.fadeIn}>
        <div className="education">
          <Navigation />
          <h1 className="educationTitle">Education</h1>
          <div className="educationWrapper">
            <div className="row rowEducation">
              <div className="col-lg-4 col-sm-12 firstEducation">
                <h3 className="yearStudy">2016-2019</h3>
                <h3 className="schoolStudy">
                  QUT<br></br>University
                </h3>
                <p className="programStudy">
                  BACHERLOR OF INFORMATION TECHNOLOGY
                </p>
              </div>
              <div className="col-lg-4 col-sm-12 secondEducation">
                <h3 className="yearStudy">2020-2021</h3>
                <h3 className="schoolStudy">
                  NAVITAS<br></br>PROFESSIONAL<br></br>YEAR
                </h3>
                <p className="programStudy">PROFESSIONAL YEAR PROGRAM</p>
              </div>
              <div className="col-lg-4 col-sm-12 finalEducation">
                <h3 className="yearStudy">2021-TO DATE</h3>
                <h3 className="schoolStudy">
                  TO BE<br></br>CONTINUED
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyleRoot>
  );
}

export default Education;
