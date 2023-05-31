import React, { useState } from "react";
import { styled } from "styled-components";
import CarRace from "./canvas/CarRace";
// import ProductDesign from "./ProductDesign";
import CalculatorApp from "./canvas/CalculatorApp";
import CurrencyApp from "./canvas/CurrencyApp";
import TodoApp from "./canvas/TodoApp";
import MarvelApp from "./canvas/MarvelApp";
// import ParticlesComp from "./Particles";

// import Particles from "react-particles";

const data = [
  "Marvel Heroes",
  "Car Race",
  "Calculator",
  "Currency App",
  "Todo",
];

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
`;

const Works = () => {
  const [work, setWork] = useState("Marvel Heroes");

  return (
    <Section>
      {/* <ParticlesComp /> */}

      <Container>
        <Left>
          <List>
            {/* text={item} prop ile itemleri gonderiyorum */}
            {data.map((item) => (
              <ListItem
                key={item}
                text={item}
                onClick={() => setWork(item)}
                className={work === item ? "active" : ""}
              >
                {item}
              </ListItem>
            ))}
          </List>
        </Left>

        <Right>
          {work === "Marvel Heroes" ? (
            <MarvelApp />
          ) : work === "Car Race" ? (
            <CarRace />
          ) : work === "Currency App" ? (
            <CurrencyApp />
          ) : work === "Calculator" ? (
            <CalculatorApp />
          ) : work === "Todo" ? (
            <TodoApp />
          ) : (
            <MarvelApp />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
