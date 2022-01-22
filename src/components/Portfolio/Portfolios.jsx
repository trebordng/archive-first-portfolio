import React from "react";
import { Link, Outlet } from "react-router-dom";
import { getPortfolios } from "./PortfolioData";
import "./Portfolios.css";
import Radium, { StyleRoot } from "radium";
import { fadeIn } from "react-animations";
import { Row, Col } from "react-bootstrap";
const styles = {
  fadeIn: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};
function Portfolios() {
  let portfolios = getPortfolios();
  return (
    <StyleRoot>
      <div style={styles.fadeIn}>
        <div className="portfolios">
          <img className="portfoliosImg" />
          <h1 className="portfoliosTitle">Portfolio</h1>

          <div class="container ">
            <div class="row">
              <div class="col-lg-2 col-sm-12">
                {portfolios.map((portfolio) => (
                  <Link
                    style={{ display: "block", margin: "1rem 0" }}
                    to={`/Portfolios/${portfolio.id}`}
                    key={portfolio.id}
                  >
                    <div className="porfolioListText">{portfolio.name}</div>
                  </Link>
                ))}
              </div>
              <div class="col-lg-10 col-sm-12 portfolio">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyleRoot>
  );
}

export default Portfolios;
