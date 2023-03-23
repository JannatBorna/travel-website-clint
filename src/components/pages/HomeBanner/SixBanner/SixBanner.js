import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import idea from '../../../../images/others/idea-1.png';
import './SixBanner.css';

const SixBanner = () => {
    return (
        <div className='sixBanner'>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div className='sixBanner-text'>
                            <h2 className='text-center'>HE<span className='theme-color'>LLO &#8212;</span></h2>
                            <p className='mt-5 text-start'>I am equally happy working across both print and digital media.Wishing you a safe journey and a relaxing holiday when you arrive.May your journey be free from stress and bring you home safely.The best time for a new beginning is right now. Good luck on your new journey.Really good travel writing inspires us to get up, go out and see the world. It can be just as persuasive as an awe-inspiring photograph or an enthusiastic word-of-mouth endorsement from a close friend.</p>
                            <p className='mt-4 text-start'>Travel texts are simply descriptions of destinations that appear in travel-related media such as magazines, websites, or brochures. They provide information about a particular destination, including its features and highlights.Travel operators and airlines are the first to think of travel texts. They need to ensure that their customers are well-informed about their upcoming trips, so they can make the best choices possible. Hotel chains, agencies, or portals rely on authentic descriptions of destinations.</p>
                            <a href="/" className='text-center'>
                                <button>LEARN MORE</button>
                            </a>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <div className='idea'>
                            <img src={idea} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SixBanner;