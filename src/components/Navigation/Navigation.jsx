import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Navigation.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Button, Offcanvas, Dropdown } from "react-bootstrap";

function Navigation() {
  return (
    <>
      <Navbar expand="lg" >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Brand>
            <Link to="/Home#homeLink">#robertTran</Link>
          </Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link bsStyle="primary">
                <Link to="/Home#homeLink">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Home#professionalLink">Professional</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Home#educationAndExperienceLink">
                  Education & Experience
                </Link>
              </Nav.Link>
              <Nav.Link >
                <Link to="/Home#contactLink">Contact</Link>
              </Nav.Link>
              <Nav.Link >
                <Link to="/Portfolios">Portfolio</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Blogs#blogLink">Blog</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
