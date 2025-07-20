import React from "react";

import TodoForm from "../components/TodoForm";
import TodoTable from "../components/TodoTable";

const TodoList = () => {
  return (
    <div>
      <h1 className="text-center text-3xl uppercase py-7 font-semibold bg-white shadow-sm">
        ToDo List
      </h1>
      <div className=" max-w-7xl mx-auto p-4 flex gap-4 ">
        <TodoForm />
        <TodoTable />
      </div>
    </div>
  );
};

export default TodoList;
