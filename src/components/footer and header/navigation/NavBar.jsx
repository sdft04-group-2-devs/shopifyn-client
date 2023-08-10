import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import styled from '@emotion/styled';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './NavBar.css'
import Logo from '../../../../public/shopyfyn.png'


const NavBar = ({ currentUser, setCurrentUser, onSearch, handleCartClick}) => {
  const [showCart, setShowCart] = useState(false);
  const [searchItem, setSearchItem] = useState('')
  const navigate = useNavigate()
  


    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: -3,
          top: 13,
          // border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
      }));

      const handleSearch = (e) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)
        onSearch(searchTerm)
      }

      console.log(currentUser);

  return (
    <div className="nav-container">
      <div className="nav-container-logo">
        <img src={Logo} alt="Shopifyn" />
        <span><Link to={'/'}>Shopifyn</Link></span>
      </div>
      {/* <nav className="nav-container-nav">
        <div className="nav-container-navbar-items-left">

          <ul className="nav-container-navbar-items-left">
          <li>
            <Link to={"/"}>Home</Link>
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
          </div>

          <ul>
          <li>
            <Link to={"/login"}>Sign In</Link>
          </li>
          
            <IconButton>
              <PersonIcon />
              <a href="/account">Account</a>
            </IconButton>
          
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          
          <li>
            <a href="/contact">Log Out</a>
          </li>
        </ul>
        
      </nav> */}

      <div className="nav-container-nav">
        <div className="nav-container-navbar-menu">
          <ul className="nav-container-navbar-menu">
            <Link to={'/'}>Home</Link>
            <Link to={'/products'}>Products</Link>
            <Link>About Us</Link>
            <Link>Contact Us</Link>
          </ul>
        </div>

        <input type="search" className="nav-container-navbar-search" placeholder="search" />

        <button onClick={handleCartClick}><ShoppingCartIcon className="nav-container-navbar-cart" /></button>

        <PersonIcon className="nav-container-navbar-user" />
        <p>welcome</p>

      </div>

    </div>
  );
};

export default NavBar;
