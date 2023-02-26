import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Shop.css';





const Shop = ({shop}) => {

    const {name, img, price,rating} = shop;

return (
        
    <div className='shop'>
            <img src={img} alt="" className="image"/>  
            <div className='overlay'>
                <Link to="/login">
                    <Button className='cart-btn'>ADD TO CART</Button>
                </Link>
            </div>


            
        <div className='shop-text'>
            <h4 className='text-start'>{name}</h4>
            <span className='price'>${price}</span>
            <span className='mx-36'>{rating}</span>
        </div>
    </div>

    );
};

export default Shop;