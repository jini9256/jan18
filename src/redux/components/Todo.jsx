import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { removeTodo } from "../modules/todo";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //삭제버튼 함수
  const deleteBtn = () => {
    dispatch(removeTodo(todo.id));
  };
  //상세페이지로 넘어가기 함수
  // const linkClick = () => {
  //   navigate(`/${todo.id}`);
  // };

  console.log(todo.id);
  return (
    <div>
      <h3>{todo.title}</h3>
      <h6>{todo.text}</h6>
      <StBtn onClick={deleteBtn}>삭제</StBtn>
      <Link
        onClick={() => {
          navigate(`/${todo.id}`);
        }}
      >
        [상세보기]
      </Link>
    </div>
  );
};

export default Todo;

const StBtn = styled.button`
  width: 100px;
  border-radius: 15px;
`;
