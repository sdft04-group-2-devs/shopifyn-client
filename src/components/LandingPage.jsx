import React from 'react'
import './LandingPage.css'
import background_img from '../../public/background-img.jpg'
import Footer from './Footer'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { Badge, IconButton } from '@mui/material';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';


const LandingPage = () => {

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      // border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  
  return (
   
    <>
      <div className="header">
        <div className="logo">
        <h1>Shopifyn</h1>
      </div>
      <nav className="nav">
        <ul className="navbar-items-left">
          <li>
            {/* <a href="/">Home</a> */}
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          
        </ul>
        <ul className="navbar-items-right">
        <li>
            {/* <a href="/contact">Sign In</a> */}
            <Link to={'/login'}>Sign In</Link>
          </li>
          <li>
            <IconButton>
                <PersonIcon/>
                <a href="/account">Account</a>
            </IconButton>
           
          </li>
          <li>
            <IconButton aria-label='cart'>
                {/* <ShoppingCartIcon/>
                <a href="/cart">Cart</a> */}
                <StyledBadge badgeContent={4} color='secondary'>
                    <ShoppingCartIcon/>
                </StyledBadge>
                
            </IconButton>
           
          </li>
          <li>
            <a href="/contact">Log Out</a>
          </li>
        </ul>
      </nav>
    </div>
    <div className='image-container'>
        {/* <img src={background_img} alt="" /> */}
        <div className='text'>
            <h1> You order, we deliver</h1>
            <p> At Shopifyn, we are passionate about technology and committed to bringing you the best selection of computers and accessories. Whether you are a tech enthusiast, a gamer, a creative professional, or just looking for a reliable workhorse, we have the perfect solution for you.</p>
        </div>
        <div>
            <button className='view' onClick={() => {
              fetch("")
              .then(res => res.json())
              
            }}
                     
            
            >Explore our Products</button>
        </div>
    </div>
    <div className='image-box'>
        <h1>Grab upto 50% Off on Selected Computers and Accessories</h1>
        <img src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07062905.png" alt="" className = 'monitor'/>
        <button>Shop Now</button>
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