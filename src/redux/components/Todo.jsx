import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import todo, { removeTodo } from "../modules/todo";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  //삭제버튼 함수
  const deleteBtn = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <div>
      <h3>{todo.title}</h3>
      <h6>{todo.text}</h6>
      <StBtn onClick={deleteBtn}>삭제</StBtn>
    </div>
  );
};

export default Todo;

const StBtn = styled.button`
  width: 100px;
  border-radius: 15px;
`;
