import React from 'react';
import { Typography, Box } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to My Portfolio
      </Typography>
      <Typography variant="body1">
        This is the home page of my portfolio. Explore my projects, skills, and more.
      </Typography>
    </Box>
  );
};

export default Home;
