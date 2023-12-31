import React, { useState } from 'react'
import styled, { css } from 'styled-components';
import { useAppContext } from "../AppContext";
import { Button } from "react-bootstrap";
// Icons
import { Icon } from "@iconify/react";
//components
import ChatTab from "./ChatTab"
import { name } from "./TestData"

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  align-items: center;
`;

const CustomH1 = styled.h1`
  font-size: 1rem;
  font-family: var(--bs-font-sans-serif);
  font-weight: 400;
`;

const SidebarButtonStyles = css`
  width: 95%;

  &:hover {
    background-color: ${({ theme }) =>
        theme.name === 'light' ? '#f7f7f8' : '#40414f'};
    color: ${({ theme }) => (theme.name === 'light' ? 'black' : 'white')};
  }
`;

const NewChatButton = styled(Button)`
  ${SidebarButtonStyles}
  margin-top: 10px;
`;

const SignOutButton = styled(Button)`
  ${SidebarButtonStyles}
  position: absolute;
  bottom: 10px;
`;

export default function Sidebar({ onSelectChat, setShowNewChat }) {
    const { theme } = useAppContext();
    const [activeChatId, setActiveChatId] = useState(null); // State for active chat

    const handleNewChatClick = () => {
        setActiveChatId(null); // Reset active chat when "New chat" is clicked
        setShowNewChat(true); // Show the NewChat component
        console.log("clicked to start a new chat");
    };
    /*
    const handleSignOutClick = () => {
        // Add your logic to handle the "Sign Out" button click here
        // For example, you can perform a sign-out action or redirect to a sign-out page
        console.log('User signed out');
    };
    */

      return (
    <SidebarContainer>
       <NewChatButton
        size="lg"
        variant={theme === "light" ? "outline-dark" : "outline-light"}
        onClick={handleNewChatClick}
      >
        <Icon icon="ei:plus" /> New chat
       </NewChatButton>

       <ChatTab
            activeChatId={activeChatId} // Pass activeChatId prop to ChatTab
            onSelectChat={(chatId) => {
                setActiveChatId(chatId); // Update active chat when a chat is clicked
                onSelectChat(chatId); // Call the passed onSelectChat function
                setShowNewChat(false); // Hide the NewChat component when a chat is selected
            }}
       />

      <SignOutButton
        size="lg"
        variant={theme === "light" ? "outline-dark" : "outline-light"}
        onClick={() => console.log("clicked to sign out")}
      >
        <CustomH1> <Icon icon="bi:box-arrow-right" /> sign out: {name} </CustomH1>
      </SignOutButton>
    </SidebarContainer>
  );
};