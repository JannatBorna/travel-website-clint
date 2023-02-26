import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ShopBanner from '../../ShopBanner/ShopBanner';
import Shop from '../Shop/Shop';
import './Shops.css';

const Shops = () => {
    const [ shops, setShops ] = useState([]);

    useEffect( () =>{
        fetch('/shop.json')
        .then(res => res.json())
        .then(data => setShops(data))

    }, [])
return (
    <div>
        <ShopBanner />

        <Container className='shop-gap'>
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
                        <h2>Shops:{shops.length}</h2>
                    </div>
                </Col>

            </Row>
        </Container>
    </div>
    );
};

export default Shops;