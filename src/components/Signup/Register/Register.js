import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import LoginNav from '../LoginNav/LoginNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";
import './Register.css';

const Register = () => {
    return (
        <div>
            <div className='reg-bg'>.</div>
            <div className='reg-bg-2'>.</div>

        <Container>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <div className='register'>
                        <LoginNav />
                        <h1 className='mt-3 welcome'>WELCOME</h1>
                        <h2 className='text-white'> <FontAwesomeIcon icon={faBarsStaggered} 
                        className='theme' />  Network</h2>
                        <p className='text-white'>Register into Your account</p>

                        <form>
                            <label for="name" className='p-3 mx-4 text-white fw-bold'>Name: </label>
                            <input type="email" id="email" name="email" className='bg-black'/>
                            <br />
                            <label for="femail" className='p-3 mx-4 text-white fw-bold'>Email :</label>
                            <input type="email" id="email" name="email"/>
                            <br />
                             <label for="psw" className='p-2 mx-4 text-white fw-bold password'>Password :</label>
                             <input type="password" id="psw" name="psw" pattern="(?=.*\d)(?=.*
                            [a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and 
                            one uppercase and lowercase letter, and at least 8 or more 
                            characters" required />
                            <br />
                            <label for="psw" className='mx-4 text-white fw-bold'>Re-Password :</label>
                            <input type="password" id="psw" name="psw" pattern="(?=.*\d)(?=.*
                            [a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and 
                            one uppercase and lowercase letter, and at least 8 or more 
                            characters" required />
                            <br />
                            <Button className='my-4 login-btn'>REGISTER</Button>
                        </form>  
                            
                            <div>
                                <p className='text-white'>All ready Register?
                                <a href="/login" className='text-danger'>SIGN IN</a> now</p>
                            </div>

                            <div className='mt-1 sign-up'>
                                <a href="/" className='p-2 facebook'><FontAwesomeIcon icon={faFacebookSquare}/> Facebook</a>
                                <a href="/" className='p-2 mx-2 google'><FontAwesomeIcon icon={faGoogle}/> Google</a>
                            </div>
                        
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Register;