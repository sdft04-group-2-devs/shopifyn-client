import { Avatar, Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import Logo from "../../../../public/shopyfyn.png";

const NavBar = ({
  userRole,
  currentUser,
  setCurrentUser,
  onSearch,
  handleCartClick,
}) => {
  const [showCart, setShowCart] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const navigate = useNavigate();
  console.log(userRole);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      // border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  const handleLogout = () => {
    fetch("http://localhost:3000/logout", {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setCurrentUser(null);
          sessionStorage.removeItem("user");
          alert("Logged out successfully");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
    onSearch(searchTerm);
  };

  console.log(currentUser);

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
            <Link to={"/"}>Home</Link>
            <Link to={"/products"}>Products</Link>
            {userRole === "Seller" ? (
              <Link to={"/seller/dashboard"}>Dashboard</Link>
            ) : null}
            <Link>About Us</Link>
            <Link>Contact Us</Link>
          </ul>
        </div>

        {/* <input type="search" className="nav-container-navbar-search" placeholder="search" /> */}

        <button
          onClick={
            handleCartClick
          }
        >
          <ShoppingCartIcon className="nav-container-navbar-cart" />
        </button>
        {
          currentUser ? (<Avatar alt={currentUser.user.username} src="/static/images/avatar/1.jpg" />) : <Avatar alt='Null' src="/static/images/avatar/1.jpg" />
        }

        
        {currentUser ? (
          <>
            <p id="welcome_text">Hello, {currentUser.user.username}</p>
            <button
              className="logout_header__button"
              onClick={handleLogout}
              style={{ marginRight: "20px" }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="logout_header__button"> Log In</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
