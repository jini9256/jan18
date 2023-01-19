import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../modules/todo";

const InputBox = () => {
  //컴퍼넌트 내부에서 사용할 스테이트값 지정
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  //스토어값인 투두에 접근하는 훅
  const todos = useSelector((state) => state.todo);

  //타이틀 체인지 함수
  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const textChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: uuidv4(), // id는 모두 고유값이어야 합니다.
      title,
      text,
      isDone: false,
    };

    dispatch(addTodo(newTodo));

    setTitle("");
    setText("");
  };

  return (
    <StForm>
      <form onSubmit={handleSubmit}>
        <StInput value={title} onChange={titleChange}></StInput>
        <StInput value={text} onChange={textChange}></StInput>

        <StBtn>Click</StBtn>
      </form>
    </StForm>
  );
};

export default InputBox;

const StForm = styled.div`
  background-color: rgb(255, 99, 71);
  justify-content: center;
  align-items: center;
  display: flex;
`;

const StInput = styled.input`
  width: 200px;
  margin: 20px;
`;

const StBtn = styled.button`
  width: 100px;
  border-radius: 15px;
`;
