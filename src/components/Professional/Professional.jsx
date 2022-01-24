import React from "react";
import Radium, { StyleRoot } from "radium";
import { fadeIn } from "react-animations";
import "./Professional.css";
import Navigation from "../Navigation/Navigation";
const styles = {
  fadeIn: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};
function Professional() {
  return (
    <StyleRoot>
      <div style={styles.fadeIn}>
        <div className="professional">
          <Navigation />
          <h1 className="professionalTitle">Professional</h1>
          <div className="professionalWrapper">
            <div>
              <div>
                <div className="skillContainer">
                  <div className="skillText">HTML</div>
                  <div className="skillWidth">
                    <div className="skills html"></div>
                    <div className="percentage">90%</div>
                  </div>
                </div>
                <div className="skillContainer">
                  <div className="skillText">CSS</div>
                  <div className="skillWidth">
                    <div className="skills css"></div>
                    <div className="percentage">70%</div>
                  </div>
                </div>
                <div className="skillContainer">
                  <div className="skillText">JavaScript</div>
                  <div className="skillWidth">
                    <div className="skills js"></div>
                    <div className="percentage">65%</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="skillContainer">
                  <div className="skillText">React</div>
                  <div className="skillWidth">
                    <div className="skills react "></div>
                    <div className="percentage">60%</div>
                  </div>
                </div>
                <div className="skillContainer">
                  <div className="skillText">Photoshop</div>
                  <div className="skillWidth">
                    <div className="skills pts"></div>
                    <div className="percentage">50%</div>
                  </div>
                </div>
                <div className="skillContainer">
                  <div className="skillText">MySQL</div>
                  <div className="skillWidth">
                    <div className="skills sql"></div>
                    <div className="percentage">60%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyleRoot>
  );
}

export default Professional;
