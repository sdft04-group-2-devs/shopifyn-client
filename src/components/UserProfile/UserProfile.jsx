import React, { useState, useEffect } from 'react';
import './UserProfile.css';
import { Image, Transformation } from 'cloudinary-react';
import Axios from 'axios';
import ImageUpload from '../../ImageUpload';

const UserProfile = ({ email: initialEmail, username: initialUsername, onChangeUsername }) => {
  const [email, setEmail] = useState(initialEmail);
  const [profileImage, setProfileImage] = useState(
    "https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg"
  );
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
  };
  
  const handleUsernameChange = (e) => {
    setNewUsername(e.target.value);
  };
  
  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    onChangeUsername(newUsername);
    setNewUsername("");
  };

  const handleImageUploadSuccess = (result) => {
    console.log('Image upload successful:', result);
    setProfileImage(result.secure_url);
    localStorage.setItem('profileImage', result.secure_url);
  };

  const handleImageUploadError = (error) => {
    console.error('Image upload error:', error);
    alert('Error uploading image. Please try again.');
  };

  return (
    <div className="profile-card-container">
      <div className="profile-card">
        <div className="profile-image">
          <Image
            cloudName="dtg2cthkk"
            uploadPreset="idrisnoor"
            onSuccess={handleImageUploadSuccess}
            onError={handleImageUploadError}
          >
            <img src={profileImage} alt="profile pic" />
            <label htmlFor="image-upload">
              Change Profile Image
              <input
                id="image-upload"
                type="file"
                accept="image/*"
              />
            </label>
            <Transformation width="200" height="200" crop="fill" radius="max" />
          </Image>
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
            <ImageUpload />
            <button type="submit">Change Email</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
