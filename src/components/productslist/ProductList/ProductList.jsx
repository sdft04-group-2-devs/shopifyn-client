// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './ProductList.css';
import ProductCard from '../ProductCard/ProductCard';
import Header from '../../footer and header/Header';
import NavBar from '../../footer and header/navigation/NavBar';
import Footer from '../../footer and header/Footer';
import Cart from '../cart/Cart';
const ProductList = ({showCart ,handleSearch, handleCartClick,products, isAuthenticated, setCurrentUser, currentUser}) => {
  // const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  // const [showCart, setShowCart] = useState(false);

  console.log('isAuthenticated',isAuthenticated);

  return (
    <div className='products-main-page'>
      <Header />
      <section className="product-list">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </section>
      {
        showCart && <Cart handleCartClick={handleCartClick} isAuthenticated={isAuthenticated} currentUser={currentUser} />
      }
    </div>
  );
};
export default ProductList;