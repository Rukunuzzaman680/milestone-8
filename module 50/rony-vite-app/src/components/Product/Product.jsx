import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = props => {
  const { name, img, price, seller, ratings } = props.product;
  const handleToCart = props.handleToCart;

  return (
    <div className="product">
      <div className="product-info">
        <img src={img} alt="" />
        <h3 className="product-name">Name: {name}</h3>
        <p>Price: {price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rate: {ratings} Stars</p>
      </div>
      <button onClick={() => handleToCart(props.product)} className="btn-cart">
        Add To Cart
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
