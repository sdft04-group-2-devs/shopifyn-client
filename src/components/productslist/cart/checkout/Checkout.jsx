import React from 'react';
import './Checkout.css'; // Import your Checkout component's CSS file

const Checkout = () => {
  const handleCheckout = () => {
    const {cartProducts} = location.state || {}


    // Calculate total price based on cartProducts
  const calculateTotalPrice = () => {
    const totalPrice = cartProducts.reduce((total, product) => {
      return total + Number(product.price);
    }, 0);
    return totalPrice.toFixed(2);
  };
    // Implement your M-Pesa payment logic here
    alert('Proceeding to M-Pesa payment...');
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <h2 className="checkout-title">Checkout</h2>
        <div className="order-summary">
          <h3>Order Summary</h3>
          <ul className="product-list">
            {cartProducts.map((product) => (
              <li key={product.id}>
                <span className="product-name">{product.name}</span>
                <span className="product-price">Ksh.{product.price}</span>
              </li>
            ))}
          </ul>
          <div className="total">
            <span className="total-label">Total:</span>
            <span className="total-amount">Ksh.{calculateTotalPrice}</span>
          </div>
        </div>
        <div className="payment-method">
          <h3>Payment Method</h3>
          <p>Pay with M-Pesa</p>
          <button className="checkout-button" onClick={handleCheckout}>
            Proceed to M-Pesa
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
