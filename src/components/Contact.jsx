import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import Map from "./Map";
import emailjs from "@emailjs/browser";

const Section = styled.div`
  height: 100vh;
  /* kaydirinca tum componentin sayfayi kaplamasi icin  */
  scroll-snap-align: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;
const TextArea = styled.textarea`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;
const Button = styled.button`
  padding: 20px;
  background-color: #da4ea2;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;

const Right = styled.div`
  flex: 1;
`;

const Contact = () => {
  const ref = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let timer;
    if (messageSent || error) {
      timer = setTimeout(() => {
        setMessageSent(false);
        setError(false);
      }, 30000); // 1 dakika = 60,000 milisaniye
    }
    return () => clearTimeout(timer);
  }, [messageSent, error]);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_archprc",
        "template_hve0rot",
        ref.current,
        "o92gI-or2_RGwEdjm"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
          setError(false);
        },
        (error) => {
          console.log(error.text);
          setMessageSent(false);
          setError(true);
        }
      );

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input
              placeholder="Name"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button type="submit">Send</Button>
            {/* {success &&
              "Your message has been sent. We'll get back to you soon... "} */}
            {messageSent && (
              <p>Your message has been sent. We'll get back to you soon...</p>
            )}
            {error && <p>Something went wrong, Please try again...</p>}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
