// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section with dynamic text animation */}
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="animated-text">Welcome to Our Payroll Software</h1>
          <p>Efficient, reliable, and easy to use payroll management.</p>
          {/* Link to the login selection page */}
          <Link to="/login-selection" className="cta-button">Get Started</Link>
        </div>
      </header>

      {/* Information Section */}
      <section className="info-section">
        <h2>Why Choose Us?</h2>
        <p>Our payroll software offers a range of features to streamline your payroll process and ensure accuracy.</p>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Have questions? Reach out to us!</p>
        <ul>
          <li><a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
          <li><a href="https://www.linkedin.com/company/your-company" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://your-website.com" target="_blank" rel="noopener noreferrer">Website</a></li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
