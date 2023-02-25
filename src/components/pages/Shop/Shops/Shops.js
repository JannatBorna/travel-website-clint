import React, { useEffect, useState } from 'react';
import Shop from '../Shop/Shop';

const Shops = () => {
    const [ shops, setShops ] = useState([]);

    useEffect( () =>{
        fetch('/shop.json')
        .then(res => res.json())
        .then(data => setShops(data))

    }, [])
    return (
        <div>
            <h2>Shops:{shops.length}</h2>
            {
                shops.map(shop => <Shop
                key={shop.id}
                shop={shop}
                ></Shop>)
            }
        </div>
    );
};

export default Shops;