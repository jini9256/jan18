// src/pages/Work.js

import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import todo from "../redux/modules/todo";

//투두박스에서 상세보기를 누르면 보이는 화면 구현

function Work() {
  //다른 컴퍼넌트로 이동하기위한
  const navigate = useNavigate();
  //이전 컴퍼넌트에서 넘어온 파라미터를 조회한다.
  const params = useParams();

  const filteredTodo = useSelector((state) => {
    return state.todo.filter((item) => item.id === params.id);
  });

  const todos = filteredTodo[0];
  const backClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h3>상세페이지</h3>
      <h4>{todos.title}</h4>
      <h6>{todos.text}</h6>
      <button onClick={backClick}>back</button>
    </div>
  );
}

export default Work;
