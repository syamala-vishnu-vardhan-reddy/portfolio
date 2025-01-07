import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Home from "./home/home";
import About from "./about/about";
import Skills from "./skills/skills";
import Projects from "./projects/projects";
import Contact from "./contact/contact";
import Header from "./header/header";
import Footer from "./footer/footer";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#30e330",
    },
    secondary: {
      main: "#9315ed",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#de25e8",
    },
    secondary: {
      main: "#e831e5",
    },
  },
});

const Portfolio: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
        >
          {/* Header with Theme Toggle */}
          <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

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
      </Router>
    </ThemeProvider>
  );
};

export default Portfolio;
