import React, { useEffect, useState } from 'react'
import NavBar from '../../footer and header/navigation/NavBar'
import Footer from '../../footer and header/Footer'

const Cart = ({currentUserId, products,cartItems}) => {
  const [cart, setCart] = useState([])

  console.log('current user id:', currentUserId);

  useEffect(() => {
    fetch(`http://localhost:3000/users/${currentUserId}/get_cart`)
    .then((response)=> {
      if (response.ok) {
        response.json().then((data) => {
          setCart(data)
        })
      }
    })
  },[])

  // const calculateTotalPrice = () => {
  //   let totalPrice = 0;
  //   products.forEach((item) => {
  //     totalPrice += Number(item.price);
  //   });
    // return totalPrice.toFixed(2);
    console.log('cartItems:',cart.cart_items);
  // };
  return (
    <div>
      <section>
      <div className="cart-page">
      <div className="cart-container">
        <h2 className="cart-title">Shopping Cart</h2>
        <div className="cart-items">
          
            <div className="cart-item">
              <div className="item-image">
                <img src='hello' alt='hello' />
              </div>
              <div className="item-details">
                <h3>Hp Laptop</h3>
                <p>Brand: 'hp'</p>
                <p>Price: Ksh.100</p>
                <button className="remove-button" >Remove</button>
              </div>
            </div>
          
        </div>
        <div className="cart-total">
          <p>Subtotal: Ksh.100</p>
          <p>Shipping and taxes calculated at checkout.</p>
          <button className="checkout-button">Checkout</button>
          <p className="continue-shopping">
            or <button className="continue-shopping-button">Continue Shopping</button>
          </p>
        </div>
      </div>
    </div>
      </section>

    </div>
  )
}

export default Cart