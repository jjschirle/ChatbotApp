import React from 'react'
import { useAppContext } from "./AppContext";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// Components
import NavBar from "./components/NavBar";
import GlobalStyling from './components/GlobalStyle';
// Pages
import  Home  from "./pages/Home";
import Jokes from "./pages/Jokes";
import About from "./pages/About";


const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const themes = {
    light: {
        name: "light",
        color: "#45413C",
        background: "#F5F2E8",
    },
    dark: {
        name: "dark",
        color: "#FBFDFF",
        background: "#27272A",
    },
};

// export default function App()
function App() {
    const { theme, setTheme } = useAppContext();

    React.useEffect(
        function () {
            const updateTheme = () =>
                darkMode ? setTheme("dark") : setTheme("light");
            updateTheme();
        },
        [setTheme]
    );

    window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) =>
            e.matches ? setTheme("dark") : setTheme("light")
        );

    return (
        <HashRouter>
            <ThemeProvider theme={themes[theme]}>
                <GlobalStyling />
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/Jokes" element={<Jokes />} />
                    <Route exact path="/About" element={<About />} />
                </Routes>
            </ThemeProvider>
        </HashRouter>
    );
}
export default App;