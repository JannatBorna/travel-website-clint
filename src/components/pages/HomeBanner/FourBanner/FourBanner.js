import React from 'react';
import { Container } from 'react-bootstrap';
import fourBanner from '../../../../images/banner/fourBanner.jpg';
import './FourBanner.css';

const FourBanner = () => {
    return (
        <div className='p-5'>
            <Container>
                <div className="flex">
                   <div className='mt-5 mb-5 border-div'>
                        <div className="m-5 text-left">
                           <h2 className="font-semibold text-black">Travel <span className="text-white theme-color">can improve your personality</span></h2>
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