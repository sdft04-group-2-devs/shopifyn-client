/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import './LogInPage.css';
import EllipseImage from './assets/img.png';
const LogInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogIn = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      // toast.error("Please fill in all fields");
      console.error('Please fillin all fields');
    } else {
      // Perform login logic here
      fetch("http://localhost:3000/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
      })
      .then((response) => {
        if (response.ok) {
          console.log('Logged in successfully');
          // Do any other logic you need after successful login
          alert(response.json())
        } else {
          console.error('Failed to log in');
        }
      })
      .catch((error) => {
        console.error('Error occurred during login:', error);
      });
      // toast.success("Logged in successfully!");
      console.log('Logged in successfully');
    }
  };
  return (
    <>
      {/* <ToastContainer /> */}
      <div className="login-container">
        <div className="form-container">
          <h1>Log In</h1>
          <form onSubmit={handleLogIn}>
            <div className="input-wrapper">
              <label>Email:</label>
              <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-wrapper">
              <label>Password:</label>
              <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Log In</button>
          </form>
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
          <p>
            Forgot your password? <Link to="/reset-password">Reset Password</Link>
          </p>
        </div>
        <div className="image-container">
            <img src={EllipseImage} alt="Ellipse" className="ellipse-image" />
          </div>
      </div>
    </>
  );
};
export default LogInPage;






