import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../../../../images/banner/bannerThree.jpg';
import './ThreeBanner.css';

const ThreeBanner = () => {
    return (
        <div className="bg-stone-400">
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                       <div className="last-banner-div">
                           <img src={img1} alt="" />
                       </div>
                    </Col>

                <Col lg={6} md={6} sm={12}>
                    <div className="text-left mt-36">
                        <div className='p-5 border'>
                            <FontAwesomeIcon icon={faCheckCircle} className="icon-color"/>
                            <h2 className='font-semibold text-black'>The <span className="text-white theme-color">industry's Leading Tour Site</span></h2>
                            <p className='text-black'>From Cancun to New York to Dubai, Viator has it all: skip-the-line passes, VIP tours, must-see attraction tickets, and off-the-beaten-path experiences. There's no better place to book when you're crafting the perfect vacation for your clients.</p>
                            
                            <button className="main-button">READ MORE</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default ThreeBanner;