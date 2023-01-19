// src/redux/modules/counter.js
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
// Action Value
// const ADD_TODO = "ADD_TODO";
// const REMOVE_TODO = "REMOVE_TODO";

// Action Creator
//1.인풋에서 투두 객체를 입력받아 투두리스트에 더해준다.
// export const addTodo = (payload) => {
//   return {
//     type: ADD_TODO,
//     payload,
//   };
// };

//2.투두의 아이디값을 받아, 일치하는 투두리스트를 삭제한다.

// export const removeTodo = (payload) => {
//   return {
//     type: REMOVE_TODO,
//     payload,
//   };
// };

// Initial State

const initialState = [
  {
    id: uuidv4(), // id는 모두 고유값이어야 합니다.
    title: "리액트 강의보기",
    text: "챕터 1부터 챕터 12까지 학습",
    isDone: false,
  },
  {
    id: uuidv4(), // id는 모두 고유값이어야 합니다.
    title: "점심 먹기",
    text: "점심 뭐먹지..?",
    isDone: false,
  },
];

// Reducer

// const todo = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return [...state, action.payload];

//     case REMOVE_TODO:
//       return state.filter((item) => item.id !== action.payload);

//     default:
//       return state;
//   }
// };

//슬라이스만들기

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },

    removeTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

// export default reducer
export default todoSlice.reducer;
