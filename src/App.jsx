import { useState } from "react";
import "./App.css";
import Task from "./Components/Task";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target.newItem.value.trim();

    if (form !== "") {
      const newTask = {
        id: Date.now(),
        description: form,
      };
      setTasks(prevTasks => [...prevTasks, newTask]);
    }

    e.target.newItem.value = "";
  };

  const handleDelete = taskId => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  return (
    <>
      <h1>Todo List App</h1>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="">
          New Item
          <input name="newItem" type="text" />
        </label>
        <button type="submit">Add</button>
      </form>
      <hr />
      <Task tasks={tasks} onDelete={handleDelete} />
    </>
  );
}

export default App;
