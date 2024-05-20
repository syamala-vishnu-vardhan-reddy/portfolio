import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer: React.FC = () => {
  return (
    <Box
      sx={{ textAlign: 'center', py: 2, borderTop: '1px solid #ddd', mt: 4 }}
    >
      <Typography variant='body2'>
        &copy; {new Date().getFullYear()} syamala vishnu vardhan reddy All
        rights reserved.
      </Typography>
    </Box>
  )
}

export default Footer
