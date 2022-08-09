import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import banner from '../../../../images/layout-15.jpg';
import './OneBanner.css';

const OneBanner = () => {
    return (
        <div className="banner">
            <div className="banner-section">
                <img src={banner} alt="" />
            </div>

            <div className="banner-text d-flex">
               <h1 className="text-start text-white">Find Your Perfect<br />  Trip</h1>
            </div>

               <div className="d-flex text-inner mt-5 text-start">
                    <div>
                       <h3 className='text-white'>TOP HOTELS</h3>
                       <p className='text-white'>Access The Industry’s Leading Tour Site</p>
                       <FontAwesomeIcon icon={faAngleLeft} className="icon-color"/>
                    </div>
                    <div className='mx-5'>
                       <h3 className='text-white'>LIST OF TOURS</h3>
                       <p className='text-white'>Access The Industry’s Leading Tour Site</p>
                       <FontAwesomeIcon icon={faAngleLeft} className="icon-color"/>
                    </div>
                </div>
        </div>
    );
};

export default OneBanner;