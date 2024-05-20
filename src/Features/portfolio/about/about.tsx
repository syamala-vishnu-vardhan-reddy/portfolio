// About.tsx
import React from 'react'
import './about.css' // Import CSS file for styling
import { Container, Typography } from '@mui/material';

const About: React.FC = () => {
  return (
    <section className='about' id='about'>
      <Container>
        <Typography variant="h2" gutterBottom align="center">
          About Me
        </Typography>
        <Typography variant="body1" align="center">
          I am a frontend developer with a passion for creating responsive web applications. I have experience with React, JavaScript, HTML, CSS, Python, and MongoDB.
        </Typography>
      </Container>
    </section>
  );
}

export default About;
