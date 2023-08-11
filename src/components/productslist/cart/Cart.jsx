import React, { useEffect, useState } from 'react';
import './Cart.css'; 
import { Link, useNavigate } from 'react-router-dom';

const Cart = ({ currentUserId, products }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const navigate = useNavigate()

  // Load cart items from local storage on component mount
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Fetch product details for each cart item
  useEffect(() => {
    const fetchCartProducts = async () => {
      const fetchedProducts = await Promise.all(
        cartItems.map(async (itemId) => {
          const response = await fetch(`http://localhost:3000/products/${itemId}`);
          const productData = await response.json();
          return productData;
        })
      );
      setCartProducts(fetchedProducts);
    };

    fetchCartProducts();
  }, [cartItems]);

  // on click go to checkout page
  const handleToCheckout = () => {
    navigate('/checkout', {state: {cartProducts}})
  }

  // Calculate total price based on cartProducts
  const calculateTotalPrice = () => {
    const totalPrice = cartProducts.reduce((total, product) => {
      return total + Number(product.price);
    }, 0);
    return totalPrice.toFixed(2);
  };

  const handleContinueShopping = ()=> {
    navigate('/products')
  }

  return (
    <div>
      <section>
        <div className="cart-page">
          <div className="cart-container">
            <h2 className="cart-title">Shopping Cart</h2>
            <div className="cart-items">
              {cartProducts.map((product) => (
                <div className="cart-item" key={product.id}>
                  <div className="item-image">
                    <img src={product.image_url_1} alt={product.name} />
                  </div>
                  <div className="item-details">
                    <h3>{product.name}</h3>
                    <p>Brand: {product.brand}</p>
                    <p>Price: Ksh.{product.price}</p>
                    {/* <button className="remove-button">Remove</button> */}
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <p>Subtotal: Ksh.{calculateTotalPrice()}</p>
              <p>Shipping and taxes calculated at checkout.</p>
              <button className="checkout-button" onClick={handleToCheckout}>Checkout</button>
              <p className="continue-shopping">
                or <button className="continue-shopping-button" onClick={handleContinueShopping}>Continue Shopping</button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
