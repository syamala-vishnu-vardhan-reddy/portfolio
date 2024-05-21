import React from 'react'
import './about.css' // Import CSS file for styling
import { Box, Divider, Typography } from '@mui/material'

const About: React.FC = () => {
  return (
    <Box>
      <Typography variant='h4' gutterBottom align='left'>
        About Me
      </Typography>
      <Typography variant='body1' align='left'>
        I am a frontend developer with a passion for creating responsive web
        applications. I have experience with React, JavaScript, HTML, CSS,
        Python, and MongoDB.
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ mt: 2 }}>
        <Typography variant='h6' gutterBottom>
          Education
        </Typography>

        {/* Tenth Details */}
        <Box sx={{ borderBottom: 1, borderColor: 'grey.300', py: 2 }}>
          <Typography variant='subtitle1'>
            <strong>Tenth:</strong> sri chaitanya School.
          </Typography>
          <Typography variant='subtitle1'>
            <strong>Board:</strong> Andhra Pradesh Board.
          </Typography>
          <Typography variant='subtitle1'>
            <strong>CGPA:</strong> 9.5.
          </Typography>
          <Typography variant='subtitle1'>
            <strong>Address:</strong> guntur,andhra pradesh.
          </Typography>
        </Box>

        {/* Intermediate Details */}
        <Box sx={{ borderBottom: 1, borderColor: 'grey.300', py: 2 }}>
          <Typography variant='subtitle1' sx={{ mt: 2 }}>
            <strong>Intermediate:</strong>Narayana Junior College
          </Typography>
          <Typography variant='subtitle1'>
            <strong>Board:</strong> Andra Pradesh Board.
          </Typography>
          <Typography variant='subtitle1'>
            <strong>Marks:</strong>899
          </Typography>
          <Typography variant='subtitle1'>
            <strong>Address:</strong> guntur,andhra pradesh.
          </Typography>
        </Box>

        {/* Degree Details */}
        <Box sx={{ py: 2 }}>
          <Typography variant='subtitle1' sx={{ mt: 2 }}>
            <strong>Degree:</strong> Bachelor of Science in Computer Science
          </Typography>
          <Typography variant='subtitle1'>
            <strong>University:</strong> Vasireddy Venkatadri Institute of
            Technology
          </Typography>
          <Typography variant='subtitle1'>
            <strong>GPA:</strong> 7.5/10
          </Typography>
          <Typography variant='subtitle1'>
            <strong>Address:</strong> guntur,andhra pradesh.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default About
