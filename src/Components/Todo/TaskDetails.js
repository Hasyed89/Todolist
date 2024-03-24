
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../Actions/actionindex";
import { nanoid } from "nanoid";
import { useParams } from "react-router";

const TaskDetails = () => {
  const { taskId } = useParams();
  const [newTaskInput, setNewTaskInput] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todoReducer.tasks);

  const handleAddTask = () => {
    if (newTaskInput.trim() !== "") {
      const newTask = {
        id: nanoid(),
        data: newTaskInput,
      };
      // Dispatch the action to add a task
      dispatch(addTask(taskId, newTask)); // Dispatching action with taskId and newTask
      setNewTaskInput("");
    }
  };

  // Get the task name based on the taskId
  const task = tasks.find((task) => task.id === taskId);
  const taskName = task ? task.data : "";

  return (
    <div>
      <h3>Task Name: {taskName}</h3>
      <input
        type="text"
        placeholder="Add new task"
        value={newTaskInput}
        onChange={(e) => setNewTaskInput(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <div className="showItems">
        {task && Array.isArray(task.tasks) && task.tasks.map((taskItem) => (
          <div className="eachItem" key={taskItem.id}>
            <h3>{taskItem.data}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskDetails;

