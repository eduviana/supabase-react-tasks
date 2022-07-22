import React from "react";
import { useTasks } from "../context/TaskContext";

const TaskCard = ({ task }) => {
  const { deleteTask, updateTask } = useTasks();

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleToggleDone = () => {
    updateTask(task.id, { done: !task.done });
  };

  return (
    <div className="card card-body mb-2 text-center">
      <h1 className="h5">{`${task.id} - ${task.name}`}</h1>
      <p>{task.done ? "Done ✔️" : "Not done ❌"}</p>
      <div className="ms-auto">
        <button
          className="btn btn-danger btn-sm me-1"
          onClick={() => handleDelete()}
        >
          Delete
        </button>
        <button
          lassName="btn btn-secondary btn-sm"
          onClick={() => handleToggleDone()}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
