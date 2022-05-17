import React from 'react';
import OneBanner from '../HomeBanner/OneBanner/OneBanner';
import TwoBanner from '../HomeBanner/TwoBanner/TwoBanner';
import ThreeBanner from '../HomeBanner/ThreeBanner/ThreeBanner';
import FourBanner from '../HomeBanner/FourBanner/FourBanner';
import FiveBanner from '../HomeBanner/FiveBanner/FiveBanner';
import SixBanner from '../HomeBanner/SixBanner/SixBanner';


const Home = () => {
    return (
        <div>
            <OneBanner />
            <TwoBanner /> 
            <ThreeBanner />
            <FourBanner />
            <FiveBanner />
            <SixBanner />
        </div>
    );
};

export default Home;