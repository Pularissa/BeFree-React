import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Homepage from './homepage';
import Login from './login';
import Welcoming from './Welcoming';
import Dashboard from './App.jsx';
import Counsel from './Counsel';
import MeetingSchedule from './MeetingSchedule.jsx';
import Testimonies from './testimonies.jsx';
import Schedule from './meeting.jsx';

function ProtectedRoute({ children }) {
  const location = useLocation();
  const isAuthenticated = window.localStorage.getItem('isAuthenticated') === 'true';

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Welcoming />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/counsel" element={<ProtectedRoute><Counsel /></ProtectedRoute>} />
        <Route path="/meetings" element={<ProtectedRoute><MeetingSchedule /></ProtectedRoute>} />
        <Route path="/testimonies" element={<ProtectedRoute><Testimonies /></ProtectedRoute>} />
        <Route path="/schedule" element={<ProtectedRoute><Schedule /></ProtectedRoute>} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
