import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Typography, Box, Link, Container, Paper, Grid } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { useMediaQuery } from "@mui/material";

const Contact: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        padding: "50px 0",
        borderRadius: "12px",
      }}
      id="contact"
    >
      <Container
        maxWidth="md"
        sx={{
          margin: "0 auto",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: "30px",
            borderRadius: "12px",
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Contact
          </Typography>
          <Box mt={4}>
            <Grid
              container
              spacing={3}
              alignItems="center"
              justifyContent="center"
              direction={isMobile ? "column" : "row"} // Stack vertically for mobile
            >
              <Grid item xs={12} sm={6} md={6}>
                <Box display="flex" alignItems="center">
                  <EmailIcon sx={{ marginRight: "10px", color: "#3f51b5" }} />
                  <Typography variant="body1">
                    Email:{" "}
                    <Link
                      href="mailto:vvishnusyamala@gmail.com"
                      color="secondary"
                    >
                      vvishnusyamala@gmail.com
                    </Link>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={5} md={6}>
                <Box display="flex" alignItems="left">
                  <LinkedInIcon sx={{ marginRight: "5px", color: "#0077b5" }} />
                  <Typography variant="body1">
                    LinkedIn:{" "}
                    <Link
                      href="https://www.linkedin.com/in/vishnu-syamala-8b12972ba/"
                      color="secondary"
                    >
                      Vishnu Syamala
                    </Link>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Box display="flex" alignItems="center">
                  <GitHubIcon sx={{ marginRight: "10px", color: "#333" }} />
                  <Typography variant="body1">
                    GitHub:{" "}
                    <Link
                      href="https://github.com/syamala-vishnu-vardhan-reddy"
                      color="secondary"
                    >
                      syamala-vishnu-vardhan-reddy
                    </Link>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Box display="flex" alignItems="center">
                  <PhoneIcon sx={{ marginRight: "10px", color: "#4caf50" }} />
                  <Typography variant="body1">
                    Phone:{" "}
                    <Link href="tel:8978712843" color="secondary">
                      8978712843
                    </Link>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;
