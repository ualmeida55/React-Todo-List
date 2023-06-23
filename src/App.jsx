import { useState, useEffect } from "react";
import "./App.css";
import Task from "./Components/Task";

function App() {
  const [tasks, setTasks] = useState([]);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [taskLoaded, setTaskLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true);
    }, 300);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target.newItem.value.trim();

    if (form !== "") {
      const newTask = {
        id: Date.now(),
        description: form,
      };
      setTasks(prevTasks => [...prevTasks, newTask]);
      setTaskLoaded(true);

      setTimeout(() => {
        setTaskLoaded(false);
      }, 500);
    }

    e.target.newItem.value = "";
  };

  const handleDelete = taskId => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  return (
    <div className={`App ${pageLoaded ? "page-loaded" : ""}`}>
      <h1>Todo List App</h1>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="">
          New Item
          <input name="newItem" type="text" />
        </label>
        <button type="submit">Add</button>
      </form>
      <hr />
      <div className={`task-container ${taskLoaded ? "task-added" : ""}`}>
        <Task tasks={tasks} onDelete={handleDelete} taskLoaded={taskLoaded} />
      </div>
    </div>
  );
}

export default App;
