import React from "react";
import classes from "./Counter.module.css";

const Counter = () => {
  const toggleCounterhandler = () => {};
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>---- COUNTER VALUE ----</div>
      <button onClick={toggleCounterhandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
