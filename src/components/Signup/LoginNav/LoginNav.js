import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './LoginNav.css';

const LoginNav = () => {
    return (
        <div>
          {/* <Container> */}
            <Navbar bg="white" variant="white">
          <Nav className="cursor-pointer me-auto text-start">
            <Nav.Link href="/login" className='sign'>SIGN IN</Nav.Link>
          </Nav>
          <Nav className='cursor-pointer text-end'>
             <Nav.Link href="/register" className='sign'>SIGN UP</Nav.Link>
          </Nav>
      </Navbar>
       {/* </Container> */}
        </div>
    );
};

export default LoginNav;