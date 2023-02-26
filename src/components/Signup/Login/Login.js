import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";

import LoginNav from '../LoginNav/LoginNav';
import './Login.css';

const Login = () => {
    return (
        <div>
            <div className='login-bg'>.</div>
            <div className='login-bg-2'>.</div>

        <Container>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <div className='login'>
                        <LoginNav />
                        <h2 className='mt-3 text-white'> <FontAwesomeIcon icon={faBarsStaggered} className='theme' />  Network</h2>
                        <p className='text-white'>Login into Your account</p>

                        <form>
                            <label for="femail" className='p-3 mx-4 text-white fw-bold'>Email :</label>
                            <input type="email" id="email" name="email"/>
                            <br />
                             <label for="psw" className='mx-4 text-white fw-bold'>Password :</label>
                             <input type="password" id="psw" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
                             <p>Forgot Password</p>
                            <br />
                            <Button className='my-4 login-btn'>LOGIN</Button>
                        </form>  
                            
                            <div>
                                <p className='text-white'>New user? <a href="/register" className='text-danger'>SIGN UP</a> now</p>
                            </div>

                            <div className='mt-2 sign-up'>
                                <a href="/" className='p-2 facebook'><FontAwesomeIcon icon={faFacebookSquare}/> Facebook</a>
                                <a href="/" className='p-2 mx-2 google'><FontAwesomeIcon icon={faGoogle}/> Google</a>
                                {/* <a href="/"><FontAwesomeIcon icon={faGithub}/> GitHub</a> */}
                            </div>
                        
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Login;