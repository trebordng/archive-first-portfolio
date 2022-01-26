import React from "react";
import { Link, Outlet } from "react-router-dom";
import { getPortfolios } from "./PortfolioData";
import "./Portfolios.css";
import Radium, { StyleRoot } from "radium";
import { fadeIn } from "react-animations";
import Navigation from "../Navigation/Navigation";
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
          <Navigation />

          <div className="portfolioWrapper">
            <div className="portfoliosTitle">Portfolio</div>

            <div className="container ">
              <div className="row">
                <div className="separateLine col-lg-2 col-sm-12">
                  {portfolios.map((portfolio) => (
                    <Link to={`/Portfolios/${portfolio.id}`} key={portfolio.id}>
                      <div className="portfolioListText">
                        <p>{portfolio.name}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="col-lg-10 col-sm-12 portfolio">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyleRoot>
  );
}

export default Portfolios;
