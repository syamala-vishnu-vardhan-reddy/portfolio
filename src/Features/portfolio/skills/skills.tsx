// Skills.tsx
import React from 'react';
import { Container, Typography, Box, Grid, Paper, Rating } from '@mui/material';

const Skills: React.FC = () => {
  const skills = [
    { name: 'JavaScript', rating: 4.5 },
    { name: 'React', rating: 4.0 },
    { name: 'TypeScript', rating: 4.0 },
    { name: 'CSS', rating: 3.5 },
    { name: 'HTML', rating: 4.0 }
  ];

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Skills
        </Typography>
        <Grid container spacing={4}>
          {skills.map(skill => (
            <Grid item xs={12} sm={6} md={4} key={skill.name}>
              <Paper elevation={6} sx={{ p: 3, textAlign: 'center', borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom>
                  {skill.name}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <Rating name={skill.name} value={skill.rating} precision={0.5} readOnly />
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Skills;
