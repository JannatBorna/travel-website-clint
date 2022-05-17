import React from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import img1 from '../../../images/travel.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
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
                         <div className='border p-5'>
                            <FontAwesomeIcon icon={faCheckCircle} className="text-3xl text-red-600"/>
                            <h2 className='text-black font-semibold'>The <span className="theme-color">Indusry’s Leading Tour Site</span></h2>
                            <p className='text-black'>From Cancun to New York to Dubai, Viator has it all: skip-the-line passes, VIP tours, must-see attraction tickets, and off-the-beaten-path experiences. There's no better place to book when you're crafting the perfect vacation for your clients.</p>
                            <button className="bg-yellow-500 text-black p-2">Read More</button>
                         </div>
                     </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ThreeBanner;