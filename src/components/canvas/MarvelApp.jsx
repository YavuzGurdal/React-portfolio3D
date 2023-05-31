import React from "react";
import Marvel from "./Marvel";
import Desc from "../description/Desc";

// const MarvelApp = ({ id, text, img, title, category, link, github }) => {
const MarvelApp = (props) => {
  return (
    <>
      <Marvel />
      <Desc {...props} />
    </>
  );
};

export default MarvelApp;
