import React from "react";
import { styled } from "styled-components";
import { FaLink, FaGithubAlt } from "react-icons/fa";

const Descp = styled.div`
  /* background: transparent; */
  width: 200px;
  height: 160px;
  padding: 20px;

  /* background-color: rgba(255, 255, 255, 0.8); */
  /* background-color: rgba(255, 255, 255, 0.3); */

  color: black;
  border-radius: 10px;
  position: absolute;
  top: 150px;
  right: 100px;
  text-align: center;

  border: 1px solid rgba(255, 255, 255, 0.8);

  /* transition: color 0.5s ease-in-out; */
  /* &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  } */
`;
const Title = styled.h2`
  text-transform: capitalize;
  color: #fffafa;
  color: black;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  margin-bottom: 5px;
  padding: 5px;
`;
const Category = styled.h4`
  text-transform: uppercase;
  /* color: #fffafa; */
  color: #59b256;
  color: pink;
  font-weight: 400;
  font-weight: bold;
  margin-bottom: 20px;
  padding: 5px;
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;

  .icon {
    cursor: pointer;
    color: #666;
    color: rgba(255, 255, 255, 0.8);
    transition: color 0.3s ease-in-out;

    &:hover {
      /* color: #da4ea2; */
      color: pink;
    }
  }
`;

const Desc = ({ id, text, img, title, category, link, github }) => {
  return (
    <Descp>
      <Title>{title}</Title>
      <Category>{category}</Category>
      <IconContainer>
        <FaLink
          onClick={() => window.open(link, "_blank")}
          className="icon"
          size={26}
        />
        <FaGithubAlt
          onClick={() => window.open(github, "_blank")}
          className="icon"
          size={30}
        />
      </IconContainer>
    </Descp>
  );
};

export default Desc;
