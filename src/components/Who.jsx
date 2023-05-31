import React from "react";
import { styled } from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
// import Navbar from "./Navbar";

import BallCanvas from "./canvas/TechBall";
import { technologies } from "../constants";
import ParticlesComp from "./Particles";

const Section = styled.div`
  height: 100vh;
  /* kaydirinca tum componentin sayfayi kaplamasi icin  */
  scroll-snap-align: center;

  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  /* scroll-snap-align: center; */
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1; /* ekranda kaplayacagi kolon sayisi */
  position: relative;
`;

const Right = styled.div`
  flex: 1; /* ekranda kaplayacagi kolon sayisi */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 64px;
`;

const WhatIDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const SubTitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const TechWrapper = styled.div`
  display: flex;
  flex: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20;
`;
const Tech = styled.div`
  width: 120px;
  height: 120px;
`;

const Who = () => {
  return (
    <Section>
      {/* <Navbar /> */}
      <ParticlesComp />
      <Container>
        <Left>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            {/* camera={{ fov: 25, position: [5, 5, 5] }} ile cismin buyuklugunu ayarliyorum */}
            <OrbitControls enableZoom={false} autoRotate />
            {/* <OrbitControls enableZoom={false} autoRotate /> */}
            {/* cismin hareket etmesini sagliyor */}
            {/* autoRotate cismin surekli hareket etmesini sagliyor */}
            <ambientLight intensity={1} />
            {/* isik ayari icin */}
            <directionalLight position={[3, 2, 1]} />
            {/* hangi yonlerden isigin gelecegini belirliyorum */}
            <Cube />
          </Canvas>
        </Left>
        <Right>
          {/* <Title>Think outside the square space</Title> */}
          <Title>Prepare to move into the 3rd dimension</Title>
          <WhatIDo>
            <Line src="/img/line.png" />
            <SubTitle>Who am I ?</SubTitle>
          </WhatIDo>
          <Desc>
            {/* a creative group of designers and developers with a passion for the
            arts. */}
            a creative designer and developer.
          </Desc>
          {/* <Button>See our works</Button> */}

          <TechWrapper>
            {technologies.map((technology) => (
              <Tech key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </Tech>
            ))}
          </TechWrapper>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
