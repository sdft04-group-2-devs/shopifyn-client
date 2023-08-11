// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './ProductList.css';
import ProductCard from '../ProductCard/ProductCard';
import NavBar from '../../footer and header/navigation/NavBar';
import Footer from '../../footer and header/Footer';
import Cart from '../cart/Cart';


const ProductList = ({showCart ,products, isAuthenticated, setCurrentUser, currentUser}) => {
  // const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([...products]);
  // const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchInput, setSearchInput] = useState('');


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
  }

  

  return (
    <div className='products-main-page'>
      
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
    </div>
  );
};
export default ProductList;