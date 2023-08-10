import React from 'react'
import './LandingPage.css'
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/footer and header/Footer';
import NavBar from '../../components/footer and header/navigation/NavBar';


const LandingPage = ({showCart, handleSearch, handleCartClick,products, isAuthenticated, setCurrentUser, currentUser}) => {
    const navigate = useNavigate()

    const handleExploreProductsClick = () => {
        navigate('/products'); // Navigate to the 'products' page when the button is clicked
      };
  
  return (
   
    <>
        <NavBar showCart={showCart} isAuthenticated={isAuthenticated} currentUser={currentUser} setCurrentUser={setCurrentUser} handleSearch={handleSearch} handleCartClick={handleCartClick} />
    <div className='image-container'>
        {/* <img src={background_img} alt="" /> */}
        <div className='text'>
            <h1> You order, we deliver</h1>
            <p> At Shopifyn, we are passionate about technology and committed to bringing you the best selection of computers and accessories. Whether you are a tech enthusiast, a gamer, a creative professional, or just looking for a reliable workhorse, we have the perfect solution for you.</p>
            <button onClick={handleExploreProductsClick}>Shop Now</button>
        </div>
        {/* <div>
        <button onClick={handleExploreProductsClick} className='explore-button'>
          Explore our Products
        </button>
        <button>Shop Now</button>
        </div> */}
    </div>
    <div className='image-box'>
        <h1>Grab upto 50% Off on Selected Computers and Accessories</h1>
        <img src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07062905.png" alt="" className = 'monitor'/>
        {/* <button>Shop Now</button> */}
    </div>

    <div className='top-categories'>
        <h1>Shop our Top Categories</h1>
        <div className='categories'>
            <div className="images">
                <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" alt=""/>
                <h2>Laptops</h2>
            </div>
           
            <div className="images">
                <img src="https://images.unsplash.com/photo-1576082712237-eb1335ce23a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80" alt="headphones" />
                <h2>Headphones</h2>
            </div>

            <div className='images'>
                <img src="https://images.unsplash.com/photo-1613688270362-8b26189c0782?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
                <h2>Phones</h2>
            </div>

            <div className='images'>
                <img src="https://images.unsplash.com/photo-1544244015-9c72fd9c866d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=682&q=80" alt="" />
                <h2>Tablets</h2>
            </div>

            <div className='images'>
                <img src="https://images.unsplash.com/photo-1547658718-1cdaa0852790?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" alt="" />
                <h2>Monitors</h2>
            </div>
            
        </div>
    </div>
    <div className='best-deals'>
      <h1>Today's Best Deals For You</h1>
      
    </div>

  <Footer/>


  </>   
  )
}

export default LandingPage