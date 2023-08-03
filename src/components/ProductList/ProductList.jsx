// eslint-disable-next-line no-unused-vars
import React from 'react';
import './ProductList.css';
import ProductCard from '../ProductCard/ProductCard';

const products = 
[
  {
    name: 'Iphone 14',
    image: 'https://i.pinimg.com/236x/26/be/56/26be56634ad9773c9d8f6315cac2cba7.jpg',
    price: 148000,
    rating: 5.0,
  },
  {
    name: 'MacBook pro',
    image: 'https://i.pinimg.com/236x/ba/fe/23/bafe23ae31ee08316ef4f5964f40a05d.jpg',
    price: 210000,
    rating: 4.0,
  },
  {
    name: 'Baets Pro',
    image: 'https://i.pinimg.com/236x/4e/6b/63/4e6b639e9a0e0708ad257b43bf9dd50c.jpg',
    price: 5000,
    rating: 3.0,
  },
  {
    name: 'HP EliteBook',
    image: 'https://i.pinimg.com/236x/7d/3b/39/7d3b395b8b2a243a7abca72ccd413ac0.jpg',
    price: 48000,
    rating: 3.0,
  },
  {
    name: 'AirPods Max',
    image: 'https://i.pinimg.com/236x/99/d9/10/99d91067cd1e7537f99f7f038c83c725.jpg',
    price: 2500,
    rating: 4.0,
  },
  {
    name: "AirPods pro 3",
    image: 'https://i.pinimg.com/236x/e3/49/76/e34976e9cd96ce7f6b081a432742a6f7.jpg',
    price: 3000,
    rating: 4.0,
  },
  {
    name: 'Custom Gaming CPU',
    image: 'https://i.pinimg.com/236x/df/04/a4/df04a4f01cf282fc8d0a32f73262c1ca.jpg',
    price: 3500,
    rating: 3.0,
  },
  {
    name: 'Tecno Camon 20',
    image: 'https://i.pinimg.com/236x/a8/a9/94/a8a994b78ec091ecc9590043c65d913e.jpg',
    price: 20000,
    rating: 2.0,
  },
  {
    name: 'Magic Mouse',
    image: 'https://i.pinimg.com/564x/3f/1e/ef/3f1eef8f82d8b3fc6c2e426a3e29f332.jpg',
    price: 7500,
    rating: 4.0,
  },
  {
    name: 'Ipad air',
    image: 'https://i.pinimg.com/236x/83/da/0d/83da0d55a05d3775d2c9b7fe73b7f756.jpg',
    price: 110000,
    rating: 4.0,
  },
 
 
];

const ProductList = () => {
  return (
    <div>
      <div className="category-buttons">
        <button className="category-button active">All</button>
        <button className="category-button">Laptop</button>
        <button className="category-button">Desktops</button>
        <button className="category-button">Woofers</button>
        <button className="category-button">Phones</button>
      </div>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
    
    
  );
};

export default ProductList;
