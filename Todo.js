import { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    setTasks([...tasks, input]);
    setInput("");
  };


  return (
    <div>
      <h1>Todo List</h1>
      
      <div>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div>
        {tasks.length === 0 ? (
          <p>No task added</p>
        ) : (
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}