import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import google from '../../../images/others/google.png';
import facebook from '../../../images/others/facebook-2.png';
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
                        <div className='p-3 mx-5 d-flex'>
                            <div className='sign-up'>
                                <img src={google} alt="" className='mx-1'/>
                                <a href="/" >Google</a>
                            </div>

                            <div className='mx-5 sign-up'>
                                <img src={facebook} alt="" className='mx-1'/>
                                <a href="/">Facebook</a>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Login;