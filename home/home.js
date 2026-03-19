import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="login-container">
      <h1>WELCOME TO BeFree</h1>
      <div className="secondary">
        <div className="secondary-one">
          <img src="path-to-your-image.jpg" alt="Login illustration" />
        </div>
        <div className="secondary-two">
          <p>LOG INTO YOUR BeFree ACCOUNT</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
            />
            
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            
            <button type="submit">LOGIN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;