// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import './SignUpPage.css';
import ellipseImage from './assets/img.png';
const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSignUp = (e) => {
    e.preventDefault();
    if (username === "" || email === "" || phone === "" || password === "" || confirmPassword === "") {
      // toast.error("Please fill in all fields");
    } else if (password !== confirmPassword) {
      // toast.error("Passwords do not match");
      // console.error('Passwords do not match');
    } else {
      // Perform signup logic here
      // toast.success("Signed up successfully!");
      console.log('Signed Up Successfully');
    }
  };
  return (
    <>
      {/* <ToastContainer /> */}
      <div className="signup-container">
        <div className="signup-div">
          <div className="ellipse-container">
            <img src={ellipseImage} alt="Ellipse" className="ellipse-image" />
          </div>
          <h1>Sign Up</h1>
          <form onSubmit={handleSignUp}>
            <div className="input-wrapper">
              <label>Username:</label>
              <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="input-wrapper">
              <label>Email:</label>
              <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-wrapper">
              <label>Phone Number:</label>
              <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="input-wrapper">
              <label>Password:</label>
              <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="input-wrapper">
              <label>Confirm Password:</label>
              <input type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <p>Have an account? <Link to="/login">Sign in</Link></p>
        </div>
      </div>
    </>
  );
};
export default SignUpPage;