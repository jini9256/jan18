import React from "react";
import TodoList from "../redux/components/TodoList";
import InputBox from "../redux/components/InputBox";

const Home = () => {
  return (
    <>
      <InputBox></InputBox>
      <TodoList></TodoList>
    </>
  );
};

export default Home;
