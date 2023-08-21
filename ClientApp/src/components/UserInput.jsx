import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => (theme.name === "light" ? "#A6ACAF" : "#212121")};
    min-height: 54px;
    max-width: 80%;
    max-height: 200px;
    margin: auto;
    border-radius: 10px;
    transition: height 0.2s ease; 
`;

const InputField = styled.textarea`
    width: 100%;
    max-height: 200px;
    resize: none; /* Allow vertical resizing */
    border: none;
    outline: none;
    font-size: 20px;
    padding: 0 20px;
    background-color: transparent;
    color: ${({ theme }) => (theme.name === "light" ? "black" : "white")};


   &::placeholder {
        color: ${({ theme }) => (theme.name === "light" ? "black" : "white")};
    }
`;

const SendButton = styled.button`
    border: none;
    background-color: transparent;
    color: ${({ theme }) => (theme.name === "light" ? "black" : "white")};
    cursor: pointer;
`;

export default function UserInput() {
    const [message, setMessage] = useState('');
    const textareaRef = useRef(null);
    const inputContainerRef = useRef(null);

    const handleSend = () => {
        if (message.trim() !== '') {
            // Send the message to the backend
            console.log('Sending message:', message);
            // Clear the input field
            setMessage('');
            // Reset textarea height
            textareaRef.current.style.height = 'auto';
            // Reset input container height
            inputContainerRef.current.style.height = 'auto';
        }
    };

    const adjustTextareaHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
            
            if (inputContainerRef.current) {
                inputContainerRef.current.style.height = `${textareaRef.current.scrollHeight + 20}px`; // Adding padding
            }
        }
    };

    return (
        <InputContainer ref={inputContainerRef}>
            <InputField
                ref={textareaRef}
                rows={1}
                placeholder="Send a message"
                value={message}
                onChange={(e) => {
                    setMessage(e.target.value);
                    adjustTextareaHeight();
                }}
            />
            <SendButton onClick={handleSend}>
                <Icon icon="iconamoon:send-bold" width="24" height="24" />
            </SendButton>
        </InputContainer>
    );
};