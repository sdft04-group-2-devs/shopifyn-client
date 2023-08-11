/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import "./SignUpPage.css";
import ellipseImage from "./assets/img.png";
import {
  Alert,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone_no: "",
    role: "",
    password: "",
    password_confirmation: ""
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const isStrongPassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*]/.test(password);
    const isLongEnough = password.length >= 8;

    return (
      hasUpperCase &&
      hasLowerCase &&
      hasNumber &&
      hasSpecialCharacter &&
      isLongEnough
    );
  };

  let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const handleSignUp = (e) => {
    e.preventDefault();
    if (
      formData.username === "" ||
      formData.email === "" ||
      formData.phone === "" ||
      formData.role === "" ||
      formData.password === "" 
    ) {
      // toast.error("Please fill in all fields");
      console.log("Fields cannot be empty");
      alert("Fields cannot be empty");

      return;
    } else if (formData.password !== formData.password_confirmation) {

      alert("Passwords do not match");
      console.error("Passwords do not match");
      return;
      }
    else if (!validateEmail(formData.email)){
      alert("Enter correct email format!");
      return;
    } else if (formData.phone_no.length < 10 || formData.phone_no.length > 13 ) {
      alert('Enter Correct Phone Number')
      return
    }
     else {
      // Perform signup logic here
      // <Alert severity="success">Signed Up Successfully</Alert>;
      fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => {
          if (res.ok) {
            res.json().then((user) => {
              alert("Signed up successfully");
              // toast.success("Signed up successfully!");
              // console.log("Signed Up Successfully");
              console.log(user);
              console.log(formData);
              navigate("/login");
            });
          } else {
            console.log(formData);
            alert("Error:", res.status);
          }
        })
        .catch((error) => {
          console.log(formData);
          alert("Error:", error);
         
        });
    }
  };
  return (
    <>
    {/* <ToastContainer /> */}
    <div className="signup-container">
      <div className="signup-form-container">
        <h1 className="signup-heading">Sign Up</h1>
        <form className="signup-form" onSubmit={handleSignUp}>
          <div className="signup-input-wrapper">
            {/* <label>Username:</label> */}
            {/* <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} /> */}
            <TextField
              label="Username"
              variant="outlined"
              value={formData.username}
              name="username"
              type="text"
              onChange={handleChange}
              fullWidth
              required
            />
          </div>
          <div className="signup-input-wrapper">
            {/* <label>Email:</label> */}
            {/* <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /> */}
            <TextField
              label="Email"
              variant="outlined"
              value={formData.email}
              name="email"
              type="email"
              onChange={handleChange}
              fullWidth
              required
            />
          </div>
          <div className="signup-input-wrapper">
            {/* <label>Phone Number:</label> */}
            {/* <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} /> */}
            <TextField
              label="Phone Number"
              variant="outlined"
              value={formData.phone_no}
              name="phone_no"
              type="text"
              onChange={handleChange}
              fullWidth
              required
            />
          </div>

          <div className="signup-input-wrapper">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData.role}
                name="role"
                label="Role"
                onChange={handleChange}
              >
                <MenuItem value={"Buyer"}>Buyer</MenuItem>
                <MenuItem value={"Seller"}>Seller</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="signup-input-wrapper">
            {/* <label>Password:</label> */}
            {/* <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /> */}
            <TextField
              label="Password"
              variant="outlined"
              value={formData.password}
              name="password"
              type="password"
              onChange={handleChange}
              fullWidth
              required
            />
          </div>
          <div className="signup-input-wrapper">
            {/* <label>Confirm Password:</label> */}
            {/* <input type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /> */}
            <TextField
              label="Confirm Password"
              variant="outlined"
              value={formData.password_confirmation}
              name="password_confirmation"
              type="password"
              onChange={handleChange}
              fullWidth
              required
            />
          </div>
          <button className="signup-button" type="submit" onClick={handleSignUp}>
            Sign Up
          </button>
        </form>
        <p className="signup-to-login">
          Have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
      <div className="signup-image-container">
        <img src={ellipseImage} alt="Ellipse" className="signup-ellipse-image" />
      </div>
    </div>
    </>
  );
};
export default SignUpPage;
