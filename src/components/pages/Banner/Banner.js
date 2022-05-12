import React from 'react';
import banner from '../../../images/banner-1.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-section">
                <img src={banner} alt="..." />
            </div>
        </div>
    );
};

export default Banner;