// eslint-disable-next-line no-unused-vars
import React from "react";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-shopifyn">Shopifyn</div>
      <div className="navbar-links">
        <div className="navbar-link">Home</div>
        <div className="navbar-link">Products</div>
        <div className="navbar-link">About us</div>
        <div className="navbar-link">Contact</div>
      </div>
      <div className="navbar-user">
        <div className="navbar-user-image">UserImage</div>
        <div className="navbar-user-account">Account</div>
      </div>
      <div className="navbar-cart">
        <div className="navbar-cart-image">Cart Image</div>
        <div className="navbar-cart-text">Cart</div>
      </div>
    </nav>
  );
};
export default NavBar;