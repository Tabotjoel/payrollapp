import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LoginPage/LoginPage';
import AdminLoginPage from './Pages/LoginPage/AdminLogin';
import UserLoginPage from './Pages/LoginPage/UserLogin';
import AdminDashboard from './Pages/DashboardPage/AdminDashboard';
import UserDashboard from './Pages/DashboardPage/UserDashboard';
import EmployeeManagement from './Pages/DashboardPage/EmployeeManagement';
import PayrollProcessing from './Pages/DashboardPage/PayrollProcessingPage';
import Reports from './Pages/DashboardPage/ReportsPage';
import Settings from './Pages/DashboardPage/SettingsPage';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar appears on all pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Login selection and individual logins */}
          <Route path="/login-selection" element={<LoginPage />} />
          <Route path="/admin-login" element={<AdminLoginPage />} />
          <Route path="/user-login" element={<UserLoginPage />} />
          
          {/* Dashboard routes */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />

          {/* User Dashboard - Separate pages */}
          <Route path="/employee-management" element={<EmployeeManagement />} />
          <Route path="/payroll-processing" element={<PayrollProcessing />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <Footer /> {/* Footer appears on all pages */}
      </div>
    </Router>
  );
}

export default App;
