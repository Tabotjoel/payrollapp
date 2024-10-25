import React, { useState } from 'react';
import './AdminDashboard.css'; // External CSS for consistent styling

const AdminDashboard = () => {
  // State to hold form data and saved users
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    companyAcronym: '',
    companyName: '',
    location: '',
    poBox: '',
    landlinePhone: '',
    mobilePhone: '',
    landlineFax: '',
    email: '',
    cnpsNumber: '',
    contractNumber: '',
    rccmNumber: '',
    expiringDate: '',
  });

  const [users, setUsers] = useState([]); // State to hold saved users
  const [isEditing, setIsEditing] = useState(false); // State to track editing mode
  const [currentEditIndex, setCurrentEditIndex] = useState(null); // To track which user is being edited

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission to save user
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      const updatedUsers = users.map((user, index) =>
        index === currentEditIndex ? formData : user
      );
      setUsers(updatedUsers);
      setIsEditing(false);
    } else {
      setUsers([...users, formData]);
    }

    // Clear the form after saving
    setFormData({
      username: '',
      password: '',
      companyAcronym: '',
      companyName: '',
      location: '',
      poBox: '',
      landlinePhone: '',
      mobilePhone: '',
      landlineFax: '',
      email: '',
      cnpsNumber: '',
      contractNumber: '',
      rccmNumber: '',
      expiringDate: '',
    });
  };

  // Handle edit user
  const handleEdit = (index) => {
    setFormData(users[index]);
    setIsEditing(true);
    setCurrentEditIndex(index);
  };

  // Handle delete user
  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      {/* Form to add/edit users */}
      <form className="admin-form" onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input type="text" name="companyAcronym" placeholder="Company Acronym" value={formData.companyAcronym} onChange={handleChange} />
        <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
        <input type="text" name="poBox" placeholder="P.O Box" value={formData.poBox} onChange={handleChange} />
        <input type="text" name="landlinePhone" placeholder="Landline Phone" value={formData.landlinePhone} onChange={handleChange} />
        <input type="text" name="mobilePhone" placeholder="Mobile Phone" value={formData.mobilePhone} onChange={handleChange} />
        <input type="text" name="landlineFax" placeholder="Landline Fax" value={formData.landlineFax} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="text" name="cnpsNumber" placeholder="CNPS Number" value={formData.cnpsNumber} onChange={handleChange} />
        <input type="text" name="contractNumber" placeholder="Contract Number" value={formData.contractNumber} onChange={handleChange} />
        <input type="text" name="rccmNumber" placeholder="RCCM Number" value={formData.rccmNumber} onChange={handleChange} />
        <input type="date" name="expiringDate" placeholder="Account Expiring Date" value={formData.expiringDate} onChange={handleChange} />
        <button type="submit" className="save-btn">{isEditing ? 'Update User' : 'Save Credentials'}</button>
      </form>

      {/* Display saved users */}
      {users.length > 0 && (
        <div className="user-list">
          <h2>Saved Users</h2>
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Company Name</th>
                <th>Location</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.companyName}</td>
                  <td>{user.location}</td>
                  <td>{user.email}</td>
                  <td>
                    <button className="edit-btn" onClick={() => handleEdit(index)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
