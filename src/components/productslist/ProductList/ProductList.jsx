// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './ProductList.css';
import ProductCard from '../ProductCard/ProductCard';
import Header from '../../footer and header/Header';
import NavBar from '../../footer and header/navigation/NavBar';
import Footer from '../../footer and header/Footer';
import Cart from '../cart/Cart';
const ProductList = ({showCart ,handleSearch,products, isAuthenticated, setCurrentUser, currentUser}) => {
  // const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  // const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from local storage on component mount
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Save cart items to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  

  const handleCartClick = (productId) => {
    if (!cartItems.includes(productId)) {
      setCartItems([...cartItems, productId]);
    }
  };

  console.log('isAuthenticated',isAuthenticated);

  console.log('cartItems:',cartItems);

  

  return (
    <div className='products-main-page'>
      <Header />
      <section className="product-list">
        {products.map((product, index) => (
          <ProductCard handleCartClick={handleCartClick} key={index} {...product} />
        ))}
      </section>
      {
        showCart && <Cart handleCartClick={handleCartClick} isAuthenticated={isAuthenticated} currentUser={currentUser} />
      }
    </div>
  );
};
export default ProductList;