import React from 'react';
import { Container } from 'react-bootstrap';
import fourBanner from '../../../../images/fourBanner.jpg';
import './FourBanner.css';

const FourBanner = () => {
    return (
        <div className='p-5'>
            <Container>
                <div className="flex">
                   <div className='border-div mb-5 mt-5'>
                        <div className="text-left m-5">
                           <h2 className="text-black font-semibold">Travel <span className="theme-color text-white">can improve your personality</span></h2>
                           <p>f you’re an adventurer who loves being out in nature, a hiking and trekking tour should be next on your list. You can expect great wildlife photography opportunities and the chance to travel with a group of like-minded individuals who love the great outdoors.</p>
                           <button className="main-button">READ MORE</button>
                        </div>
                    </div>
                

                    <div>
                        <img src={fourBanner} alt="" />
                    </div>
                
                </div>
            </Container>
        </div>
    );
};

export default FourBanner;