import React from 'react';
import FiveBanner from '../HomeBanner/FiveBanner/FiveBanner';
import FourBanner from '../HomeBanner/FourBanner/FourBanner';
import OneBanner from '../HomeBanner/OneBanner/OneBanner';
import SixBanner from '../HomeBanner/SixBanner/SixBanner';
import ThreeBanner from '../HomeBanner/ThreeBanner/ThreeBanner';
import TwoBanner from '../HomeBanner/TwoBanner/TwoBanner';



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