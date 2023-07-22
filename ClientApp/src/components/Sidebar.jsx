import React from 'react'
//import { useState } from 'react';
import { useAppContext } from "../AppContext";
import { Button } from "react-bootstrap";
// Icons
import { Icon } from "@iconify/react";
//components
import ChatTab from "./ChatTab"
import { name } from "./TestData"


export default function Sidebar() {
    const { theme } = useAppContext();
    //const [chatOpened, setChatOpened] = useState(false); // State to track whether the chat is open

    /*
    const handleNewChatClick = () => {
        // Add your logic to handle the "New chat" button click here
        // For example, you can open a chat window or set a state to indicate the chat is opened
        setChatOpened(true);
    };

    const handleSignOutClick = () => {
        // Add your logic to handle the "Sign Out" button click here
        // For example, you can perform a sign-out action or redirect to a sign-out page
        console.log('User signed out');
    };
    */

    return (
        <div className="sidebar" style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Button
                size="lg"
                variant={theme === "light" ? "outline-dark" : "outline-light"}
                style={{ width: '95%', marginTop: '10px' }}
                onClick={() => console.log("clicked to start a new chat")}
            //    onClick={handleNewChatClick} // Attach the event handler for "New chat" button click
            >
                <Icon icon="ei:plus" /> New chat
            </Button>

            <ChatTab />

            <div style={{ flexGrow: 1 }}></div> {/* Empty div that grows and pushes the sign-out button to the bottom */}
            <Button
                size="lg"
                variant={theme === "light" ? "outline-dark" : "outline-light"}
                style={{ width: '95%', marginBottom: '10px' }}
                onClick={ () => console.log("clicked to sign out")}
            //    onClick={handleSignOutClick} // Attach the event handler for "Sign Out" button click
            >
                {name} Sign Out <Icon icon="bi:box-arrow-right" />
            </Button>
            </div>
    );
};