import React from "react";
import Todo from "./Todo";
import Desc from "../description/Desc";

const TodoApp = (props) => {
  return (
    <>
      <Todo />
      <Desc {...props} />
    </>
  );
};

export default TodoApp;
