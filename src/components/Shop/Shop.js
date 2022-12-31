import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    const [cart, setCart] = useState([]);
    const cartHandler = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop'>
            <div className='products'>
                {
                    products.map(product => <Products 
                        name={product}
                        key={product.id}
                        cartHandler={cartHandler}
                        ></Products>)
                }
            </div>
            <div className='shopping-cart'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;