import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import contactBanner from '../../../images/others/login.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";
import './Contact.css';
import Footer from '../Shared/Footer/Footer';

const Contact = () => {
    return (
        <div className='my-5 contact'>
            <div className='contact-banner'>
                <img src={contactBanner} alt="" />     
            <Button className='contact-banner-button fs-1 cursor-text'>Contact Us</Button>
            </div>

            <div className=''>
                <Container>
                    <h2 className='my-5 contact-headline'>Get in touch with Us!</h2>
                    <Row>
                        <Col lg={4} md={4} sm={12}>
                            <div className='contact-touch'>
                                <FontAwesomeIcon icon={faMobileAlt} className='contact-headline fs-1' /> 
                                <h6 className='mt-3 theme'>PHOME</h6>
                                <span><a href="tel:+87826768761">+8782-6768-7699</a></span> <br />
                                <span><a href="tel:+870000007751">+8700-0000-7751</a></span>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                            <div className='contact-touch-2'>
                                <FontAwesomeIcon icon={faLocationDot} className='contact-headline fs-1' /> 
                                <h6 className='mt-3 theme'>ADDRESS</h6>
                                <span className='text-white'>10 WOST VISMAT LONDON</span> <br />
                                <span className='text-white'>address based on location is address finder</span>
                            </div>              
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                            <div className='contact-touch-2'>
                                <FontAwesomeIcon icon={faEnvelope} className='contact-headline fs-1' /> 
                                <h6 className='mt-3 theme'>EMAIL</h6>
                                <span><a href="mailto:your@travel.com">your@travel.com</a></span> <br />
                                <span><a href="mailto:travelyour@gmail.com">travelyour@gmail.com</a></span>
                            </div>
                        </Col>
                    </Row>

                    <div className='contact-message'>
                        <h2 className='my-5 contact-headline'>IF YOU GOT ANY QUESTIONS <br /> 
                        PLEASE DO NOT HESITATE TO SEND US A MESSAGE</h2>

                        
                        <form className='text-center contact-from'>
                            <input type="email" id="email" name="email" className='bg-white' placeholder='Your Name'/>
                            <br />
                            <input type="email" id="email" name="email" className='bg-white' placeholder='Your Email'/>
                            <br />
                            <input type="text" id="text" name="text" className='bg-white' placeholder='Subject'/>
                            <br />
                            <textarea rows="4" cols="94" name="comment" form="usrform" className='p-3 bg-white' placeholder='Message'></textarea>
                            <br />
                            <Button className='m-4 submit'>SUBMIT</Button>
                           
                        </form>  
                    </div>
                    <hr />
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;