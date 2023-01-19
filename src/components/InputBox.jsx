import React, { useState } from "react";
import styled from "styled-components";

const InputBox = ({ setTodos }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const textChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodos = {
      title,
      text,
      id: Date.now(),
      isDone: false,
    };

    setTodos((prev) => {
      return [...prev, newTodos];
    });

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
  background-color: tomato;
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
