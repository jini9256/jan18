import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
  const todo = useSelector((state) => state.todo);

  return (
    <div>
      {todo.map((item) => {
        return <Todo key={item.id} todo={item} />;
      })}
    </div>
  );
};

export default TodoList;
