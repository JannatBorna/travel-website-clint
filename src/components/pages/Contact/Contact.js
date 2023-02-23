import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import contactBanner from '../../../images/others/login.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";
import './Contact.css';

const Contact = () => {
    return (
        <div className='my-5'>
            <div className='contact-banner'>
                <img src={contactBanner} alt="" />     
            <Button className='contact-banner-button fs-1 cursor-text'>Contact Us</Button>
            </div>

            <div>
                <Container>
                    <h2 className='my-5 contact-headline'>Get in touch with Us!</h2>
                    <Row>
                        <Col lg={4} md={4} sm={12}>
                            <div className='contact-touch'>
                                <FontAwesomeIcon icon={faMobileAlt} className='contact-headline fs-1' /> 
                                <h6 className='mt-3'>PHOME</h6>
                                <span><a href="tel:+87826768761">+8782-6768-7699</a></span> <br />
                                <span><a href="tel:+870000007751">+8700-0000-7751</a></span>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                            <div className='contact-touch-2'>
                                <FontAwesomeIcon icon={faLocationDot} className='contact-headline fs-1' /> 
                                <h6 className='mt-3'>ADDRESS</h6>
                                <span>10 WOST VISMAT LONDON</span> <br />
                                <span>address based on location is address finder</span>
                            </div>              
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                            <div className='contact-touch-2'>
                                <FontAwesomeIcon icon={faEnvelope} className='contact-headline fs-1' /> 
                                <h6 className='mt-3'>EMAIL</h6>
                                <span><a href="mailto:your@travel.com">your@travel.com</a></span> <br />
                                <span><a href="mailto:travelyour@gmail.com">travelyour@gmail.com</a></span>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    );
};

export default Contact;