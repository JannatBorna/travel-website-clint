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
          <Offcanvas.Header closeButton >
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} >
                <span className='travel-info'>Travel Information</span>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/about" className='nav-list'>About</Nav.Link>
              <Nav.Link href="/dashboard" className='nav-list'>Services</Nav.Link>
              <Nav.Link href="/dashboard" className='nav-list'>Blogs</Nav.Link>
              <Nav.Link href="/dashboard" className='nav-list'>Contacts</Nav.Link>
              <Nav.Link href="/dashboard" className='nav-list'>Login</Nav.Link>
               <Nav.Link href="/dashboard" className='nav-list'>Dashboard</Nav.Link>
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