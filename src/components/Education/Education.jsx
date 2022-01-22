import React from "react";
import Radium, { StyleRoot } from "radium";
import { fadeIn } from "react-animations";
import "./Education.css";
import { Row, Col } from "react-bootstrap";
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
          <img />
          <h1 className="educationTitle">Education</h1>
          <div class="row">
            <div class="col-lg-6 col-sm-12">.col-6 .col-sm-4</div>
            <div class="col-lg-6 col-sm-12">.col-6 .col-sm-4</div>
          </div>
        </div>
      </div>
    </StyleRoot>
  );
}

export default Education;
