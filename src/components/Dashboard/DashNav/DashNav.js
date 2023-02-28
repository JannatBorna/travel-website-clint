import React from 'react';
import { Col, Row } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faGauge, faCaretDown, faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import './DashNav.css';

const DashNav = () => {
    return (
        <div>
            <Row>
                <Col lg={3} md={3} sm={2}>
                    <div>
                        <h2>nav</h2>
                    </div>
                </Col>

                <Col lg={9} md={9} sm={10}>
                    <div>
                        <h2>Deffinactin</h2>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default DashNav;