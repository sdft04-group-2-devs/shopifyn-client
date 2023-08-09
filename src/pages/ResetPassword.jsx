import React, { useState } from 'react';
import './ResetPassword.css';
import EllipseImage from './assets/img.png';


const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleResetPassword = (e) => {
    e.preventDefault();
    if (newPassword.length < 6 || !/\d/.test(newPassword)) {
      setErrorMessage('New password must be at least 6 characters long and contain numbers.');
    } else if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
    } else {
      fetch('http://[::1]:3000/users/password_reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newPassword }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Password reset successful');
          setNewPassword('');
          setConfirmPassword('');
          setErrorMessage('');
        })
        .catch((error) => {
          console.error('Error occurred during password reset:', error);
        });
    }
  };
  return (
     <div className="Reset-password-container">
      <div className="Reset-password-form-container">
        <h1>Reset Password</h1>
        <form onSubmit={handleResetPassword}>
          <div className="New-password-input-wrapper">
            <label>New Password:</label>
            <input
              type="password"
              name="newPassword"
              value={newPassword}
              onChange={handleNewPasswordChange}
            />
          </div>
          <div className="Confirm-password-input-wrapper">
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
          <button type="submit">Reset Password</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Show error message */}

        </form>
      </div>
      <div className="image-container">
        <img src={EllipseImage} alt="Ellipse" className="ellipse-image" />
      </div>
    </div>
  );
};
export default ResetPassword;