import React from "react";
import Radium, { StyleRoot } from "radium";
import { fadeIn } from "react-animations";
import "./Experience.css";
import { Row, Col } from "react-bootstrap";
const styles = {
  fadeIn: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};
function Experience() {
  return (
    <StyleRoot>
      <div style={styles.fadeIn}>
        <div className="experience">
          <h1 className="experienceTitle">Experience</h1>
          <div className="row rowExperience">
            <div className="col-lg-3 col-sm-12 firstExperience">
              <h3 className="yearWork">2018-2019</h3>
              <h3 className="companyWork">
                DA NANG<br></br>ZEROWASTE ALLIANCE
              </h3>
              <p className="whatWork">
                DESIGN BANNER, SIGNATURE BIN
              </p>
            </div>
            <div className="col-lg-3 col-sm-12 secondExperience">
              <h3 className="yearWork">2020-2021</h3>
              <h3 className="companyWork">
                CENTRA<br></br>NETWORK
              </h3>
              <p className="whatWork">IMPLEMENT SERVICE TICKET TEMPLATE, DESIGN BANNER, CATALOGUE</p>
            </div>
            <div className="col-lg-3 col-sm-12 thirdExperience">
              <h3 className="yearWork">2021-2021</h3>
              <h3 className="companyWork">
                DIEP<br></br>TRAN COMPANY
              </h3>
              <p className="whatWork">
                MAKE, DESIGN WEBSITE
              </p>
            </div>
            <div className="col-lg-3 col-sm-12 finalExperience">
              <h3 className="yearStudy">2021-TO DATE</h3>
              <h3 className="schoolStudy">
                TO BE<br></br>CONTINUED
              </h3>
            </div>
          </div>
        </div>
      </div>
    </StyleRoot>
  );
}

export default Experience;
