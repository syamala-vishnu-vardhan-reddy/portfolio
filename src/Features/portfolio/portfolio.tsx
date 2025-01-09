import React, { useState } from "react";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./home/home";
import About from "./about/about";
import Skills from "./skills/skills";
import Projects from "./projects/projects";
import Contact from "./contact/contact";
import Header from "./header/header";
import Footer from "./footer/footer";

const Portfolio: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<
    "green" | "pink" | "blue" | "orange" | "purple"
  >("green");

  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);
  const handleThemeChange = (theme: string) =>
    setSelectedTheme(theme as "green" | "pink" | "blue" | "orange" | "purple");

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main:
          selectedTheme === "green"
            ? "#30e330"
            : selectedTheme === "pink"
            ? "#9315ed"
            : selectedTheme === "blue"
            ? "#1e88e5"
            : selectedTheme === "orange"
            ? "#ff9800"
            : "#9c27b0", // Purple
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Use HashRouter with a basename */}
      <HashRouter>
        <Box
          sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
        >
          {/* Header */}
          <Header
            toggleTheme={toggleTheme}
            isDarkMode={isDarkMode}
            handleThemeChange={handleThemeChange}
            selectedTheme={selectedTheme}
          />

          {/* Main Content */}
          <Box sx={{ flexGrow: 1, p: 3 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects/*" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>

          {/* Footer */}
          <Footer />
        </Box>
      </HashRouter>
    </ThemeProvider>
  );
};

export default Portfolio;
