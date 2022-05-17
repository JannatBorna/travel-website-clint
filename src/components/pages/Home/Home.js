import React from 'react';
import OneBanner from '../HomeBanner/OneBanner/OneBanner';
import TwoBanner from '../HomeBanner/TwoBanner/TwoBanner';
import ThreeBanner from '../HomeBanner/ThreeBanner/ThreeBanner';
import FourBanner from '../HomeBanner/FourBanner/FourBanner';


const Home = () => {
    return (
        <div>
            <OneBanner />
            <TwoBanner /> 
            <ThreeBanner />
            <FourBanner />
        </div>
    );
};

export default Home;