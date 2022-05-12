import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faStar } from '@fortawesome/free-solid-svg-icons'
import './MiddleBanner.css';

const MiddleBanner = () => {
    return (
        <section id="middle-banner">
            <Container>
                <div className="inner">
                    <hr className="my-4"/>
                    <p className="icon-user"><FontAwesomeIcon icon={faUser} /></p>
                    <p className="icon-star"><FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /></p>
                    <h2>Learn More. Book More. Earn More.</h2>
                    <p>Visit our Resource center for the latest articles videos to take your business to the next level.</p>
                    <hr className="my-4"/> 
               </div>   
            </Container>
        </section>
    );
};

export default MiddleBanner;         
                
            
                