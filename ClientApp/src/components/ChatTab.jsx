import React from "react";
import styled, { css } from 'styled-components';
import {useAppContext} from "../AppContext"
import { Button, Container } from 'react-bootstrap';
//components
import { chatData } from "./TestData"

const ButtonStyles = css`
  background-color: ${({ theme }) =>
        theme.name === 'light' ? '#f7f7f8' : '#40414f'};
  color: ${({ theme }) => (theme.name === 'light' ? 'black' : 'white')};
`;

// Create a styled component for the custom container
const CustomContainer = styled(Container)`
  padding-left: 0;
  padding-right: 0;
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

// Create a styled component for the custom button
const CustomButton = styled(Button)`
  border: none;
  width: 95%;
  display: block;

  // adjust chat summary text
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &.active {
    ${ButtonStyles}
}

 &:hover {
    ${ButtonStyles}
}
`;

export default function ChatTab({ activeChatId, onSelectChat }) {
    const { theme } = useAppContext();

    return (
        <CustomContainer fluid>
            {chatData.map((chat) => (
                <CustomButton
                    key={chat.id}
                    size="lg"
                    variant={theme === "light" ? "outline-dark" : "outline-light"}
                    onClick={() => onSelectChat(chat.id)}
                    active={chat.id === activeChatId} // Check if the button's chat ID matches activeChatId
                >
                    {chat.summary}
                </CustomButton>
            ))}
        </CustomContainer>
    );
}
