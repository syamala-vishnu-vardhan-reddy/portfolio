import { Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      icon: (
        <img
          src={"/assets/logo/Javascriptlogo.png"}
          style={{ width: "10vh", height: "10vh" }}
        />
      ),
    },
    {
      icon: (
        <img
          src={"/assets/logo/reactlogo.png"}
          style={{ width: "10vh", height: "10vh" }}
        />
      ),
    },
    {
      icon: (
        <img
          src={"/assets/logo/typescriptlogo.png"}
          style={{ width: "10vh", height: "10vh" }}
        />
      ),
    },
    {
      icon: (
        <img
          src={"/assets/logo/csslogo.png"}
          style={{ width: "10vh", height: "10vh" }}
        />
      ),
    },
    {
      icon: (
        <img
          src={"/assets/logo/htmllogo.png"}
          alt="HTML Logo"
          style={{ width: "10vh", height: "10vh" }}
        />
      ),
    },
    {
      icon: (
        <img
          src={"/assets/logo/redux-icon.png"}
          alt="Redux Logo"
          style={{ width: "10vh", height: "10vh" }}
        />
      ),
    },
    {
      icon: (
        <img
          src={"/assets/logo/sagalogo.png"}
          alt="Saga Logo"
          style={{ width: "10vh", height: "10vh" }}
        />
      ),
    },
    {
      icon: (
        <img
          src={"/assets/logo/materiallogo.png"}
          alt="Material UI Logo"
          style={{ width: "10vh", height: "10vh" }}
        />
      ),
    },
  ];

  return (
    <Grid container>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        {" "}
        <Typography variant="h4" align="left" gutterBottom>
          Skills
        </Typography>
        <Grid container spacing={3}>
          {skills.map((skill, index) => (
            <Grid item xs={4} key={index}>
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
      <Grid item xs={3}></Grid>
    </Grid>
  );
};

export default Skills;
