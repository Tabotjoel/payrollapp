import React, { useState, useEffect } from 'react';
import './SettingsPage.css';

const Settings = () => {
  // State to hold settings data
  const [companyInfo, setCompanyInfo] = useState({
    name: 'Company Name',
    address: 'Company Address',
    phone: 'Company Phone',
    email: 'company@example.com',
  });

  const [payStructure, setPayStructure] = useState({
    baseSalary: 10000,
    overtimeRate: 1.5,
    maxOvertimeHours: 20,
  });

  const [taxSettings, setTaxSettings] = useState({
    federalTaxRate: 15,
    stateTaxRate: 5,
    insuranceDeduction: 2,
  });

  const [systemSettings, setSystemSettings] = useState({
    language: 'English',
    dateFormat: 'MM/DD/YYYY',
  });

  // Load settings from localStorage on component mount
  useEffect(() => {
    const savedCompanyInfo = localStorage.getItem('companyInfo');
    const savedPayStructure = localStorage.getItem('payStructure');
    const savedTaxSettings = localStorage.getItem('taxSettings');
    const savedSystemSettings = localStorage.getItem('systemSettings');

    if (savedCompanyInfo) setCompanyInfo(JSON.parse(savedCompanyInfo));
    if (savedPayStructure) setPayStructure(JSON.parse(savedPayStructure));
    if (savedTaxSettings) setTaxSettings(JSON.parse(savedTaxSettings));
    if (savedSystemSettings) setSystemSettings(JSON.parse(savedSystemSettings));
  }, []);

  // Save settings to localStorage
  const saveSettings = () => {
    localStorage.setItem('companyInfo', JSON.stringify(companyInfo));
    localStorage.setItem('payStructure', JSON.stringify(payStructure));
    localStorage.setItem('taxSettings', JSON.stringify(taxSettings));
    localStorage.setItem('systemSettings', JSON.stringify(systemSettings));
    alert('Settings saved successfully!');
  };

  // Update company information
  const handleCompanyInfoChange = (e) => {
    const { name, value } = e.target;
    setCompanyInfo({ ...companyInfo, [name]: value });
  };

  // Update pay structure
  const handlePayStructureChange = (e) => {
    const { name, value } = e.target;
    setPayStructure({ ...payStructure, [name]: parseFloat(value) });
  };

  // Update tax settings
  const handleTaxSettingsChange = (e) => {
    const { name, value } = e.target;
    setTaxSettings({ ...taxSettings, [name]: parseFloat(value) });
  };

  // Update system settings
  const handleSystemSettingsChange = (e) => {
    const { name, value } = e.target;
    setSystemSettings({ ...systemSettings, [name]: value });
  };

  return (
    <div className="settings">
      <h2>Settings</h2>

      {/* Company Information */}
      <section className="settings-section">
        <h3>Company Information</h3>
        <div className="form-group">
          <label>Company Name:</label>
          <input
            type="text"
            name="name"
            value={companyInfo.name}
            onChange={handleCompanyInfoChange}
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={companyInfo.address}
            onChange={handleCompanyInfoChange}
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={companyInfo.phone}
            onChange={handleCompanyInfoChange}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={companyInfo.email}
            onChange={handleCompanyInfoChange}
          />
        </div>
      </section>

      {/* Pay Structure */}
      <section className="settings-section">
        <h3>Pay Structure</h3>
        <div className="form-group">
          <label>Base Salary (FCFA):</label>
          <input
            type="number"
            name="baseSalary"
            value={payStructure.baseSalary}
            onChange={handlePayStructureChange}
          />
        </div>
        <div className="form-group">
          <label>Overtime Rate:</label>
          <input
            type="number"
            name="overtimeRate"
            value={payStructure.overtimeRate}
            onChange={handlePayStructureChange}
          />
        </div>
        <div className="form-group">
          <label>Max Overtime Hours:</label>
          <input
            type="number"
            name="maxOvertimeHours"
            value={payStructure.maxOvertimeHours}
            onChange={handlePayStructureChange}
          />
        </div>
      </section>

      {/* Tax Settings */}
      <section className="settings-section">
        <h3>Tax Settings</h3>
        <div className="form-group">
          <label>Federal Tax Rate (%):</label>
          <input
            type="number"
            name="federalTaxRate"
            value={taxSettings.federalTaxRate}
            onChange={handleTaxSettingsChange}
          />
        </div>
        <div className="form-group">
          <label>State Tax Rate (%):</label>
          <input
            type="number"
            name="stateTaxRate"
            value={taxSettings.stateTaxRate}
            onChange={handleTaxSettingsChange}
          />
        </div>
        <div className="form-group">
          <label>Insurance Deduction (%):</label>
          <input
            type="number"
            name="insuranceDeduction"
            value={taxSettings.insuranceDeduction}
            onChange={handleTaxSettingsChange}
          />
        </div>
      </section>

      {/* System Settings */}
      <section className="settings-section">
        <h3>System Settings</h3>
        <div className="form-group">
          <label>Language:</label>
          <select
            name="language"
            value={systemSettings.language}
            onChange={handleSystemSettingsChange}
          >
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date Format:</label>
          <select
            name="dateFormat"
            value={systemSettings.dateFormat}
            onChange={handleSystemSettingsChange}
          >
            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
            <option value="YYYY/MM/DD">YYYY/MM/DD</option>
          </select>
        </div>
      </section>

      <button onClick={saveSettings} className="save-button">
        Save Settings
      </button>
    </div>
  );
};

export default Settings;
