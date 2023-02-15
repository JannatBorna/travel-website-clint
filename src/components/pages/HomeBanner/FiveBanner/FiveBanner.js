import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bannerFive from '../../../../images/banner/bannerFive.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faStar, faEarth, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import './FiveBanner.css';


const SixBanner = () => {
    return (
        <div className='section-gap'>
            <div className='bannerFive'>
                <img src={bannerFive} alt="" />
                <div>
                    <Container>
                        <Row>
                            <Col lg={4} md={4} sm={12}>
                                <div className='banner-five-box'>
                                    <div className='bannerFive-icon'>
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                    <div className='mt-5'>
                                        <h3>Handpicked Hotels</h3>
                                        <p>We travel to bring what little we can, in our ignorance and knowledge, to those parts of the globe whose riches are differently dispersed. </p>
                                        <a href="/fiveBanner" className='anchor-tag'>Learn More</a>
                                    </div> 
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={12}>
                                <div className='banner-five-box'>
                                    <div className='bannerFive-icon'>
                                        <FontAwesomeIcon icon={faEarth} />
                                    </div>
                                    <div className='mt-5'>
                                        <h3>World Class Service</h3>
                                        <p>We travel to bring what little we can, in our ignorance and knowledge, to those parts of the globe whose riches are differently dispersed. </p>
                                        <a href="/fiveBanner" className='anchor-tag'>Learn More</a>
                                    </div>   
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={12}>
                                <div className='banner-five-box'>
                                    <div className='bannerFive-icon'>
                                        <FontAwesomeIcon icon={faThumbsUp } />
                                    </div>
                                    <div className='mt-5'>
                                        <h2>Best Price Guarantee</h2>
                                        <p>We travel to bring what little we can, in our ignorance and knowledge, to those parts of the globe whose riches are differently dispersed. </p>
                                        <a href="/fiveBanner" className='anchor-tag'>Learn More</a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            <div>
                <Row>
                    <Col lg={4} md={4} sm={12}>
                        <div>
                            <h3>1</h3>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <div>
                            <h3>2</h3>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <div>
                            <h3>3</h3>
                        </div>
                    </Col>

                </Row>
            </div>
        </div>
    );
};

export default SixBanner;