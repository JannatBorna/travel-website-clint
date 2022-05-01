import React from 'react';
import {NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {      
//     const [click, setClick] = React.useState(false);

//   const handleClick = () => setClick(!click);
//   const Close = () => setClick(false);
    return (
    <div>
     <div className="main-container" />
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            CodeBucks
            <i className="fa fa-code"></i>
          </NavLink>
          <ul className="nav-menu active">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon">
      
          </div>
        </div>
      </nav>
    </ div>

        
        
    );
};

export default Header;