import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import icon from "./assets/icon-natural.png"
import Profile from "./assets/profilepic.jpg"
import peer from "./assets/download.jpg"
import cardpeer from "./assets/images.jpg"
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img style={{borderRadius: "50%",
  height: "90px"}} src={icon} alt="" />
        BeFree</div>
      <ul>
        <li><Link className="a" to="/dashboard">🏠 Home</Link></li>
        <li><Link className="a" to="/counsel">💬 Chatting</Link></li>
        <li><Link className="a" to="/testimonies">📝 Testimonies</Link></li>
        <li><Link className="a" to="/meetings">📅 Meeting Schedule</Link></li>
        <li><Link className="a" to="/schedule">🗓 Schedule</Link></li>
      </ul>
      <div className="sidebar-bottom">
        <div className="profile">👤 Profile</div>
        <Link className="logout" to="/">⬅ Logout</Link>
      </div>
    </div>
  );
}
var name="John"
function Header() {
  return (
    <div className="header">
      <img src={Profile}
        alt="user"
        className="profile-pic"
      />
      <h2 style={{color:"black"}}>{name}</h2>
    </div>
  );
}

function Content() {
  return (
    <div className="content">
      <h1 style={{color:"black", fontSize:"30px"}}>
        Welcome back {name} 👋, <br />
        <span className="highlight">
          We're glad to see you again. Remember, every step forward is progress.
        </span>
      </h1>

      <div className="card quote">
        <p >
          <span className="quote-mark">❝</span><b> Your future is brighter than
          the haze of today. Let go of the drugs, and take hold of the life you
          deserve. </b><span className="quote-mark">❞</span>
        </p>
      </div>

      <h3 style={{color:"black"}} >Your meeting today</h3>
      <div className="card meeting">
        <div className="date">
          <h2>21</h2>
          <p>November</p>
          <small>08:05 AM - 08:50 AM</small>
        </div>
        <div className="meeting-info">
          <img
            src={peer}
            alt="doctor"
            className="profile-pic"
          />
          <p>
            <b>Latest mental health doctors</b>
            <br /> By KARISA Emmy from Ruhengeri district hospital
          </p>
        </div>
      </div>

      <h3 style={{color:"black"}}>Hear from peers:</h3>
      <div className="card peer">
        <img
          src={cardpeer}          alt="peer"
          className="pic"
        />
        <div>
          <h4>Shyaka - Peaceful</h4>
          <p>
            “Thanks to the support I received, I’ve found peace and purpose
            beyond addiction.”
          </p>
        </div>
      </div>

      <p className="footer">
        <i>BeFree – Twese hamwe, Urubyiruko rudafite ibiyobyabwenge</i>
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
