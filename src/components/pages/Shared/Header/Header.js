import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import './Header.css'

const Header = () => {      
return (
  <div>
    {[false].map((expand) => (
    <Navbar key={expand} expand={expand} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="/home" id="logo"><span className='text-info'>Y</span>our<span className='dot-nav'>&#9642;</span>Tra<span className='text-info'>v</span>el</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} id="toggle"
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end" 
        >
          <Offcanvas.Header closeButton className='close-button'>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} >
                <span className='travel-info'>Travel Information</span>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className='nav-body'>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/about" className='text-center nav-list '>About</Nav.Link>
              <Nav.Link href="/services" className='my-4 text-center nav-list'>Services</Nav.Link>
              <Nav.Link href="/blogs" className='text-center nav-list'>Blogs</Nav.Link>
              <Nav.Link href="/contacts" className='my-4 text-center nav-list'>Contacts</Nav.Link>
              <Nav.Link href="/login" className='text-center nav-list'>Login</Nav.Link>
               <Nav.Link href="/dashboard" className='my-4 text-center nav-list'>Dashboard</Nav.Link>
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