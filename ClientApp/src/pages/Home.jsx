import React, { useState } from "react"
//import styled from "styled-components"
import { Container, Col } from "react-bootstrap"
import styled from 'styled-components'
// components
import Sidebar from "../components/Sidebar"
import NewChat from "../components/NewChat"
import Messages from "../components/Messages"
import UserInput from "../components/UserInput"
// chat data - will need to fetch later
import { chatData } from '../components/TestData'


const CustomContainer = styled(Container)`
  margin: 20px auto;
  width: 100%; 
  height: 100vh;
  position: fixed;

`;

const HomeContainer = styled.div`
  height: 90%;
  display: flex;
  background:  ${({ theme }) => (theme.name === "light" ? "#ececf1" : "#212121")};
  border: 1px ${({ theme }) => (theme.name === "light" ? "solid black" : "solid white")};
  border-radius: 10px;
  overflow: hidden;
`;


// Colors main content area
const CustomCol = styled(Col)`
  background-color: ${({ theme }) =>
    theme.name === "light" ? "#fff" : "#40414f"};
  height: 100%;
  width: calc(100% - var(--sidebar-width));
  padding: 0;
  display flex;
  position: relative;

`;

/* can use calc() for spacing - but don't want/need a dynamic layout
const MessagesSpacing = styled.div`
    height:calc(100% - 70px);
`;
*/

/*using absolute positioning to "stick" the input at the bottom*/
const UserInputSticky = styled.div`
   position: absolute;
   bottom: 0;
   padding: 10px;
   width: 100%;
   `;


export default function Home() {
    const [showNewChat, setShowNewChat] = useState(null); // State to control whether to show NewChat
    const [selectedChatId, setSelectedChatId] = useState(null); // State for selected chat id

    const handleChatSelect = (chatId) => {
        setSelectedChatId(chatId); // Update selected chat id
        setShowNewChat(false); // Hide the NewChat component when a chat is selected
    };

    return (
        <CustomContainer fluid>
            <HomeContainer>
                <Col className="sidebar col-4">
                    <Sidebar onSelectChat={handleChatSelect} setShowNewChat={setShowNewChat} />
                </Col>
                <CustomCol className="message-col col-8">
                    {showNewChat ? <NewChat /> : (
                        <>
                            <Messages messages={selectedChatId ? chatData.find(chat => chat.id === selectedChatId).messages : []} />
                        </>
                    )}
                    <UserInputSticky>
                        <UserInput />
                    </UserInputSticky>
                </CustomCol>
            </HomeContainer>
        </CustomContainer>
    );
}