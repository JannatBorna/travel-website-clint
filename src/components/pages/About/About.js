import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import about1 from '../../../images/others/about-1.jpg';
import './About.css';

const About = () => {

    return (
        <div>
            <div className='nav-banner'>
                <img src={about1} alt="" />     
                <Button className='nav-banner-button fs-1 cursor-text'>About Us</Button>
            </div>
            
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <div className='my-5 about-2'>
                            <h2>We are a passionate team with the vision of delivering <br /> the best & exiting experience for customers</h2>
                            <p>TRAVEL &#9642; TOURS &#9642; ADVENTURE</p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={8} md={8} sm={12}>
                        <div className='text-start about-3'>
                            <small>DAY 1-2</small>
                            <h4>MADRID</h4>
                            <p>Travel texts are simply descriptions of destinations that appear in travel-related media such <br />as magazines,  websites, or brochures. They provide information about a particular including <br /> features and highlights.Travel texts are simply descriptions of destinations that appear <br /> in travel-related  media such destination, including its features and highlights.</p>
                        </div>

                        <div className='text-start about-3'>
                           <small>DAY 2-4</small>
                           <h4>AVIGNON, OURENSE, PONFERRADA</h4>
                           <p>Travel texts are simply descriptions of destinations that appear 
                            in travel-related media such <br />as magazines,  websites, or 
                            brochures. They provide information about a particular including 
                            <br /> features and highlights.
                            </p>
                       </div>

                        <div className='text-start about-3'>
                           <small>DAY 4-8</small>
                           <h4>CITY OF GAUDI, LANGUEDOC-ROUSSILLON</h4>
                           <p>Travel texts are simply descriptions of destinations that appear 
                           in travel-related media such <br />as magazines,  websites, or 
                           brochures. They provide information about a particular including 
                           <br /> features and highlights travel texts are simply.
                           </p>
                       </div>
                    </Col>
                    
                    <Col lg={4} md={4} sm={12}>
                        <div className='blog-list'>
                            <h5>RECENT POSTS</h5>
                                <span>Standard Blog Post With Image</span>
                                <span className='my-2'>Amazing Fullwidth Post</span>
                                <span>Link Post</span>
                                <span className='my-2'>Quote Post</span>
                                <span>Sidebar Post With Slideshow</span>
                        </div>

                        <div className='my-5 blog-list'>
                            <h5>CATEGORIES</h5>
                                <span>Business</span>
                                <span className='my-2'>Business</span>
                                <span>Ecommerce</span>
                                <span className='my-2'>Photography</span>
                                <span>Wordpress</span>
                        </div>
                        
                        <div className='my-5 blog-list'>
                            <h5>ARCHIVESS</h5>
                                <span>12 March 2022</span>
                                <span className='my-2'>24 April 2022</span>
                                <span>30 June 2022</span>
                                <span className='my-2'>05 August 2023</span>
                                <span>20 January 2023</span>
                        </div>
                    </Col>
                </Row>
            </Container> 
        </div>
    );
};

export default About;