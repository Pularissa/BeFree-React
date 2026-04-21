import React, { useState, useRef } from "react";
import "./meeting.css";

const users = [
  { name: "Dr Kent Mugabe", status: "Online", lastMessage: "Hello!!" },
  { name: "Pr. Nicholas Barore", status: "Online", lastMessage: "Alice joined!" },
  { name: "Keza Karinda", status: "Offline", lastMessage: "Welcome to the group" },
  { name: "Munezero Jessy", status: "Online", lastMessage: "Thanks see you then" },
  { name: "Youth advocates group", status: "typing...", lastMessage: "" },
];

export default function Counsel() {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [messages, setMessages] = useState([
    { from: "Dr Kent Mugabe", text: "Hello!!" },
    { from: "me", text: "Hey there, How are you doing?" },
    {
      from: "Dr Kent Mugabe",
      text: "I heard that you were among the improving addicts and I just wanted you to give me advice on how to not backdown in this journey",
    },
    {
      from: "me",
      text: "what you need to do is to find a hobby. yeah mainly make yourself busy it will help a lot",
    },
    { from: "Dr Kent Mugabe", text: "Thank you so much" },
    { from: "me", text: "yeah. come any time for advice" },
  ]);
  const [input, setInput] = useState("");
  const fileInputRef = useRef(null);

  const sendMessage = () => {
    if (!input) return;
    setMessages([...messages, { from: "me", text: input }]);
    setInput("");
  };

  const handleAttachClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="chat-container">
      {/* Sidebar */}
      <div className="chat-sidebar">
        <div className="chat-search">
          <input type="text" placeholder="Search Conversations" />
        </div>
        <div className="chat-users">
          {users.map((user, i) => (
            <div
              key={i}
              className={`chat-user ${selectedUser.name === user.name ? "active" : ""}`}
              onClick={() => setSelectedUser(user)}
            >
              <div className="avatar">{user.name.charAt(0)}</div>
              <div className="user-info">
                <p>{user.name}</p>
                <small>{user.lastMessage}</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat */}
      <div className="chat-main">
        <div className="chat-header">
          <div className="header-title">
            <div className="name">{selectedUser.name}</div>
            <div
              className={`status ${
                selectedUser.status.toLowerCase() === "online"
                  ? "online"
                  : selectedUser.status.toLowerCase() === "typing..."
                  ? "typing"
                  : ""
              }`}
            >
              {selectedUser.status}
              {selectedUser.status.toLowerCase() === "online" && (
                <span className="status-circle"></span>
              )}
            </div>
          </div>
        </div>
        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-message ${msg.from === "me" ? "sent" : "received"}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <div className="input-wrapper">
            <button
              type="button"
              className="icon-button left"
              onClick={handleAttachClick}
              aria-label="Attach file"
              title="Attach file"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.44 11.05l-8.49 8.49a5.5 5.5 0 01-7.78-7.78l9.19-9.19a4 4 0 115.66 5.66L9.88 18.86a2.5 2.5 0 11-3.54-3.54l8.49-8.49" />
              </svg>
            </button>
            <input
              type="text"
              placeholder="Type your message here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              type="button"
              className="icon-button right"
              aria-label="Emoji"
              title="Emoji"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
            </button>
            <input type="file" ref={fileInputRef} style={{ display: "none" }} />
          </div>
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>

      {/* Profile Panel */}
      <div className="chat-profile">
        <div className="profile-avatar">{selectedUser.name.charAt(0)}</div>
        <h3>{selectedUser.name}</h3>
        <p>Mobile: +250 788856497</p>
        <p>Email: kentmugabe@gmail.com</p>
        <p>Date of birth: 27/12/1989</p>
      </div>
    </div>
  );
}
