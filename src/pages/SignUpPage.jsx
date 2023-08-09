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
  // const [showPassword, setShowPassword] = React.useState(false);

  // const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone_no: "",
    role: "",
    password: "",
    confirm_password: "",
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
      formData.password === "" ||
      formData.confirm_password === ""
    ) {
      // toast.error("Please fill in all fields");
      console.log("Fields cannot be empty");
      alert("Fields cannot be empty");
      // <Stack sx={{ width: '100%' }} spacing={2}>
      //   <Alert severity="error">Fields cannot be empty!</Alert>;
      // </Stack>

      return;
    } else if (formData.password !== formData.confirm_password) {
      // toast.error("Passwords do not match");
      // <Stack sx={{ width: '100%' }} spacing={2}>
      //   <Alert severity="error">Passwords do not match!</Alert>;
      // </Stack>

      alert("Passwords do not match");
      console.error("Passwords do not match");
      return;
      // } else if (isStrongPassword(formData.password)) {
      //   // toast.error("Passwords do not match");
      //   // <Alert severity="error">
      //   //   password should contain atleast one number and one special character
      //   // </Alert>;
      //   alert('password should contain atleast one number and one special character')
      //   console.error("Enter a strong Password");
      //   return
      }else if (!validateEmail(formData.email)){
      alert("Enter correct email format!");
      return;
    } else {
      // Perform signup logic here
      // <Alert severity="success">Signed Up Successfully</Alert>;
      fetch("http://localhost:3000/users", {
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
              value={formData.confirm_password}
              name="confirm_password"
              type="password"
              onChange={handleChange}
              fullWidth
              required
              // InputProps={{
              //   endAdornment: (
              //     <IconButton
              //     aria-label="toggle password visibility"
              //     onClick={handleClickShowPassword}
              //     onMouseDown={handleMouseDownPassword}
              //     edge="end"
              //     >
              //       {showPassword ? <Visibility /> : <VisibilityOff />}
              //     </IconButton>
              //   )
              // }}
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
