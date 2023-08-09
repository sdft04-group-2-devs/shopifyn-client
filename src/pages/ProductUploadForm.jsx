import React, { useState } from 'react';
import './ProductUploadForm.css';

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
      // send the data to a backend server
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
     <div>
  <div className="header">
  <button onClick={() => window.location.href = '/'} className="back-to-home-button">Back to Home</button>
  <button onClick={() => window.location.href = '/logout'} className="header-button">Log Out</button>
  <button onClick={() => window.location.href = '/products'} className="header-button">Products</button>
  <div className="dropdown">
    <button className="Categories-button">Categories</button>
    <div className="dropdown-content">
    </div>
  </div>
  <button onClick={() => window.location.href = '/logout'} className="header-button">Log Out</button>
</div>
    <div className="product-upload-card">
      <h3 className="product-upload-heading">Upload Product</h3>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        className="product-name"
      />
      <textarea
        placeholder="Product Description"
        value={productDescription}
        onChange={(e) => setProductDescription(e.target.value)}
        className="product-description"
      />
      <input
        type="number"
        placeholder="Product Price"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
        className="product-price"
      />
      <input type="file" multiple onChange={handleImageChange} className="product-image-upload" />
      <button onClick={handleUpload} className="product-upload-button">Upload</button>
      {uploadSuccess && <p className="upload-success">Upload successful!</p>}
      <button onClick={() => window.location.href = '/my-dashboard'} className="go-to-dashboard-button">Go to dashboard</button>
    </div>
  </div>
);
}

export default ProductUploadForm;
