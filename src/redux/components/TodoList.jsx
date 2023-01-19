import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
  const todos = useSelector((state) => state.todo);

  return (
    <div>
      {todos.map((item) => {
        return <Todo key={item.id} todo={item} />;
      })}
    </div>
  );
};

export default TodoList;
