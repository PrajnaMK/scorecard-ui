import React from 'react';
import './App.css';
import logo from './assets/Patton-Labs-Logo.png';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ScorecardPage from './components/ScorecardPage';
import UserManagementPage from './components/UserManagementPage';

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <div className="animated-bg"></div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
          <div className="navbar-container">

            {/* Logo (left aligned) */}
            <a className="navbar-brand" href="https://pattonlabs.com/" target="_blank" rel="noopener noreferrer">
              <img src={logo} alt="Patton Labs" height="50" className="d-inline-block align-text-top" />
            </a>

            {/* Right-side link */}
            <div className="d-flex justify-content-end">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="https://pattonlabs.com/about-us/" target="_blank" rel="noopener noreferrer">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </nav>

        <Routes>
          {/* Redirect '/' to '/login' */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/scorecards" element={<ScorecardPage />} />

          <Route path="/users" element={<UserManagementPage />} />

          {/* Optional: home dashboard after login */}
          <Route
            path="/home"
            element={
              <div className="container text-center mt-5 text-white">
                <h2 className="fw-bold">PATTON LABS SCORECARD SYSTEM</h2>
                <p>We manage users and scorecards efficiently for our clients</p>
                <div className="mt-4">
                  <Link to="/users" className="button button-white">Manage Users</Link>
                  <span>&nbsp;&nbsp;</span>
                  <Link to="/scorecards" className="button button-red">Manage Scorecards</Link>
                </div>
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
