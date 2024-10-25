import React, { useState } from 'react';
import './PayrollProcessing.css';

const PayrollProcessing = () => {
  // Initial employee data
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'Tabot Joel',
      hoursWorked: 160,
      baseSalary: 5000,
      deductions: { tax: 500, insurance: 200 },
      allowances: { bonus: 300, overtime: 150 },
    },
    {
      id: 2,
      name: 'Arnolde Matanda',
      hoursWorked: 170,
      baseSalary: 6000,
      deductions: { tax: 600, insurance: 250 },
      allowances: { bonus: 400, overtime: 180 },
    },
  ]);

  // Salary calculation logic
  const calculateSalary = (employee) => {
    const totalDeductions = Object.values(employee.deductions).reduce((a, b) => a + b, 0);
    const totalAllowances = Object.values(employee.allowances).reduce((a, b) => a + b, 0);
    return employee.baseSalary + totalAllowances - totalDeductions;
  };

  // Deduction and Allowance calculation logic
  const calculateDeductions = (employee) => {
    return `Deductions for ${employee.name}: Tax - ${employee.deductions.tax} FCFA, Insurance - ${employee.deductions.insurance} FCFA`;
  };

  const calculateAllowances = (employee) => {
    return `Allowances for ${employee.name}: Bonus - ${employee.allowances.bonus} FCFA, Overtime - ${employee.allowances.overtime} FCFA`;
  };

  // Pay Slip Generation
  const generatePaySlip = (employee) => {
    return `Payslip for ${employee.name} - Net Salary: ${calculateSalary(employee)} FCFA`;
  };

  // Report Generation Logic
  const generateReport = (type) => {
    let report = '';
    switch (type) {
      case 'monthly':
        report = 'Monthly Payroll Report\n';
        break;
      case 'annual':
        report = 'Annual Payroll Report\n';
        break;
      case 'tax':
        report = 'Tax Payroll Report\n';
        break;
      default:
        return 'Report type not found.';
    }
    employees.forEach((employee) => {
      const netSalary = calculateSalary(employee);
      report += `Employee: ${employee.name}, Net Salary: ${netSalary} FCFA\n`;
    });
    return report;
  };


  return (
    <div className="payroll-processing">
      <h2>Payroll Processing</h2>

      {/* Salary Calculation Section */}
      <div className="salary-calculation">
        <h3>Salary Calculation</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Hours Worked</th>
              <th>Base Salary</th>
              <th>Tax</th>
              <th>Insurance</th>
              <th>Bonus</th>
              <th>Overtime</th>
              <th>Net Salary</th>
              <th>Payslip</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.hoursWorked}</td>
                <td>{employee.baseSalary} FCFA</td>
                <td>{employee.deductions.tax} FCFA</td>
                <td>{employee.deductions.insurance} FCFA</td>
                <td>{employee.allowances.bonus} FCFA</td>
                <td>{employee.allowances.overtime} FCFA</td>
                <td>{calculateSalary(employee)} FCFA</td>
                <td>
                  <button onClick={() => alert(generatePaySlip(employee))}>
                    Generate Payslip
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Deductions and Allowances Section */}
      <div className="deductions-allowances">
        <h3>Deductions and Allowances</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Tax Deductions</th>
              <th>Insurance Deductions</th>
              <th>Bonus</th>
              <th>Overtime</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{calculateDeductions(employee)}</td>
                <td>{employee.deductions.insurance} FCFA</td>
                <td>{employee.allowances.bonus} FCFA</td>
                <td>{employee.allowances.overtime} FCFA</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    

     
    </div>
  );
};

export default PayrollProcessing;
