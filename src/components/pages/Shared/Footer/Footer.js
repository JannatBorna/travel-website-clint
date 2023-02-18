import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutube } from "@fortawesome/free-brands-svg-icons";
import './Footer.css';

const Footer = () => {
    return (
        <div className='bg-dark'>
            <div>
                <FontAwesomeIcon icon={faFacebookSquare}  className='footer-icon'/>
                <FontAwesomeIcon icon={faInstagramSquare}  className='mx-4 footer-icon'/>
                <FontAwesomeIcon icon={faTwitterSquare}  className='footer-icon'/>
                <FontAwesomeIcon icon={faYoutube}  className='mx-4 footer-icon'/>
            </div>

            <div className='footer-list'>
                <ul>
                    <li>Home</li>
                    <li className='line'>&#124;</li>
                    <li>Manu</li>
                    <li className='line'> &#124;</li>
                    <li>Story</li>
                    <li className='line'> &#124;</li>
                    <li>Travel</li>
                    <li className='line'> &#124;</li>
                    <li>Location</li>
                </ul>
            </div>

            <div className='sub-footer'>
                <small>&#169;2023 your travel enjoy</small>
                <small className='mx-5'>
                    <span>Terms</span>
                    <span className='mx-2'>Privacy</span>
                    <span>Security</span>
                </small>
            </div>
        </div>
    );
};

export default Footer;