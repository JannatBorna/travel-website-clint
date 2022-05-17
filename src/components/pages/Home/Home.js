import React from 'react';
import OneBanner from '../HomeBanner/OneBanner/OneBanner';
import TwoBanner from '../HomeBanner/TwoBanner/TwoBanner';
import ThreeBanner from '../HomeBanner/ThreeBanner/ThreeBanner';
import FourBanner from '../HomeBanner/FourBanner/FourBanner';
import FiveBanner from '../HomeBanner/FiveBanner/FiveBanner';


const Home = () => {
    return (
        <div>
            <OneBanner />
            <TwoBanner /> 
            <ThreeBanner />
            <FourBanner />
            <FiveBanner />
        </div>
    );
};

export default Home;