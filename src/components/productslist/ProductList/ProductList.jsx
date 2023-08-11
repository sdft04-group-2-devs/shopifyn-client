// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './ProductList.css';
import ProductCard from '../ProductCard/ProductCard';
import NavBar from '../../footer and header/navigation/NavBar';
import Footer from '../../footer and header/Footer';
import Cart from '../cart/Cart';
const ProductList = ({showCart , handleCartClick, products, isAuthenticated, setCurrentUser, currentUser}) => {
const [searchInput, setSearchInput] = useState('');
const [filteredProducts, setFilteredProducts] = useState([...products]);

useEffect(()=>{
  setFilteredProducts([...products])
},[])

const handleSearch = (event) => {
  const searchValue = event.target.value;
  setSearchInput(searchValue);

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  setFilteredProducts(filtered);
};


  return (
    <div className='products-main-page'>
      <NavBar showCart={showCart} isAuthenticated={isAuthenticated} currentUser={currentUser} setCurrentUser={setCurrentUser} handleSearch={handleSearch} handleCartClick={handleCartClick} />
      <div className="search-bar">
        <input
          type="search"
          className="products-search-container"
          placeholder="Search"
          value={searchInput}
          onChange={handleSearch}
        />
      </div>
      <section className="product-list">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </section>
      {
        showCart && <Cart handleCartClick={handleCartClick} isAuthenticated={isAuthenticated} currentUser={currentUser} />
      }
      <Footer />
    </div>
  );
};
export default ProductList;