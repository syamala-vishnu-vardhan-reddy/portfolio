import React from "react";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import Home from "./home/home";
import About from "./about/about";
import Skills from "./skills/skills";
import Projects from "./projects/projects";
import Contact from "./contact/contact";
import Header from "./header/header";
import Footer from "./footer/footer";

const CustomRouter = ({ children }: { children: React.ReactNode }) => {
  const useHashRouter = true;

  return useHashRouter ? (
    <HashRouter>{children}</HashRouter>
  ) : (
    <BrowserRouter>{children}</BrowserRouter>
  );
};

const Portfolio: React.FC = () => {
  // Set the theme to match the dark theme in the design
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#FFC107" }, // Yellow primary color
      background: { default: "#121212" }, // Dark background color
      text: { primary: "#FFFFFF" }, // White text color
    },
    typography: {
      fontFamily: "'Roboto', sans-serif",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CustomRouter>
        <Box
          sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
        >
          {/* Header */}
          <Header />

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
      </CustomRouter>
    </ThemeProvider>
  );
};

export default Portfolio;
