// src/pages/UserLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserLogin.css';

const UserLogin = () => {
  const [companyName, setCompanyName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUserLogin = (e) => {
    e.preventDefault();
    // Verify user credentials (assuming you'll fetch these from a database)
    // For now, we'll simulate the login without real verification.
    if (companyName === 'testcompany' && password === 'testpassword') {
      navigate('/user-dashboard');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="user-login">
      <h1>User Login</h1>
      <form onSubmit={handleUserLogin}>
        <input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default UserLogin;
