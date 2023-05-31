import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import Navbar from "./Navbar";
import Typed from "typed.js";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import StarsCanvas from "./canvas/Stars";

const Section = styled.div`
  height: 100vh;
  /* kaydirinca tum componentin sayfayi kaplamasi icin  */
  scroll-snap-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  /* scroll-snap-align: center; */
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 2; /* ekranda kaplayacagi kolon sayisi */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

// const Title = styled.h1`
//   font-size: 64px;
//   margin: 10px 0;
//   font-weight: 500;
// `;
const TextChange = styled.div`
  /* font-size: 64px; */
`;
const Hi = styled.h2`
  font-size: 32px;
  font-weight: 500;
`;
const Name = styled.h1`
  font-size: 64px;
  margin: 10px 0;
  font-weight: 500;
`;
const Change = styled.h3`
  font-size: 44px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #da4ea2;
  font-weight: 500;
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
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3; /* ekranda kaplayacagi kolon sayisi */
  position: relative;
`;

const Img = styled.img`
  width: 550px;
  height: 550px;
  /* height: 1000px; */
  object-fit: contain;
  /* asagidakilerin hepsi resmin ortalanmasi icin */
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* margin: auto; */
  margin: 70px auto 0;

  animation: animate 2s infinite ease alternate;
  @keyframes animate {
    /* 100% { */
    to {
      transform: translateY(40px);
    }
  }
`;

const Hero = () => {
  const text = React.useMemo(
    () => ["Web Developer", "React Developer", "NodeJS Developer"],
    []
  );
  const textRef = useRef();

  useEffect(() => {
    const options = {
      strings: text,
      // stringsElement: "#typed-string",
      typeSpeed: 70,
      showCursor: true,
      cursorChar: "|",
      backSpeed: 80,
      smartBackspace: false,
      shuffle: true,
      startDelay: 1000,
      backDelay: 1000,
      loop: true,
      loopCount: Infinity,
    };

    const typed = new Typed(textRef.current, options);

    return () => {
      typed.destroy();
    };
  }, [text]);

  return (
    <>
      <Section>
        <Navbar />
        <Container>
          <Left>
            {/* <Title>Think. Make. Solve</Title> */}
            <TextChange>
              <Hi>Hi There, I'm</Hi>
              <Name>Yavuz Gurdal</Name>
              <Change>
                <span className="changespan" ref={textRef}></span>
              </Change>
            </TextChange>
            <WhatIDo>
              <Line src="/img/line.png" />
              <SubTitle>What I Do</SubTitle>
            </WhatIDo>
            <Desc>
              i enjoy creating delightful, human-centered digital experiences.
            </Desc>
            <Button>Learn More</Button>
          </Left>
          <Right>
            <Canvas>
              {/* camera={{ fov: 25, position: [5, 5, 5] }} ile cismin buyuklugunu ayarliyorum */}
              <OrbitControls enableZoom={false} />
              {/* <OrbitControls enableZoom={false} autoRotate /> */}
              {/* cismin hareket etmesini sagliyor */}
              {/* autoRotate cismin surekli hareket etmesini sagliyor */}
              <ambientLight intensity={1} />
              {/* isik ayari icin */}
              <directionalLight position={[3, 2, 1]} />
              {/* hangi yonlerden isigin gelecegini belirliyorum */}
              <Sphere args={[0.9, 100, 300]} scale={2.3}>
                {/* args={[radius, width, height]} */}
                <MeshDistortMaterial
                  // color="#220736"
                  // color="lightgray"
                  // color="#dc9dcd"
                  // color="#555"
                  // color="#3d1c56"
                  // color="#5C469C"
                  // color="#1D267D"
                  // color="#9376E0"
                  color="#5C469C"
                  attach="material"
                  distort={0.5}
                  speed={1.5}
                />
              </Sphere>
            </Canvas>
            <Img src="/img/work.png" />
          </Right>
        </Container>
        {/* <StarsCanvas /> */}
      </Section>
    </>
  );
};

export default Hero;
