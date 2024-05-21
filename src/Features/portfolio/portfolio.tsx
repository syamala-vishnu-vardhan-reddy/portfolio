import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CssBaseline, Container, Box } from '@mui/material'
import Header from './header/header'
import Home from './home/home'
import About from './about/about'
import Skills from './skills/skills'
import Projects from './projects/projects'
import Contact from './contact/contact'
import Footer from './footer/footer'
import TodoList from '../todo/todoList'
import WeatherApp from '../weather/weather'

const Portfolio: React.FC = () => {
  return (
    <Router>
      <CssBaseline />
      <Box
        sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <Header />
        <Container sx={{ flexGrow: 1, mt: 1, marginLeft: 0, marginTop: 2 }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/todo-list' element={<TodoList />} />
            <Route path='/weather' element={<WeatherApp />} />
          </Routes>
        </Container>
        <Footer />
      </Box>
    </Router>
  )
}

export default Portfolio
