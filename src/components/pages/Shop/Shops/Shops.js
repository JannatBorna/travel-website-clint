import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ShopBanner from '../../ShopBanner/ShopBanner';
import shop18 from '../../../../images/shop/shop-18.jpg';
import shop4 from '../../../../images/shop/shop-4.jpg';
import shop6 from '../../../../images/shop/shop-6.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faStar } from "@fortawesome/free-solid-svg-icons";
import Shop from '../Shop/Shop';
import './Shops.css';

const Shops = () => {
    const [ shops, setShops ] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:2000/shops')
        .then(res => res.json())
        .then(data => setShops(data))

    }, [])
return (
    <div>
        <ShopBanner />

        <Container className='shop-gap'>
            <div>
                <p className='text-start'>Showing 1–12 of 19 results</p>
            </div>
            <Row>
                <Col lg={9} md={9} sm={12}>
                    <div className='shops'>
                        {
                            shops.map(shop => <Shop
                            key={shop.id}
                            shop={shop}
                            ></Shop>)
                        }
                    </div>
                </Col>


                

                <Col lg={3} md={3} sm={12}>
                    <div>
                         <div className='blog-list'>
                            <h5>Categories</h5>
                                <span>Accessories</span>
                                <span className='my-2'>Beach</span>
                                <span>Camping</span>
                                <span className='my-2'>Summer</span>
                                <span>Vintage</span>
                                <span className='my-2'>Winter</span>
                        </div>

                        <div className='my-5 blog-list'>
                            <h5>Popular products</h5>
                                <div className='mt-3 d-flex'>
                                    <img src={shop18} alt="" className='cursor-pointer w-50'/>
                                    <div className='mx-2 shop-popular'>
                                        <h5>Business</h5>
                                        <h5>$120</h5>
                                        <h6>
                                          <FontAwesomeIcon icon={faStar} />
                                          <FontAwesomeIcon icon={faStar} />
                                          <FontAwesomeIcon icon={faStar} />
                                          <FontAwesomeIcon icon={faStar} />
                                          <FontAwesomeIcon icon={faStar} />  
                                        </h6>
                                    </div>
                                </div>

                                <div className='mt-3 d-flex'>
                                    <img src={shop4} alt="" className='cursor-pointer w-50'/>
                                    <div className='mx-2 shop-popular'>
                                        <h5>Business</h5>
                                        <h5>$80</h5>
                                        <h6>
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />  
                                        </h6>
                                    </div>
                                </div>


                                <div className='mt-3 d-flex'>
                                    <img src={shop6} alt="" className='cursor-pointer w-50'/>
                                    <div className='mx-2 shop-popular'>
                                        <h5>Business</h5>
                                        <h5>$110</h5>
                                        <h6>
                                          <FontAwesomeIcon icon={faStar} />
                                          <FontAwesomeIcon icon={faStar} />
                                          <FontAwesomeIcon icon={faStar} />
                                          <FontAwesomeIcon icon={faStar} />
                                          <FontAwesomeIcon icon={faStar} />  
                                        </h6>
                                    </div>
                                </div>
                                
                        </div>
                        
                        <div className='shop-tour'>
                            <h4>Amazing tour</h4>
                            <h6 className='text-danger'>50% off</h6>
                        </div>
                    </div>
                </Col>

            </Row>
        </Container>
    </div>
    );
};

export default Shops;