import React from "react";
import Calculator from "./Calculator";
import Desc from "../description/Desc";

const CalculatorApp = (props) => {
  return (
    <>
      <Calculator />
      <Desc {...props} />
    </>
  );
};

export default CalculatorApp;
