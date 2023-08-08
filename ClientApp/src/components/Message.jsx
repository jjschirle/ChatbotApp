/*
Takes message object as a prop and renders a single message. 
Has different styles based on sender (user or openAI)
*/ 

import React from 'react';
import styled from 'styled-components';
// Icons
import { Icon } from '@iconify/react';

const MessageContainer = styled.div`
    /* Apply styles based on sender */
    display: flex;
    //justify-content: ${({ sender }) => (sender === 'User' ? 'flex-end' : 'flex-start')};
    align-items: center;
    padding: 5px;
    border-bottom: 1px solid #C0C0C0;
   background-color: ${({ sender, theme }) =>
        sender === 'User'
            ? 'inherit' // This keeps the parent's background color for user messages
            : sender === 'OpenAI' && theme.name === 'light'
            ? '#f7f7f8' // Red background for OpenAI messages in light theme
            : sender === 'OpenAI' && theme.name === 'dark'
                ? '#343541' // Purple background for OpenAI messages in dark theme
                    : 'transparent'}; // Default transparent background for other cases
`;

// Stop icons from shrinking
const IconContainer = styled.div`
    /* Prevent icons from shrinking */
    flex-shrink: 0;
    margin-right: 8px; /* Add some spacing between icon and message text */
`;

const MessageText = styled.p`
    /* Apply styles for message text */
    padding: 10px;
    border-radius: 10px;
    font-size: 20px;
`;

const Message = ({ message }) => {
    const { sender, text } = message;

    return (
        <MessageContainer sender={sender}>
            <IconContainer>
                {sender === 'User' && <Icon icon="mdi:user" width={30} height={30} />}
                {sender === 'OpenAI' && <Icon icon="mdi:robot" width={30} height={30} />} 
            </IconContainer>
            <MessageText>{text}</MessageText>
            
        </MessageContainer>
    );
};

export default Message;