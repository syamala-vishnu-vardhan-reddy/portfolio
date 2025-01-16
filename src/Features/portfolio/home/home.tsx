import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSend = () => {
    // Configure emailjs
    emailjs
      .send(
        "service_3jghtvr", // Replace with your EmailJS service ID
        "template_j1dtt2a", // Replace with your EmailJS template ID
        formData,
        "28a1HGoTcyhxm00aq" // Replace with your EmailJS user ID
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setOpen(false);
          setFormData({ name: "", email: "", message: "" });
        },
        (error: unknown) => {
          console.error("Failed to send email:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        position: "relative",
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ x: "-50vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 10 }}
      >
        <Box
          component="img"
          src="/assets/logo/vishnu.jpg"
          alt="Profile"
          sx={{
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            border: "5px solid #FFC107",
            marginRight: "2rem",
          }}
        />
      </motion.div>

      <motion.div
        initial={{ x: "50vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 10 }}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", marginBottom: "1rem" }}
          >
            Vishnu Vardhan Reddy
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ marginBottom: "2rem", maxWidth: "600px", marginX: "auto" }}
          >
            I’m a passionate front-end developer specializing in creating
            interactive, responsive, and user-friendly web applications. I bring
            designs to life with HTML, CSS, JavaScript, and React.
          </Typography>
          <Box sx={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <Button
              variant="contained"
              color="primary"
              href="" // Google Drive link
              download="Vishnu_Vardhan_Reddy_CV"
              sx={{
                backgroundColor: "#FFC107",
                color: "#000",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#FFD54F" },
              }}
            >
              Download CV
            </Button>

            <Button
              variant="outlined"
              color="primary"
              onClick={() => setOpen(true)}
              sx={{
                borderColor: "#FFC107",
                color: "#FFC107",
                fontWeight: "bold",
                "&:hover": { color: "#FFD54F" },
              }}
            >
              Hire Me
            </Button>
          </Box>
          <Box
            sx={{
              marginTop: "2rem",
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            <a
              href="https://github.com/syamala-vishnu-vardhan-reddy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon sx={{ color: "#FFF", fontSize: "2rem" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/vishnu-syamala-8b12972ba/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon sx={{ color: "#FFF", fontSize: "2rem" }} />
            </a>
          </Box>
        </Box>
      </motion.div>

      {/* Hire Me Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Hire Me</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="message"
            label="job description"
            type="text"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            value={formData.message}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="outlined" onClick={handleSend}>
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Home;
