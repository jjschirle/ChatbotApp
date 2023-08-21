import React from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";

const Title = styled.h1`
  font-family: "Quicksand";  
  font-size: 50px;
  margin-top: 1rem;
  font-weight: 600;
`;

const Subtitle = styled.p`
  font-family: "Quicksand"
  font-size: 20px;
`;

// Create a styled component for the chat bubble
const ChatBubble = styled.div`
  background-color: ${({ theme }) => (theme.name === "light" ? "#A6ACAF" : "#212121")};
  color: ${({ theme }) => (theme.name === "light" ? "black" : "white")};
  border-radius: 10px;
  padding: 10px 15px;
  max-width: 80%;
  margin: 30px auto;
  text-align: center;
  font-size: 20px;
`;


export default function NewChat() {
    return (
        <Container>
            <Row className="align-items-center text-center mt-3">
                <Title>Chatbot App</Title>
            </Row>
            <Row className="align-items-center text-center mt-3">
                <Subtitle>Powered with ChatGPT</Subtitle>
            </Row>
            <ChatBubble>
                Type anything and press send below
            </ChatBubble>
        </Container>
    );
}