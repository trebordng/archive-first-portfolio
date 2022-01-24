import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navigation.css";
import { Navbar, Container, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/Home">#robertTran</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/Home">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Professional">Professional</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Portfolios">Portfolio</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Education">Education</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Experience">Experience</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Contact">Contact</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Blogs">Blog</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Navigation;
