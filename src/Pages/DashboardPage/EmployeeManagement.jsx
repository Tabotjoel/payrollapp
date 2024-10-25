import React, { useState } from 'react';
import './EmployeeManagement.css';

const EmployeeManagement = () => {
  // Employee List State
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Tabot Joel', department: 'Engineer', salary: '5000' },
    { id: 2, name: 'Matanda Arnolde', department: 'Finance', salary: '6000' },
  ]);

  const addEmployee = () => {
    // Logic to add employee
  };

  const editEmployee = (id) => {
    // Logic to edit employee
  };

  const deleteEmployee = (id) => {
    // Logic to delete employee
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  // Attendance Tracking State
  const [attendance, setAttendance] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState('');
  const [checkInTime, setCheckInTime] = useState(null);

  // Time Off Management State
  const [timeOffRequests, setTimeOffRequests] = useState([]);
  const [employeeName, setEmployeeName] = useState('');
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [status, setStatus] = useState('Pending');

  // Attendance Tracking Logic
  const handleCheckIn = (employeeName) => {
    setCurrentEmployee(employeeName);
    setCheckInTime(new Date());
  };

  const handleCheckOut = () => {
    if (checkInTime) {
      const checkOut = new Date();
      const hoursWorked = (checkOut - checkInTime) / 1000 / 3600; // Convert milliseconds to hours
      setAttendance([...attendance, { employee: currentEmployee, checkIn: checkInTime, checkOut, hoursWorked }]);
      setCheckInTime(null); // Reset after check-out
      setCurrentEmployee('');
    }
  };

  // Time Off Management Logic
  const handleRequestSubmit = () => {
    const newRequest = { employeeName, leaveType, startDate, endDate, status };
    setTimeOffRequests([...timeOffRequests, newRequest]);
    // Reset form fields
    setEmployeeName('');
    setLeaveType('');
    setStartDate('');
    setEndDate('');
  };

  const handleApprove = (index) => {
    const updatedRequests = [...timeOffRequests];
    updatedRequests[index].status = 'Approved';
    setTimeOffRequests(updatedRequests);
  };

  const handleReject = (index) => {
    const updatedRequests = [...timeOffRequests];
    updatedRequests[index].status = 'Rejected';
    setTimeOffRequests(updatedRequests);
  };

  return (
    <div className="employee-management">
 
      <div className="employee-section">
        <h2>Employee Management</h2>
        <button className="add-btn" onClick={addEmployee}>Add Employee</button>
        <table className="employee-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.department}</td>
                <td>{employee.salary}</td>
                <td>
                  <button className="edit-btn" onClick={() => editEmployee(employee.id)}>Edit</button>
                  <button className="delete-btn" onClick={() => deleteEmployee(employee.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Attendance Tracking Section */}
      <div className="attendance-tracking">
        <h2>Employee Attendance</h2>
        <div className="attendance-form">
          <input
            type="text"
            placeholder="Employee Name"
            value={currentEmployee}
            onChange={(e) => setCurrentEmployee(e.target.value)}
            required
          />
          <button onClick={() => handleCheckIn(currentEmployee)}>Check In</button>
          <button onClick={handleCheckOut}>Check Out</button>
        </div>
        <h3>Attendance Log</h3>
        <table>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Check-In Time</th>
              <th>Check-Out Time</th>
              <th>Hours Worked</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((entry, index) => (
              <tr key={index}>
                <td>{entry.employee}</td>
                <td>{entry.checkIn.toLocaleString()}</td>
                <td>{entry.checkOut.toLocaleString()}</td>
                <td>{entry.hoursWorked.toFixed(2)} hrs</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Time Off Management Section */}
      <div className="time-off-management">
        <h2>Time Off Management</h2>
        <div className="time-off-form">
          <input
            type="text"
            placeholder="Employee Name"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Leave Type (e.g., Vacation, Sick Leave)"
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
            required
          />
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
          <button onClick={handleRequestSubmit}>Submit Request</button>
        </div>
        <h3>Time Off Requests</h3>
        <table>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Leave Type</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {timeOffRequests.map((request, index) => (
              <tr key={index}>
                <td>{request.employeeName}</td>
                <td>{request.leaveType}</td>
                <td>{request.startDate}</td>
                <td>{request.endDate}</td>
                <td>{request.status}</td>
                <td>
                  <button onClick={() => handleApprove(index)}>Approve</button>
                  <button onClick={() => handleReject(index)}>Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeManagement;
