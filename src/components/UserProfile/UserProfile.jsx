/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './UserProfile.css';
const UserProfile = ({ userId, email: initialEmail, username: initialUsername, onChangeUsername }) => {
  const [email, setEmail] = useState(initialEmail);
  const [profileImage, setProfileImage] = useState("https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg");
  const [newEmail, setNewEmail] = useState("");
  const [newUsername, setNewUsername] = useState("");
  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setEmail(savedEmail);
    }
    const savedProfileImage = localStorage.getItem("profileImage");
    if (savedProfileImage) {
      setProfileImage(savedProfileImage);
    }
  }, []);
  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
  };
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setEmail(newEmail);
    setNewEmail("");
    localStorage.setItem("email", newEmail);
    fetch(`http://localhost:3000/users/${userId}/email`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: newEmail }),
    })
      .then((response) => response.json())
      .then((data) => {
        setEmail(data.email);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  const handleUsernameChange = (e) => {
    setNewUsername(e.target.value);
  };
  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    onChangeUsername(newUsername);
    setNewUsername("");
    fetch(`http://localhost:3000/users/${userId}/username`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: newUsername }),
    })
      .then((response) => response.json())
      .then((data) => {
        setNewUsername(data.username);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  const handleImageChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImage(reader.result);
        localStorage.setItem("profileImage", reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <div className="profile-card-container">
      <div className="profile-card">
        <div className="profile-image">
          <img src={profileImage} alt="profile pic" />
          <label htmlFor="image-upload">
            Change Profile Image
            <input
              id="image-upload"
              type="file"
              onChange={handleImageChange}
              accept="image/*"
            />
          </label>
        </div>
        <div className="profile-info">
          <h2>{initialUsername}</h2>
          <form onSubmit={handleUsernameSubmit}>
            <input
              type="text"
              value={newUsername}
              onChange={handleUsernameChange}
            />
            <button type="submit">Change Username</button>
          </form>
          <p>Email: {email}</p>
          <form onSubmit={handleEmailSubmit}>
            <input
              type="email"
              value={newEmail}
              onChange={handleEmailChange}
            />
            <button type="submit">Change Email</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;