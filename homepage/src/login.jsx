import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './login.css';
import loginImage from './assets/twopeople.png';


const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

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

    window.localStorage.setItem('isAuthenticated', 'true');

    const redirectTo = location.state?.from?.pathname || '/dashboard';
    navigate(redirectTo, { replace: true });
  };

  return (
    <div className="login-container">
      <h1>WELCOME TO <span>BeFree</span></h1>
      <div className="secondary">
        <div className="secondary-one">
          <img src={loginImage} alt="Login illustration" />
        </div>
        <div className="secondary-two">
          <p>LOG INTO YOUR <span>BeFree</span> ACCOUNT</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
            />
            
            <label htmlFor="password">Password: </label>
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