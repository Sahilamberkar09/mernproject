import React from "react";

const TodoForm = () => {
  return (
    <div className="todo-form  p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-xl font-semibold mb-4">Add Task</h1>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Enter Task" />
        <input type="text" placeholder="Enter Description" />
        <input type="date" placeholder="Enter Date" />
        <input type="time" placeholder="Enter Time" />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TodoForm;
