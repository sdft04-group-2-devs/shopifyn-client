import React, { useState } from 'react'
import { FormControl, InputLabel, TextField } from '@mui/material';
import './Profile.css'
import ellipseImage from "../assets/img.png";

const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone_no: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <div className="form-container">
        <h1>User Profile</h1>
      <form onSubmit={handleUpdate}>
        <div className="input-wrapper">
        <img className='profile-image' src='https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png' alt="Profile" />
      {/* <Avatar src='https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png' alt="Profile" /> */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files[0];
          const reader = new FileReader();
          reader.onloadend = () => {
            setProfilePicture(reader.result);
          };
          if (file) {
            reader.readAsDataURL(file);
          }
        }}
      />
        </div>
          <div className="input-wrapper">
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
          <div className="input-wrapper">
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
          <div className="input-wrapper">
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

          
          <button type="submit" onClick={handleUpdate}>
            Update Profile
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateProfile