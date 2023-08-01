import React, { useState } from 'react';
import './ProductView.css';

const ProductView = () => {
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);

  const handleQuantityChange = (value) => {
    const newQuantity = Math.max(1, Math.min(quantity + value, 100));
    setQuantity(newQuantity);
  };

  const handleBuyNowClick = () => {
    console.log(`Buying ${quantity} product(s) now...`);
  };

  const handleAddToCartClick = () => {
    console.log(`Adding ${quantity} product(s) to cart...`);
  };

  const handleReviewRatingChange = (newRating) => {
    console.log(`User rated the product: ${newRating} stars`);
    setRating(newRating);
  };

  return (
    <div className="product-view">
      <div className="product-image">
        <img src="https://www.dataworld.co.ke/wp-content/uploads/2023/04/image-removebg-preview-69.png" alt="Product Image" />
        <div className="thumbnail-images">
          <img src="https://www.acornnetworks.com/wp-content/uploads/2021/09/HP-290-G4-Microtower-PC.png" alt="Thumbnail 1" />
          <img src="https://marksoniccomputers.com/wp-content/uploads/2021/09/c06528251-1.png" alt="Thumbnail 2" />
          <img src="https://first-tech.dz/672-large_default/micro-de-bureau-hp-290-g4-mt-pn-1c6w8ea-.jpg" alt="Thumbnail 3" />
          {/* Add more thumbnail images here */}
        </div>
      </div>
      <div className="product-details">
        <h2>Hp Desktop</h2>
        <p>Hp 24 mm full HD ultra-thin monitor (HDMI, VGA).</p>
        <p className="product-price">Price: ksh.40,000</p>
        <div className="quantity-container">
          <button onClick={() => handleQuantityChange(-1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange(1)}>+</button>
        </div>
        <div className="buttons-container">
          <div className="button-wrapper">
            <button className="buy-now-button" onClick={handleBuyNowClick}>
              Buy Now
            </button>
            <button className="add-to-cart-button" onClick={handleAddToCartClick}>
              Add to Cart
            </button>
          </div>
          <div className="reviews">
            <h3>Reviews</h3>
            <div className="review">
              <div className="review-content">
                <div className="star-rating">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={index < rating ? 'star-filled' : 'star-outline'}
                      onClick={() => handleReviewRatingChange(index + 1)}
                    />
                  ))}
                </div>
                <div>More for the money with this high quality.</div>
              </div>
              <div className="review-metadata">
                <div>
                <span className="review-rating">⭐⭐⭐⭐⭐</span>
                </div>
                <span className="review-author">John Doe</span>
                <span className="review-date">26/7/23</span>
              </div>
            </div>
            {/* Add more reviews here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
