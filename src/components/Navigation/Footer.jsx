import React from "react";
import "./Navigation.css";
import { HashLink as Link } from "react-router-hash-link";
function Footer() {
  return (
    <div className="footer">
      <Link to="/Home#homeLink">
        <button className="backButton">Back to Top</button>
      </Link>
    </div>
  );
}

export default Footer;
