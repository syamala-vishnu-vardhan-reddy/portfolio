// contact/contact.tsx
import React from 'react';
import { Typography, Box, Link } from '@mui/material';

const Contact: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <Typography variant="h2">Contact</Typography>
        <Box mt={2}>
          <Typography variant="body1">
            You can reach me at <Link href="vvishnusyamala@gmail.com">vvishnusyamala@gmail.com</Link>
          </Typography>
          <Typography variant="body1">
            Connect with me on LinkedIn: <Link href="https://www.linkedin.com/in/vishnu-syamala-8b12972ba/">Your LinkedIn Profile</Link>
          </Typography>
          <Typography variant="body1">
            Check out my GitHub: <Link href="https://github.com/syamala-vishnu-vardhan-reddy">Your GitHub Profile</Link>
          </Typography>
        </Box>
      </div>
    </section>
  );
}

export default Contact;
