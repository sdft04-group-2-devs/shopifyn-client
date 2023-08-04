import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import styled from '@emotion/styled';
import React from "react";
import { Link } from "react-router-dom";


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
    <div className="header">
      <div className="logo">
        <h1>Shopifyn</h1>
      </div>
      <nav className="nav">
        <ul className="navbar-items-left">
          <li>
            {/* <a href="/">Home</a> */}
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
        <ul className="navbar-items-right">
          <li>
            {/* <a href="/contact">Sign In</a> */}
            <Link to={"/login"}>Sign In</Link>
          </li>
          <li>
            <IconButton>
              <PersonIcon />
              <a href="/account">Account</a>
            </IconButton>
          </li>
          <li>
            <IconButton aria-label="cart">
              {/* <ShoppingCartIcon/>
                <a href="/cart">Cart</a> */}
              <StyledBadge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </li>
          <li>
            <a href="/contact">Log Out</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
