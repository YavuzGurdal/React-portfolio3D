import React, { useState } from "react";
import { styled } from "styled-components";
import CarRace from "./canvas/CarRace";
import CalculatorApp from "./canvas/CalculatorApp";
import CurrencyApp from "./canvas/CurrencyApp";
import TodoApp from "./canvas/TodoApp";
import MarvelApp from "./canvas/MarvelApp";

import { dataapps } from "../data";

const Section = styled.div`
  height: 100vh;
  /* kaydirinca tum componentin sayfayi kaplamasi icin  */
  scroll-snap-align: center;

  display: flex;
  justify-content: center;

  position: relative;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;

  color: transparent; /*  -webkit-text-stroke icin transparent yaptim  */
  -webkit-text-stroke: 1px white;
  position: relative;

  &::after {
    content: "${(props) => props.text}";
    /* props ile gelen textleri contente atiyorum */
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    &::after {
      animation: moveText 0.5s linear both;
      /* both yazdigim icin ustunden cekinceye kadar hover kaliyor */

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }

  &.active {
    &::after {
      width: 100%;
    }
  }
`;

const Right = styled.div`
  flex: 1;
  /* position: relative; */
`;

const Works = () => {
  const [selectedId, setSelectedId] = useState(9980);

  const handleListItemClick = (id) => {
    setSelectedId(id);
  };

  const getSelectedData = () => {
    const selectedData = dataapps.find((item) => item.id === selectedId);
    return selectedData || dataapps[0]; // Varsayılan olarak ilk öğeyi döndür
  };

  return (
    <Section>
      <Container>
        <Left>
          <List>
            {dataapps.map((item) => (
              <ListItem
                key={item.id}
                text={item.text}
                onClick={() => handleListItemClick(item.id)}
                className={selectedId === item.id ? "active" : ""}
              >
                {item.text}
              </ListItem>
            ))}
          </List>
        </Left>

        <Right>
          {selectedId === 9980 ? (
            <MarvelApp {...getSelectedData()} />
          ) : selectedId === 9981 ? (
            <CarRace {...getSelectedData()} />
          ) : selectedId === 9982 ? (
            <CalculatorApp {...getSelectedData()} />
          ) : selectedId === 9983 ? (
            <TodoApp {...getSelectedData()} />
          ) : selectedId === 9984 ? (
            <CurrencyApp {...getSelectedData()} />
          ) : (
            <MarvelApp {...getSelectedData()} />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
