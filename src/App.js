// src/App.js

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // import 해주세요.
import { addTodo } from "./redux/modules/todo";

const App = () => {
  const [title, setTitle] = useState("");
  const todo = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "") {
      return;
    } else {
      dispatch(
        addTodo({
          id: todo.length + 1,
          title,
        })
      );
      setTitle("");
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>할일을 입력하세요</label>
          <input value={title} onChange={handleChange}></input>
          <button>click</button>
        </form>
      </div>
      <div>
        {todo.map((item) => {
          return <div>{item.title}</div>;
        })}
      </div>
    </>
  );
};

export default App;
