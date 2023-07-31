import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    name: 'Iphone 14',
    image: 'https://i.pinimg.com/236x/26/be/56/26be56634ad9773c9d8f6315cac2cba7.jpg', 
    price: 148000,
    rating: 4.5,
  },
  {
    name: 'MacBook Pro',
    image: 'https://i.pinimg.com/236x/ba/fe/23/bafe23ae31ee08316ef4f5964f40a05d.jpg',
    price: 210000,
    rating: 5.5,
  },
  {
    name: 'Beats Pro ',
    image: 'https://i.pinimg.com/236x/4e/6b/63/4e6b639e9a0e0708ad257b43bf9dd50c.jpg',
    price: 5000,
    rating: 7.3,
  },
  {
    name: 'HP Elitebook',
    image: 'https://i.pinimg.com/236x/7d/3b/39/7d3b395b8b2a243a7abca72ccd413ac0.jpg',
    price: 48000,
    rating: 9.0,
  },
  {
    name: 'AirPods Pro 3',
    image: 'https://i.pinimg.com/236x/e3/49/76/e34976e9cd96ce7f6b081a432742a6f7.jpg',
    price: 2500,
    rating: 6.8,
  },
  {
    name: 'AirPods Max',
    image: 'https://i.pinimg.com/236x/99/d9/10/99d91067cd1e7537f99f7f038c83c725.jpg',
    price: 2500,
    rating: 6.8,
  },

];

const App = () => {
  return (
    <div>
      <div className="category-buttons">
        <button className="category-button active">All</button>
        <button className="category-button">Laptop</button>
        <button className="category-button">Desktops</button>
        <button className="category-button">Woofers</button>
        <button className="category-button">Phones</button>
      </div>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default App;
