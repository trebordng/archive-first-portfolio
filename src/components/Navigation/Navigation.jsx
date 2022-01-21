import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navigation.css";
import { Navbar, Container, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <Link to="/Home">#robertTran</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/Home">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Professional">Professional</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Portfolio">Portfolio</Link>
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
              <Link to="/Blog">Blog</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
    </>
  );
}

export default Navigation;
