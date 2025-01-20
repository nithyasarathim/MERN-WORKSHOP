import React, { useState } from 'react';
import Table from './Tables'; 

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (idx) => {
    const updatedTasks = tasks.filter((_, i) => i !== idx);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{fontFamily:'bahnschrift'}}>To-Do List</h1>
      <input
        type="text"
        value={task}
        style={{width:'32%',height:'35px',borderWidth:'3px',borderRadius:'5px',fontFamily:'bahnschrift'}}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask} style={{ marginLeft: "10px", width:'5%',height:'30px', fontFamily:'bahnschrift', backgroundColor:'white'}}>
        Add Task
      </button>
      <Table tasks={tasks} removeTask={removeTask} />
    </div>
  );
};

export default App;
