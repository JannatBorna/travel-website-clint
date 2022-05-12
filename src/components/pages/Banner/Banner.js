import React from 'react';
import banner from '../../../images/banner-5.jpg';
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-section">
                <img src={banner} alt="..." />
            </div>

            <div className="banner-text d-flex">
               <h1 className="text-start">Find Your <br /> Perfect Trip</h1>
            </div>

               <div className="d-flex text-inner mt-5 text-start">
                    <div>
                       <h3>TOP HOTELS</h3>
                       <p>Access The Industry’s Leading Tour Site</p>
                       <FontAwesomeIcon icon={faAngleLeft} className="banner-icon"/>
                    </div>
                    <div className='mx-5'>
                       <h3>LIST OF TOURS</h3>
                       <p>Access The Industry’s Leading Tour Site</p>
                       <FontAwesomeIcon icon={faAngleLeft} className="banner-icon"/>
                    </div>
                </div>
        </div>
    );
};

export default Banner;