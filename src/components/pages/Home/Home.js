import React from 'react';
import Banner from '../Banner/Banner';
import LastBanner from '../LastBanner/LastBanner';
import MiddleBanner from '../MiddleBanner/MiddleBanner';

const Home = () => {
    return (
        <div>
            <Banner />
            <MiddleBanner /> 
            <LastBanner />
        </div>
    );
};

export default Home;