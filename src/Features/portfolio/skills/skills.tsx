import { Container, Typography, Box, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      icon: (
        <img
          src={"/assets/logo/Javascriptlogo.png"}
          style={{ width: 150, height: 150 }}
        />
      ),
    },
    {
      icon: (
        <img
          src={"/assets/logo/reactlogo.png"}
          style={{ width: 150, height: 150 }}
        />
      ),
    },
    {
      icon: (
        <img
          src={"/assets/logo/typescriptlogo.png"}
          style={{ width: 150, height: 150 }}
        />
      ),
    },
    {
      icon: (
        <img
          src={"/assets/logo/csslogo.png"}
          style={{ width: 150, height: 150 }}
        />
      ),
    },
    {
      icon: (
        <img
          src={"/assets/logo/htmllogo.png"}
          alt="React Logo"
          style={{ width: 150, height: 150 }}
        />
      ),
    },
    {
      icon: (
        <img
          src={"/assets/logo/redux-icon.png"}
          alt="React Logo"
          style={{ width: 150, height: 150 }}
        />
      ),
    },
    {
      icon: (
        <img
          src={"/assets/logo/sagalogo.png"}
          alt="React Logo"
          style={{ width: 200, height: 150 }}
        />
      ),
    },
    {
      icon: (
        <img
          src={"/assets/logo/materiallogo.png"}
          alt="React Logo"
          style={{ width: 150, height: 150 }}
        />
      ),
    },
  ];

  const cardHover = {
    hover: { scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)" },
  };

  return (
    <Container sx={{ marginTop: -8, marginLeft: -2 }}>
      <Box mt={8}>
        <Typography variant="h4" align="left" gutterBottom>
          Skills
        </Typography>
        <Grid container spacing={4}>
          {skills.map((skill) => (
            <Grid item xs={12} sm={6} md={4}>
              <motion.div
                whileHover="hover"
                variants={cardHover}
                style={{ borderRadius: "8px", overflow: "hidden" }}
              >
                <Paper
                  elevation={6}
                  sx={{ p: 3, textAlign: "center", borderRadius: 2 }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mb={2}
                  >
                    {skill.icon}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Skills;
