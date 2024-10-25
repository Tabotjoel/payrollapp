import React from 'react';
import { Link } from 'react-router-dom';
import './UserDashboard.css';

const UserDashboard = () => {
  return (
    <div className="user-dashboard-container">
      <h1>User Dashboard</h1>
      <div className="dashboard-menu">
        <Link to="/employee-management" className="dashboard-card">
          <h2>Employee Management</h2>
          <p>Manage employees, view details, and more</p>
          <span className="dashboard-card-link">Go to Employee Management</span>
        </Link>

        <Link to="/payroll-processing" className="dashboard-card">
          <h2>Payroll Processing</h2>
          <p>Process payroll and view payment history</p>
          <span className="dashboard-card-link">Go to Payroll Processing</span>
        </Link>

        <Link to="/reports" className="dashboard-card">
          <h2>Reports</h2>
          <p>View payroll and tax reports</p>
          <span className="dashboard-card-link">Go to Reports</span>
        </Link>

        <Link to="/settings" className="dashboard-card">
          <h2>Settings</h2>
          <p>Configure company info, pay structure, and more</p>
          <span className="dashboard-card-link">Go to Settings</span>
        </Link>
      </div>
    </div>
  );
};

export default UserDashboard;
