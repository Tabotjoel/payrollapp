// src/pages/LoginPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-selection">
      <h1 className="login-title">Login</h1>
      <div className="login-options">
        <Link to="/admin-login" className="login-button">Admin Login</Link>
        <Link to="/user-login" className="login-button">User Login</Link>
      </div>
    </div>
  );
};

export default LoginPage;
