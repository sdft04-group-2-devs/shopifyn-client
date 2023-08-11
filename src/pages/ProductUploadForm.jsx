import React, { useState } from 'react';
import './ProductUploadForm.css';
import NavBar from '../components/footer and header/navigation/NavBar';
import Footer from '../components/footer and header/Footer';
import { useNavigate } from 'react-router-dom';

// const ProductUploadForm = ({ onUpload }) => {
//   const [productName, setProductName] = useState('');
//   const [productDescription, setProductDescription] = useState('');
//   const [productPrice, setProductPrice] = useState('');
//   const [productImages, setProductImages] = useState([]);
//   const [uploadSuccess, setUploadSuccess] = useState(false);

//   const handleImageChange = (event) => {
//     const selectedImages = Array.from(event.target.files);
//     setProductImages(selectedImages);
//   };

  

//       //fetch 

//       console.log(set)
      
//       setProductName('');
//       setProductDescription('');
//       setProductPrice('');
//       setProductImages([]);

//     }
//   };

const  ProductUploadForm = () => {
  const navigate = useNavigate()

  const handleUpload = () => {
    if (productName && productDescription && productPrice && productImages.length > 0) {
      // send the data to our backend server
      setUploadSuccess(true);
      let set = {
        name: productName,
        description: productDescription,
        price: productPrice,
        images: productImages,
      };
    }
    }

  function handleSubmit(event){
      event.preventDefault()

      const name = event.target[0].value
      const price = event.target[1].value
      const description = event.target[2].value
      const brand = event.target[3].value
      const stock_quantity = event.target[4].value
      const category = event.target[5].value
      const image_url_1 = event.target[6].value
      const image_url_2 = event.target[7].value
      const image_url_3 = event.target[8].value
      

   fetch("http://[::1]:3000/products", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          name: name,
          price: price,
          description: description,
          brand: brand,
          stock_quantity: stock_quantity,
          category: category,
          image_url_1:image_url_1,
          image_url_2:image_url_2,
          image_url_3:image_url_3

      })
   })
   event.target.reset()
     
  }
  

  return (
    <>
     <div>
      <div>
      <button onClick={() => navigate('/')} className="header-button">Back to Home</button>
      <button onClick={() => navigate('/products')} className="header-button">Products</button>
      <div className="dropdown">
        <button className="Categories-button">Categories</button>
        <div class="dropdown-content">
          <a href="/category/phones">Phones</a>
          <a href="/category/laptops">Laptops</a>
          <a href="/category/woofers">Woofers</a>
          <a href="/category/desktops">Desktops</a>
        </div>
    </div>
  </div>
  <div>
    {/* <div className="product-upload-card">
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
      <input
       type="text" 
       placeholder='Image url'
       multiple onChange={handleImageChange} 
       className="product-image-upload" 
       />
      <button onClick={handleUpload} className="product-upload-button">Upload</button>
      {uploadSuccess && <p className="upload-success">Upload successful!</p>}
      <button onClick={() => window.location.href = '/my-dashboard'} className="go-to-dashboard-button">Go to dashboard</button>
    </div> */}
    <div className="product-upload-card">
    <form className="add-product-form" onSubmit={handleSubmit}>
          <input className='input' required type='text' placeholder='Name' />
          <input className='input' required type='number' placeholder='Price' />
          <input className='input' required type='text' placeholder='Description' />
          <input className='input' required type='text' placeholder='Brand' />
          <input className='input' required type='number' placeholder='Stock_quantity' />
          <input className='input' required type='text' placeholder='Image_url_1' />
          <input className='input' required type='text' placeholder='Image_url_2' />
          <input className='input' required type='text' placeholder='Image_url_3' />

          <button onClick={handleUpload} className="product-upload-button">Upload</button>
          <button onClick={() => navigate('/seller/dashboard')} className="go-to-dashboard-button">Go to dashboard</button>

      </form>
      </div>
    </div>
  </div>
  </>
);
  
}

export default ProductUploadForm;
