import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const LoginNav = () => {
    return (
        <div>
            <Navbar bg="white" variant="white">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    );
};

export default LoginNav;