import { createStore } from "redux";

//Reducer function
const reducerFun = (state = { counter: 0, msg: "" }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      msg: "Can't be less than 0",
    };
  }
  return state;
};

//Store
const store = createStore(reducerFun);

export default store;
