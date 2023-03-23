import React from 'react';
import FiveBanner from '../HomeBanner/FiveBanner/FiveBanner';
import FourBanner from '../HomeBanner/FourBanner/FourBanner';
import OneBanner from '../HomeBanner/OneBanner/OneBanner';
import SevenBanner from '../HomeBanner/SevenBanner/SevenBanner';
import ThreeBanner from '../HomeBanner/ThreeBanner/ThreeBanner';
import TwoBanner from '../HomeBanner/TwoBanner/TwoBanner';
import Footer from '../Shared/Footer/Footer';
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
            <SevenBanner />
            <Footer />
        </div>
    );
};

export default Home;