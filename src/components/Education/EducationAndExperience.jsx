import React from "react";
import Radium, { StyleRoot } from "radium";
import { fadeIn } from "react-animations";
import "./EducationAndExperience.css";
const styles = {
  fadeIn: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};
function EducationAndExperience() {
  return (
    <StyleRoot>
      <div style={styles.fadeIn}>
        <div className="education">
          <h1 className="educationTitle">Education & Experience</h1>
          <div className="educationAndExperienceWrapper row">
            <div className="col-lg-6">
              <div className="eEText">
                <h3 className="year">2016-2019</h3>
                <h3 className="school">
                  QUT<br></br>University
                </h3>
                <p className="program">
                  BACHERLOR OF INFORMATION TECHNOLOGY
                </p>
              </div>
              <div className="eEText">
                <h3 className="year">2020-2021</h3>
                <h3 className="school">
                  NAVITAS<br></br>PROFESSIONAL<br></br>YEAR
                </h3>
                <p className="program">PROFESSIONAL YEAR PROGRAM</p>
              </div>
            </div>
            <div className="experienceWrapper col-lg-6">
              <div className="eEText">
                <h3 className="year">2018-2019</h3>
                <h3 className="school">
                  DA NANG<br></br>ZEROWASTE ALLIANCE
                </h3>
                <p className="program">DESIGN BANNER, SIGNATURE BIN</p>
              </div>
              <div className="eEText">
                <h3 className="year">2020-2021</h3>
                <h3 className="school">
                  CENTRA<br></br>NETWORK
                </h3>
                <p className="program">
                  IMPLEMENT SERVICE TICKET TEMPLATE, DESIGN BANNER, CATALOGUE
                </p>
              </div>
              <div className="eEText">
                <h3 className="year">2021-2021</h3>
                <h3 className="school">
                  DIEP<br></br>TRAN COMPANY
                </h3>
                <p className="program">MAKE, DESIGN WEBSITE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyleRoot>
  );
}

export default EducationAndExperience;
