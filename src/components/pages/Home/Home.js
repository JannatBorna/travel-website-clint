import React from 'react';
import FirstBanner from '../FirstBanner/FirstBanner';
import LastBanner from '../LastBanner/LastBanner';
import MiddleBanner from '../MiddleBanner/MiddleBanner';

const Home = () => {
    return (
        <div>
            <FirstBanner />
            <MiddleBanner /> 
            <LastBanner />
        </div>
    );
};

export default Home;