import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart, handleClearCart, children }) => {
  // const cart = props.cart; // option-1
  // const { cart } = props; // option-2

  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    // if (product.quantity === 0) {
    //   product.quantity = 1;
    // }

    // product.quantity = product.quantity || 1;

    // console.log(product);
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  let tax = (totalPrice * 7) / 100;

  let grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <p>Selected Items: {quantity}</p>
      <p>Total price: {totalPrice}</p>
      <p>Total shipping: ${totalShipping}</p>
      <p>Tax: {tax.toFixed(2)}</p>
      <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
      <button onClick={handleClearCart} className="clear-cart">
        Clear Cart
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>

      {children}
    </div>
  );
};

export default Cart;
