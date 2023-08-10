import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import styled from '@emotion/styled';
import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'
import Logo from '../../../../public/shopyfyn.png'


const NavBar = () => {


    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: -3,
          top: 13,
          // border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
      }));

  return (
    <div className="nav-container">
      <div className="nav-container-logo">
        <img src={Logo} alt="Shopifyn" />
        <span>Shopifyn</span>
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
            <li>Home</li>
            <li>Products</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <input type="search" className="nav-container-navbar-search" placeholder="search" />

        <ShoppingCartIcon className="nav-container-navbar-cart" />

        <PersonIcon className="nav-container-navbar-user" />

      </div>

    </div>
  );
};

export default NavBar;
