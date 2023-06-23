import { useState } from "react";

function Task({ tasks, onDelete }) {
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleToggleCompletion = taskId => {
    setCompletedTasks(prevCompletedTasks => {
      if (prevCompletedTasks.includes(taskId)) {
        return prevCompletedTasks.filter(id => id !== taskId);
      } else {
        return [...prevCompletedTasks, taskId];
      }
    });
  };

  return (
    <>
      {tasks.map(task => (
        <div
          key={task.id}
        >
          <input
            type="checkbox"
            onClick={() => handleToggleCompletion(task.id)}
          ></input>
          <span
            style={{
              textDecoration: completedTasks.includes(task.id)
                ? "line-through"
                : "none",
            }}
          >
            {task.description}
          </span>
          <button type="submit" onClick={() => onDelete(task.id)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

export default Task;
