import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faStar,faStarHalf } from "@fortawesome/free-solid-svg-icons";
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
                <div className='d-flex'>
                    <p className='price'>${price}</p>
                    <p className='rating'>
                    <ReactStars
                        count={rating}
                        size={16}
                        isHalf={true}
                        emptyIcon={ <FontAwesomeIcon icon={faStar} />}
                        halfIcon={ <FontAwesomeIcon icon={faStar} />}
                        fullIcon={ <FontAwesomeIcon icon={faStarHalf} />}
                        // Color="#1bafc0"
                        value= "7"
                        a11y= {true}
                    /></p>
                </div>
        </div>
    </div>

    );
};

export default Shop;