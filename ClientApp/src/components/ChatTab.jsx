import React from "react";
import styled from 'styled-components';
import {useAppContext} from "../AppContext"
import { Button, Row, Col, Container } from 'react-bootstrap';
//components
import { chatData } from "./TestData"

// Create a styled component for the custom button
const CustomButton = styled(Button)`
  border: none;
  padding: 0;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

// Create a styled component for the custom container
const CustomContainer = styled(Container)`
  padding-left: 0;
  padding-right: 0;
  width: 100%;
  margin-left: 0;
  margin-right: 0;
`;


export default function ChatTab() {
    const { theme } = useAppContext();


    return (
        <div className="userChat">
        <CustomContainer fluid>
        <Row>
            {chatData.map((chat) => (
                <Col key={chat.id} xs={12} className="mb-2">
                    <CustomButton 
                        size="lg"
                        variant={theme === "light" ? "outline-dark" : "outline-light"}
                        onClick={() => console.log("clicked to access chat")}
                    >
                        {chat.summary}
                    </CustomButton >
                </Col>
            ))}
        </Row>
        </CustomContainer >
        </div>
    )
};

