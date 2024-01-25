import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleToCart = product => {
    // cart.push(product)
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            handleToCart={handleToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h4>Order Summary</h4>
        <p>Selected items: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
