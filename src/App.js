import { styled } from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import StarsCanvas from "./components/canvas/Stars";
// import Test from "./components/Test";

const Container = styled.div`
  height: 100vh;
  color: white;
  /* background-image: url("/bg.jpg"); bu sekilde yazmayinca gorunmuyor */
  /* background-image: url("/bg1.jpg"); bu sekilde yazmayinca gorunmuyor */
  background-image: url("/bg2.jpg"); /* bu sekilde yazmayinca gorunmuyor */
  background-repeat: "no-repeat";
  background-size: cover;
  /* yavas hareket etmesi icin */
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  /* yandaki scrollbari yoketmek icin */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  position: relative;
`;

function App() {
  return (
    <Container>
      {/* <StarsCanvas /> */}
      {/* <Hero /> */}
      <div style={{ position: "relative", zIndex: "0" }}>
        <StarsCanvas />
        <Hero />
      </div>
      <Who />
      <Works />

      {/* <Contact /> */}
      <div style={{ position: "relative", zIndex: "0" }}>
        <StarsCanvas />
        <Contact />
      </div>
      {/* <Test /> */}
    </Container>
  );
}

export default App;
