import React from "react";
import { useParams } from "react-router-dom";
import { getPortfolio } from "./PortfolioData";

function Portfolio() {
  let params = useParams();
  let portfolio = getPortfolio (parseInt(params.portfolioId, 10));
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {portfolio.amount}</h2>
      <p>
        {portfolio.name}: {portfolio.id}
      </p>
      <p>Due Date: {portfolio.due}</p>
    </main>
  );
}

export default Portfolio;
