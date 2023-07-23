import React from "react"
//import styled from "styled-components"
import { Container } from "react-bootstrap"
// components
import Sidebar from "../components/Sidebar"
import Messages from "../components/Messages"
import UserInput from "../components/UserInput"
export default function Home() {
    return (
        <Container fluid>
            <div className="home">
            <div className="container">
                <Sidebar />
                <Messages />
                <UserInput />
             </div>
            </div>
        </Container>
    );
};
