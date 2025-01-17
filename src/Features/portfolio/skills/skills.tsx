import { Typography, Grid, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

const Skills = () => {
  const isMobile = useMediaQuery("(max-width:600px)"); // Detect mobile view

  const skills = [
    {
      icon: (
        <img
          src={"/assets/logo/Javascriptlogo.png"}
          style={{
            width: isMobile ? "8vh" : "10vh",
            height: isMobile ? "8vh" : "10vh",
          }}
          alt="JavaScript Logo"
        />
      ),
    },
    {
      icon: (
        <img
          src={"/assets/logo/reactlogo.png"}
          style={{
            width: isMobile ? "8vh" : "10vh",
            height: isMobile ? "8vh" : "10vh",
          }}
          alt="React Logo"
        />
      ),
    },
    {
      icon: (
        <img
          src={"/assets/logo/typescriptlogo.png"}
          style={{
            width: isMobile ? "8vh" : "10vh",
            height: isMobile ? "8vh" : "10vh",
          }}
          alt="TypeScript Logo"
        />
      ),
    },
    {
      icon: (
        <img
          src={"/assets/logo/csslogo.png"}
          style={{
            width: isMobile ? "8vh" : "10vh",
            height: isMobile ? "8vh" : "10vh",
          }}
          alt="CSS Logo"
        />
      ),
    },
    {
      icon: (
        <img
          src={"/assets/logo/htmllogo.png"}
          style={{
            width: isMobile ? "8vh" : "10vh",
            height: isMobile ? "8vh" : "10vh",
          }}
          alt="HTML Logo"
        />
      ),
    },
    {
      icon: (
        <img
          src={"/assets/logo/redux-icon.png"}
          style={{
            width: isMobile ? "8vh" : "10vh",
            height: isMobile ? "8vh" : "10vh",
          }}
          alt="Redux Logo"
        />
      ),
    },
    {
      icon: (
        <img
          src={"/assets/logo/sagalogo.png"}
          style={{
            width: isMobile ? "8vh" : "10vh",
            height: isMobile ? "8vh" : "10vh",
          }}
          alt="Saga Logo"
        />
      ),
    },
    {
      icon: (
        <img
          src={"/assets/logo/materiallogo.png"}
          style={{
            width: isMobile ? "8vh" : "10vh",
            height: isMobile ? "8vh" : "10vh",
          }}
          alt="Material UI Logo"
        />
      ),
    },
  ];

  return (
    <Grid
      container
      spacing={isMobile ? 2 : 3}
      sx={{ padding: isMobile ? "1rem" : "2rem" }}
    >
      <Grid item xs={12} sm={3}></Grid>
      <Grid item xs={12} sm={6}>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          align={isMobile ? "center" : "left"}
          gutterBottom
        >
          Skills
        </Typography>
        <Grid container spacing={isMobile ? 2 : 3}>
          {skills.map((skill, index) => (
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              key={index}
              display="flex"
              justifyContent="center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1 }}
              >
                {skill.icon}
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} sm={3}></Grid>
    </Grid>
  );
};

export default Skills;
