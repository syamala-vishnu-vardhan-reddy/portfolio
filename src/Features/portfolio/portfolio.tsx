import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import Header from './header/header';
import Home from './home/home';
import About from './about/about';
import Skills from './skills/skills';
import Projects from './projects/projects';
import Contact from './contact/contact';
import Footer from './footer/footer';
import TodoList from '../todo/todoList';
import WeatherApp from '../weather/weather';

const App: React.FC = () => {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="/weather" element={<WeatherApp />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
