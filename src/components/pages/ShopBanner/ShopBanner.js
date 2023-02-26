import React from 'react';
import shopBanner from '../../../images/shop/shop-banner-2.jpg';
import './ShopBanner.css';

const ShopBanner = () => {
    return (
        <div>
            <div className='shop-banner'>
                <img src={shopBanner} alt="" /> 
                <div className='shopBanner-text'>
                    <p>Amazing tour</p>
                    <h2>Shop</h2>
                </div>
            </div>

            <div>
                
            </div>
        </div>
    );
};

export default ShopBanner;