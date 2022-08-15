import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, msg: "", showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter += 1;
    },
    decrement(state) {
      state.counter -= 1;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

//Store
const store = configureStore({
  // reducer: {counter: counterSlice.reducers}
  reducer: counterSlice.reducers,
});

export default store;
