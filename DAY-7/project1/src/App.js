import React from 'react';
import Table from './component/table';
import Intro from './component/intro';
import './App.css'; 

const App = () => {
  const employees = [
    { id: 101, name: 'John', salary: 50000 },
    { id: 102, name: 'Smith', salary: 60000 },
    { id: 103, name: 'Starc', salary: 70000 }
  ];

  return (
    <div className='para' style={{ fontSize: "30px" }}>
      <h1>Employee Details</h1>
      <Table employees={employees} />
      <Intro />
    </div>
  );
};

export default App;
