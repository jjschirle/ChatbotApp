import React from "react"
//import styled from "styled-components"
import { Container } from "react-bootstrap"
// components
import Sidebar from "../components/Sidebar"
import Chat from "../components/Chat"




export default function Home() {
    return (
        <Container>
            <div className="home">
            <div className="container">
                <Sidebar />
                <Chat />
             </div>
            </div>
        </Container>
    );
};