import React from "react";
import { useNavigate } from "react-router-dom";
import "./welcoming.css"; // import styles

import twopeople from "./assets/twopeople.png";


function Welcoming() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    window.localStorage.setItem('isAuthenticated', 'true');
    navigate('/dashboard', { replace: true });
  };

  return (
    <div>
      <h1>
        <b>WELCOME TO </b>
        <span style={{ color: "#00598B" }}>BeFree</span>
      </h1>

      <div className="secondary">
        {/* Left side */}
        <div className="secondary-one">
          <p>LET'S GET YOU STARTED</p>
          <img
            src={twopeople}
            alt="Two people"
            width="250"
            height="200"
          />
        </div>

        {/* Right side */}
        <div className="secondary-two">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="names" />

            <label htmlFor="number">Phone number:</label>
            <input type="text" id="number" name="number" />

            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />

            <button type="submit">SIGN UP</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Welcoming;
