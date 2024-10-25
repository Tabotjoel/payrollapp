import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo-image" />
        <Link to="/" className="logo-text">Massert Payroll App</Link>
      </div>
      <ul className="navbar-right">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login-selection">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
