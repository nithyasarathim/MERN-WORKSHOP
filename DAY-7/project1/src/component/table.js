import React from "react";
import './table.css';

const Table = ({ employees }) => {
  return (
    <div className='tabul'>
      <table>
        <thead>
          <tr className='trow'>
            <th className="thead">Employee ID</th>
            <th className="thead">Employee Name</th>
            <th className="thead">Employee Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr className='trow' key={index}>
              <td className="tdesc">{employee.id}</td>
              <td className="tdesc">{employee.name}</td>
              <td className="tdesc">{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
g