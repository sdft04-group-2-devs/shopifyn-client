import React, { useState } from 'react';
import './ProductUploadForm.css';
import NavBar from '../components/footer and header/navigation/NavBar';
import Footer from '../components/footer and header/Footer';

const ProductUploadForm = ({ onUpload }) => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImages, setProductImages] = useState([]);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleImageChange = (event) => {
    const selectedImages = Array.from(event.target.files);
    setProductImages(selectedImages);
  };

  const handleUpload = () => {
    if (productName && productDescription && productPrice && productImages.length > 0) {
      // send the data to our backend server
      setUploadSuccess(true);
      onUpload({
        name: productName,
        description: productDescription,
        price: productPrice,
        images: productImages,
      });
      
      setProductName('');
      setProductDescription('');
      setProductPrice('');
      setProductImages([]);

    }
  };

  return (
    <>
    <NavBar/>
     <div>
  <div>
      <button onClick={() => window.location.href = '/'} class="header-button">Back to Home</button>
      <button onClick={() => window.location.href = '/products'} class="header-button">Products</button>
      <div class="dropdown">
        <button class="Categories-button">Categories</button>
        <div class="dropdown-content">
          <a href="/category/phones">Phones</a>
          <a href="/category/laptops">Laptops</a>
          <a href="/category/woofers">Woofers</a>
          <a href="/category/desktops">Desktops</a>
        </div>
    </div>
    <button onClick={() => window.location.href = '/signup'} class="header-button">Log Out</button>
  </div>
    <div className="product-upload-card">
      <h3 className="product-upload-heading">Upload Product</h3>
      <label for="product-name">Product Name:</label>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        className="product-name-input"
      />
      <label for="Description">Description:</label>
      <textarea
        value={productDescription}
        onChange={(e) => setProductDescription(e.target.value)}
        className="product-description-input"
      />
      <label for="product-price-input">Product Price:</label>
      <input
        type="number"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
        className="product-price-input"
      />
      <input type="file" multiple onChange={handleImageChange} className="product-image-upload" />
      <button onClick={handleUpload} className="product-upload-button">Upload</button>
      {uploadSuccess && <p className="upload-success">Upload successful!</p>}
      <button onClick={() => window.location.href = '/my-dashboard'} className="go-to-dashboard-button">Go to dashboard</button>
    </div>
  </div>
  <Footer/>
  </>
);
}

export default ProductUploadForm;
