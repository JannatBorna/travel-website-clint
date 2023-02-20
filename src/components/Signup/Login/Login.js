import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import './Login.css';
import LoginNav from '../LoginNav/LoginNav';

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
                        <h2 className='text-white'> <FontAwesomeIcon icon={faBarsStaggered}/>  Network</h2>
                        <p className='text-white'>Login into Your account</p>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Login;