import React from 'react';
import banner from '../../../images/banner-3.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-section">
                <img src={banner} alt="..." />
            </div>

            <div className="banner-text">
               <h1>Find Your Perfect Trip</h1>
            </div>
               <div  className="d-flex text-inner mt-5">
                    <div>
                       <h3>TOP HOTELS</h3>
                       <p>Access The Industry’s Leading Tour Site</p>
                    </div>
                    <div className='mx-5'>
                       <h3>LIST OF TOURS</h3>
                       <p>Access The Industry’s Leading Tour Site</p>
                    </div>
               
            </div>
        </div>
    );
};

export default Banner;