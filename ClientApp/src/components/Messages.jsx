/*
takes an array of messages, and renders using the `Message` component
*/
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Message from './Message'; // Import the Message component

const MessagesContainer = styled.div`
    /* Apply styles for message container */
  flex: 1; /* Expand to take available space */
  display: flex;
  flex-direction: column;
  overflow-y: auto; /* Enable scrolling if content overflows */
  max-height: calc(100vh - 200px); /* Adjust the max height to fit your layout */
`;

const Messages = ({ messages }) => {
    const messagesContainerRef = useRef(null); // Create a ref for the messages container

    useEffect(() => {
        // Scroll to the bottom of the messages container whenever new messages are added
        messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }, [messages]);


    return (
        <MessagesContainer ref={messagesContainerRef}>
            {messages.map((message) => (
                <Message key={message.id} message={message} />
            ))}
        </MessagesContainer>
    );
};

export default Messages;
