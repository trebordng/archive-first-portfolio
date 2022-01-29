import React,{useState} from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Navigation.css";
import { Navbar, Container, Nav } from "react-bootstrap";




function Navigation() {
  const [navbar,setNavbar]=useState(false)
  let params=window.location.href;
  const changeBackground = () =>{
if (window.scrollY >=80){
  
  setNavbar(true);
}else{
  setNavbar(false);
}
  };
  window.addEventListener('scroll',changeBackground);
  return (
    <>
      <Navbar collapseOnSelect={"true"} expand="lg" className={navbar? "scrollNav":""}>
        <Container>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            data-toggle="collapse"
            data-target="responsive-navbar-nav"
            aria-controls="responsive-navbar-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <Navbar.Brand>
            <Link to="/Home#homeLink" className="inactive">#robertTran</Link>
          </Navbar.Brand>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link eventKey="Home">
                <Link smooth to="/Home#homeLink" className={params.includes("homeLink")? "active":"inactive"}>Home</Link>
              </Nav.Link>
              <Nav.Link eventKey="Professional">
                <Link smooth to="/Home#professionalLink" className={params.includes("professionalLink")? "active":"inactive"}>Professional</Link>
              </Nav.Link>
              <Nav.Link eventKey="EducationAndExperience">
                <Link smooth to="/Home#educationAndExperienceLink" className={params.includes("educationAndExperienceLink")? "active":"inactive"}>
                  Education & Experience
                </Link>
              </Nav.Link>
              <Nav.Link eventKey="Contact">
                <Link smooth to="/Home#contactLink" className={params.includes("contactLink")? "active":"inactive"}>Contact</Link>
              </Nav.Link>
              <Nav.Link eventKey="Portfolio">
                <Link smooth to="/Portfolios" className={params.includes("Portfolios")? "active":"inactive"}> Portfolio</Link>
              </Nav.Link>
              <Nav.Link eventKey="Blog">
                <Link smooth to="/Blogs#blogLink" className={params.includes("Blogs#blogLink")? "active":"inactive"}>Blog</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
