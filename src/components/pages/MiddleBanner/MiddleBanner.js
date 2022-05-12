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

               <div className="middle-div">
                   <div className="text-start">
                       <h5>PROD<span className="tag-h5">UCT INFORMATION</span></h5>
                       <p>Need more details on skip-the-line tickets? <br /> Looking for a list of top activities in Rome? <br /> Want to see a video of a tour before you <br /> book? It's all here.</p>
                   </div>

                   <div className="text-start">
                       <h5>TRA<span className="tag-h5">INING RESOURCES</span></h5>
                       <p>Get helpful tips to increase sales and improve <br /> your business using Viator's Travel Agent <br /> Program.</p>
                   </div>

                   <div className="text-start">
                       <h5>TRA<span className="tag-h5">VEL GUIDES</span></h5>
                       <p>Keep your destination knowledge fresh with<br /> insider tips and blog posts about cities and <br /> regions around the world.</p>
                   </div>
               </div> 
            </Container>
        </section>
    );
};

export default MiddleBanner;         
                
            
                