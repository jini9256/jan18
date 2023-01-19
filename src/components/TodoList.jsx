import React from "react";
import styled from "styled-components";

const TodoList = ({ todos, setTodos, isWork }) => {
  return (
    <div>
      {todos.map((item) => {
        return <div>{item.title}</div>;
      })}
    </div>
  );
};

export default TodoList;
