import React from "react";
import { useAppContext } from "../AppContext";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
// AppRoutes
import AppRoutes from "../AppRoutes"
// Icons
import { Icon } from "@iconify/react";
// Components
import { Container, Nav, Navbar } from "react-bootstrap";

import Logo from "../images/artificial-intelligence.svg"

// Theme Toggle
const StyledSwitch = styled.label`
  /* Slider pill */
  display: flex;
  width: 3.2rem;
  font-size: 1.5rem;
  border-radius: 30px;
  transition: var(--transition);
  border: 2px solid;

  /* Hide default checkbox */
  input[type="checkbox"] {
    height: 0;
    width: 0;
    opacity: 0;
  }
  /* Move span when checked */
  input[type="checkbox"]:checked + div {
    transform: translateX(100%);
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: var(--transition);
  }
`;

// Spacer for fixed Navigation bar
const FixedNavSpacer = styled.div`
  height: var(--nav-height);
`;

function ThemeToggle() {
    const { theme, toggleTheme, closeExpanded } = useAppContext();

    return (
        <StyledSwitch onClick={closeExpanded}>
            <input
                type="checkbox"
                aria-label={`Toggle theme, currently ${theme}.`}
                onClick={toggleTheme}
            />
            <div>
                {theme === "light" ? (
                    <Icon icon="vaadin:sun-o" />
                ) : (
                    <Icon icon="game-icons:moon" />
                )}
            </div>
        </StyledSwitch>
    );
}

export default function NavBar() {
    const { pathname } = useLocation();
    const { theme, isExpanded, closeExpanded, toggleExpanded } = useAppContext();

    return (
        <>
            <FixedNavSpacer />
            <Navbar
                id="nav"
                collapseOnSelect={true}
                expand="lg"
                expanded={isExpanded}
                bg={theme === "light" ? "light" : "dark"}
                variant={theme === "light" ? "light" : "dark"}
                fixed="top"
            >
                <Container>
                    <Navbar.Brand>
                        <img
                            alt="React Logo"
                            src={Logo}
                            width="40"
                            height="40"
                            className="rounded-circle"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="responsive-navbar-nav"
                        onClick={toggleExpanded}
                    />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {AppRoutes.routes.map((el) => {
                                return (
                                    <Nav.Item key={el.id}>
                                        <Link
                                            to={el.route}
                                            className={
                                                pathname === el.route
                                                    ? "nav-link active"
                                                    : "nav-link"
                                            }
                                            onClick={closeExpanded}
                                        >
                                            {el.name}
                                        </Link>
                                    </Nav.Item>
                                );
                            })}
                        </Nav>
                        <Nav>
                            <ThemeToggle />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}