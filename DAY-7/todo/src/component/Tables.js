import React from "react";
import './table.css';

const Table = ({ tasks, removeTask }) => {
  return (
    <div className='tabul'>
      <table>
        <thead>
          <tr className='trow'>
            <th className="taskhead">Tasks</th>
            <th className="actionhead">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, idx) => (
            <tr className='trow' key={idx}>
              <td className="tasks">{task}</td>
              <td className="actions">
                <button onClick={() => removeTask(idx)} className="remove-btn">
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;