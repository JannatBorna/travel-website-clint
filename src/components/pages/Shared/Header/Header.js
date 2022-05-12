import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import './Header.css'

const Header = () => {      
return (
  <div>
    {[false].map((expand) => (
    <Navbar key={expand} expand={expand} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#" id="logo">YourTravel</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} id="toggle"/>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end" 
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Travel Information
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/dashboard">Services</Nav.Link>
              <Nav.Link href="/dashboard">Blogs</Nav.Link>
              <Nav.Link href="/dashboard">Contacts</Nav.Link>
              <Nav.Link href="/dashboard">Login</Nav.Link>
               <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  ))}
  </div>     
    );
};

export default Header;