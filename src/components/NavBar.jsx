import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
      <Navbar.Brand as={Link} to="/Home">NAHUEL CORDONE 127</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/Home">HOME</Nav.Link>
          <Nav.Link as={Link} to="/Curriculum">BIO</Nav.Link>
          <Nav.Link as={Link} to="/Equipo">EQUIPO</Nav.Link>
        </Nav>
        {/* Enlace de Instagram */}
        <a
          href="https://www.instagram.com/nahuelcordone/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          <img src="/ins.png" alt="Instagram" className="instagram-icon" />
        </a>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;



