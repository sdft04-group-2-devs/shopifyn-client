import React, { useState, useEffect } from 'react';
import './MyDashboard.css'
import NavBar from '../components/footer and header/navigation/NavBar';
import Footer from '../components/footer and header/Footer'

const MyDashboard = () => {
  const [uploadedProducts, setUploadedProducts] = useState([]);

  useEffect(() => {
    // Fetch  products from the backend 
    const mockData = [
      {
        id: 1,
        name: 'Product 1',
        description: '13.3" Retina display, M1 chip with up to 16GB RAM, up to 2TB SSD, macOS, Thunderbolt 3 ports, sleek design.',
        price: 20.99,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&usqp=CAU'

      },
      {
        id: 2,
        name: 'Product 2',
        description: '13.3" Retina display, M1 chip with up to 16GB RAM, up to 2TB SSD, macOS, Thunderbolt 3 ports, sleek design.',
        price: 35.49,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&usqp=CAU'

      },
      {
        id: 2,
        name: 'Product 2',
        description: '13.3" Retina display, M1 chip with up to 16GB RAM, up to 2TB SSD, macOS, Thunderbolt 3 ports, sleek design.',
        price: 45.49,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&usqp=CAU'

      },
      {
        id: 2,
        name: 'Product 2',
        description: '13.3" Retina display, M1 chip with up to 16GB RAM, up to 2TB SSD, macOS, Thunderbolt 3 ports, sleek design.',
        price: 35.49,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&usqp=CAU'

      },
      {
        id: 2,
        name: 'Product 2',
        description: '13.3" Retina display, M1 chip with up to 16GB RAM, up to 2TB SSD, macOS, Thunderbolt 3 ports, sleek design.',
        price: 55.49,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&usqp=CAU'

      },
      {
        id: 2,
        name: 'Product 2',
        description: '13.3" Retina display, M1 chip with up to 16GB RAM, up to 2TB SSD, macOS, Thunderbolt 3 ports, sleek design.',
        price: 95.49,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&usqp=CAU'

      },
      {
        id: 2,
        name: 'Product 2',
        description: '13.3" Retina display, M1 chip with up to 16GB RAM, up to 2TB SSD, macOS, Thunderbolt 3 ports, sleek design.',
        price: 85.49,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&usqp=CAU'

      },
      {
        id: 2,
        name: 'Product 2',
        description: '13.3" Retina display, M1 chip with up to 16GB RAM, up to 2TB SSD, macOS, Thunderbolt 3 ports, sleek design.',
        price: 75.49,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&usqp=CAU'

      },
      {
        id: 2,
        name: 'Product 2',
        description: '13.3" Retina display, M1 chip with up to 16GB RAM, up to 2TB SSD, macOS, Thunderbolt 3 ports, sleek design.',
        price: 565.49,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&usqp=CAU'

      },
      {
        id: 2,
        name: 'Product 2',
        description: '13.3" Retina display, M1 chip with up to 16GB RAM, up to 2TB SSD, macOS, Thunderbolt 3 ports, sleek design.',
        price: 175.49,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&usqp=CAU'

      },
      {
        id: 2,
        name: 'Product 2',
        description: '13.3" Retina display, M1 chip with up to 16GB RAM, up to 2TB SSD, macOS, Thunderbolt 3 ports, sleek design.',
        price: 195.49,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&usqp=CAU'
      },
      {
        id: 2,
        name: 'Product 2',
        description: '13.3" Retina display, M1 chip with up to 16GB RAM, up to 2TB SSD, macOS, Thunderbolt 3 ports, sleek design.',
        price: 185.49,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&usqp=CAU'
      },
    ];

    setUploadedProducts(mockData);
  }, []);

  return (
    <>
    <NavBar />
    <div>
  <div>
      <button onClick={() => window.location.href = '/'} class="dashboard-header-button">Back to Home</button>
      <button onClick={() => window.location.href = '/products'} class="dashboard-header-button">Products</button>
      <div class="dropdown">
        <button class="dashboard-Categories-button">Categories</button>
        <div class="dropdown-content">
          <a href="/category/phones">Phones</a>
          <a href="/category/laptops">Laptops</a>
          <a href="/category/woofers">Woofers</a>
          <a href="/category/desktops">Desktops</a>
        </div>
    </div>
      <button onClick={() => window.location.href = '/upload-product'} class="dashboard-header-button">+ Add new product</button>
  </div>
  <div>
     <h2 className="dashboard-heading">My Dashboard</h2>     
  </div>
        <div className='img-box'>
          <h1>Best selling accessory at 50% off</h1>
            <div className="best-selling-image">
                <img src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07062905.png"/>
            </div>
        </div>
    <div className="product-grid">
      {uploadedProducts.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="dashboard-product-name">{product.name}</div>
          <div className="dashboard-product-description">{product.description}</div>
          <div className="dshboard-product-price">Ksh {product.price}</div>
          <button onClick={() => window.location.href = '/upload-product'} className="product-edit">Edit product</button>
          <button  className="product-delete">Delete</button>
        </div>
      ))}
    </div>
  </div>
  <Footer/>
  </>
);
};

export default MyDashboard;
