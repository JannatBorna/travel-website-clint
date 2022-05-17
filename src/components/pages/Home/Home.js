import React from 'react';
import OneBanner from '../OneBanner/OneBanner';
import TwoBanner from '../TwoBanner/TwoBanner';
import ThreeBanner from '../ThreeBanner/ThreeBanner';


const Home = () => {
    return (
        <div>
            <OneBanner />
            <TwoBanner /> 
            <ThreeBanner />
        </div>
    );
};

export default Home;