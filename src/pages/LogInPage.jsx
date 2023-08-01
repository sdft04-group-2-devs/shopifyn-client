/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './LogInPage.css';
import EllipseImage from './assets/img.png';
const LogInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogIn = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      toast.error("Please fill in all fields");
    } else {
      // Perform login logic here
      toast.success("Logged in successfully!");
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="signup-container">
        <div className="signup-div">
          <div className="ellipse-container">
            <img src={EllipseImage} alt="Ellipse" className="ellipse-image" />
          </div>
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
      </div>
    </>
  );
};
export default LogInPage;






