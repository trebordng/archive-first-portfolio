import React from "react";
import { useParams } from "react-router-dom";
import { getPortfolio } from "./PortfolioData";
import Radium, { StyleRoot } from "radium";
import { fadeIn } from "react-animations";
import "./Portfolios.css";
import { Carousel } from "react-bootstrap";

const styles = {
  fadeIn: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};
function Portfolio() {
  let params = useParams();
  let portfolio = getPortfolio(parseInt(params.portfolioId, 10));
  return (
    <>
      <StyleRoot>
        <div style={styles.fadeIn}>
          <div className="container containerStyle">
            <div className="row">
              <div className="col-lg-6">
                <h2>{portfolio.name}</h2>
                <div className="portfolioContentText">
                  <p>{portfolio.company}</p>

                  <p>{portfolio.time}</p>
                  <p>{portfolio.subtitle}</p>

                  <p>{portfolio.description}</p>
                </div>
              </div>
              <div className="col-lg-6 ">
                <div className="carousel">
                  <Carousel fade>
                    <Carousel.Item>
                      <img
                        className="d-block portfolioImage"
                        src={portfolio.image1}
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block portfolioImage"
                        src={portfolio.image2}
                        alt="Second slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block portfolioImage"
                        src={portfolio.image3}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyleRoot>
    </>
  );
}

export default Portfolio;
