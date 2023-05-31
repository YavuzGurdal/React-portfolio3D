import React from "react";
import CarNew from "./CarNew";
import Desc from "../description/Desc";

const CarRace = (props) => {
  return (
    <>
      <CarNew />
      <Desc {...props} />
    </>
  );
};

export default CarRace;
