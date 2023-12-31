/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import './LogInPage.css';
import EllipseImage from './assets/img.png';
// import { useAuth } from '../contexts/AuthContext';
const LogInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  // const {updateAuthToken} = useAuth()
  // const {updateUserId} = useUser()
  const [loggedInUser, setLoggedInUser] = useState(null)


  useEffect(() => {
    const storedUser = sessionStorage.getItem("user")
    if (storedUser) {
      const foundUser = JSON.parse(storedUser)
      setLoggedInUser(foundUser)
    }
  },[])

  const handleLogIn = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      // toast.error("Please fill in all fields");
      console.error('Please fillin all fields');
    } else {
      // Perform login logic here
      fetch("https://shopifyn-service.onrender.com/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
      })
      .then((response) => {
        if (response.ok) {
          response.json().then((user) => {
            console.log('Logged in successfully::', user);
            sessionStorage.setItem('user', JSON.stringify(user))
            setLoggedInUser(user)
          // after successful login...
          // updateAuthToken(user.token)
          // updateUserId(user.user)
          navigate('/')
          })
        } else {
          console.error('Failed to log in');
        }
      })
      .catch((error) => {
        console.error('Error occurred during login:', error);
      });
      // toast.success("Logged in successfully!");
      // console.log('Logged in successfully');
    }
  };
  return (
    <>
      {/* <ToastContainer /> */}
      <div className="login-container">
        <div className="login-form-container">
          <h1 className='login-heading'>Log In</h1>
          <form onSubmit={handleLogIn}>
            <div className="login-input-wrapper">
              <label>Email:</label>
              <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="login-input-wrapper">
              <label>Password:</label>
              <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className='login-button' type="submit">Log In</button>
          </form>
          <p className='login-to-signup'>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
          <p className='login-to-forgotpassword'>
            Forgot your password? <Link to="/reset-password">Reset Password</Link>
          </p>
        </div>
        <div className="login-image-container">
            <img src={EllipseImage} alt="Ellipse" className="login-ellipse-image" />
          </div>
      </div>
    </>
  );
};
export default LogInPage;






