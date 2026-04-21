import { useState } from "react";
import React from "react";
import "./MeetingSchedule.css";
import doc from "./assets/the.jpeg";

export default function MeetingSchedule() {
  const [activeTab, setActiveTab] = useState(2);

  const days = ["DAY 1", "DAY 2", "DAY 3"];

  const meetings = [
    {
      date: "21",
      month: "November",
      time: "05:00 AM - 06:00 AM",
      doctor: "Latest mental health doctors",
      by: "By KARAS Camp from Rugarama General Hospital",
    },
    {
      date: "21",
      month: "November",
      time: "12:00 PM - 01:00 PM",
      doctor: "Latest mental health doctors",
      by: "By RWANDA Camp from Bugesera youth intervention program",
    },
    {
      date: "21",
      month: "November",
      time: "07:00 PM - 10:00 PM",
      doctor: "Latest mental health doctors",
      by: "By MUFUBA Keza psychosocial counselors at Partners In Hope Center",
    },
  ];

  const recommended = {
    date: "23",
    month: "November",
    time: "08:00 AM - 09:00 AM",
    doctor: "Latest mental health doctors",
    by: "By 2024 renewed doctors from Nyange mentalization center",
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <img src="/logo.png" alt="BeFree Logo" />
          <span>BeFree</span>
        </div>

        <nav className="menu">
          <a className="menu-item" href="/dashboard">Home</a>
          <a className="menu-item" href="/counsel">Chatting</a>
          <a className="menu-item" href="/">Testimonies</a>
          <a className="menu-item active" href="/meetings">Meeting Schedule</a>
        </nav>

        <div className="menu bottom">
          <a className="menu-item" href="/dashboard">Profile</a>
          <a className="menu-item" href="/">Logout</a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="content">
        <h1>Meeting Schedule</h1>

        {/* Tabs */}
        <div className="tabs">
          {days.map((day, index) => (
            <button
              key={index}
              className={`tab ${activeTab === index + 1 ? "active" : ""}`}
              onClick={() => setActiveTab(index + 1)}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Meeting Cards */}
        <div className="meeting-list">
          {meetings.map((m, i) => (
            <div key={i} className="meeting-card">
              <div className="date">
                <p className="day">{m.date}</p>
                <p className="month">{m.month}</p>
              </div>
              <div className="time">{m.time}</div>
              <div className="details">
                <p className="title">{m.doctor}</p>
                <p className="by">{m.by}</p>
              </div>
              <img src={doc} alt="doctor" className="avatar" />
            </div>
          ))}
        </div>

        {/* Recommended */}
        <h2>Most recommended for you:</h2>
        <div className="meeting-card">
          <div className="date">
            <p className="day">{recommended.date}</p>
            <p className="month">{recommended.month}</p>
          </div>
          <div className="time">{recommended.time}</div>
          <div className="details">
            <p className="title">{recommended.doctor}</p>
            <p className="by">{recommended.by}</p>
          </div>
          <img src={doc} alt="doctor" className="avatar" />
        </div>
      </main>
    </div>
  );
}
