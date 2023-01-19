// src/redux/modules/counter.js

// Action Value
const ADD_NUM = "ADD_NUM";
const MINUS_NUM = "MINUS_NUM";

// Action Creator
export const addNum = (payload) => {
  return {
    type: ADD_NUM,
    payload,
  };
};

export const minusNum = (payload) => {
  return {
    type: MINUS_NUM,
    payload,
  };
};

// Initial State

const initialState = {
  number: 0,
};

// Reducer

const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUM:
      return {
        number: state.number + action.payload,
      };
    case MINUS_NUM:
      return {
        number: state.number - action.payload,
      };

    default:
      return state;
  }
};

// export default reducer
export default counter;
