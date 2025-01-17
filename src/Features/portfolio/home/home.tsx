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
  useMediaQuery,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";
import jsPDF from "jspdf";

const Home: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const isMobile = useMediaQuery("(max-width:600px)"); // Hook for mobile view detection

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDownloadCV = () => {
    const doc = new jsPDF();

    // Add header with name and role
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.text("Syamala Vishnu Vardhan Reddy", 20, 20);
    doc.setFontSize(16);
    doc.text("Web Developer", 20, 30);

    // Add a horizontal line for better structure
    doc.setLineWidth(0.5);
    doc.line(20, 35, 190, 35);

    // Contact Information
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text("Contact Information:", 20, 45);
    doc.setFontSize(11);
    doc.text("📞 Phone: +91 8978712843", 20, 55);
    doc.text("📧 Email: vvishnusyamala@gmail.com", 20, 65);
    doc.text("📍 Address: 522018, Ponnekallu, Guntur", 20, 75);
    doc.text(
      "🌐 Portfolio: https://vishnusyamala-portfolio.onrender.com",
      20,
      85
    );
    doc.text(
      "LinkedIn: https://www.linkedin.com/in/vishnu-syamala-8b12972ba/",
      20,
      95
    );
    doc.text(
      "GitHub: https://github.com/syamala-vishnu-vardhan-reddy",
      20,
      105
    );

    // Add spacing for clarity
    doc.setFontSize(12);
    doc.text("Professional Summary:", 20, 120);
    doc.setFont("helvetica", "italic");
    doc.setFontSize(10);
    doc.text(
      "Proactive and detail-oriented final-year Computer Science student with a strong foundation in modern web development.",
      20,
      130
    );
    doc.text(
      "Proficient in creating dynamic, user-friendly applications and solving real-world problems. Passionate about leveraging",
      20,
      135
    );
    doc.text(
      "front-end and full-stack skills to contribute to team-oriented environments.",
      20,
      140
    );

    // Key Skills Section
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text("Key Skills:", 20, 155);
    doc.setFontSize(11);
    doc.text(
      "- Frontend: JavaScript, HTML5, CSS3, React, Redux, Saga",
      20,
      165
    );
    doc.text("- Backend: Node.js, MongoDB", 20, 175);
    doc.text("- Tools & Platforms: Git, VS Code, Postman", 20, 185);
    doc.text("- Programming: Python (Basics)", 20, 195);
    doc.text(
      "- Soft Skills: Teamwork, Problem-solving, Communication",
      20,
      205
    );
    doc.text("- Languages: English, Telugu", 20, 215);

    // Education Section
    doc.setFontSize(12);
    doc.text("Education:", 20, 230);
    doc.setFontSize(11);
    doc.text(
      "Bachelor of Technology in Computer Science and Engineering",
      20,
      240
    );
    doc.text(
      "Vasireddy Venkatadri Institute of Technology (2021–2025)",
      20,
      250
    );
    doc.text(
      "- Specialization: Artificial Intelligence and Machine Learning",
      20,
      260
    );
    doc.text("- CGPA: 7.5/10", 20, 270);

    // Professional Experience Section
    doc.setFontSize(12);
    doc.text("Professional Experience:", 20, 285);
    doc.setFontSize(11);
    doc.text("1. Weather Application:", 20, 295);
    doc.text(
      "- Developed a responsive web app for real-time weather updates using JavaScript, CSS, and APIs.",
      25,
      305
    );
    doc.text(
      "- Focused on UI/UX design to deliver accurate and engaging user experiences.",
      25,
      315
    );

    doc.text("2. Farmer Slice:", 20, 330);
    doc.text(
      "- Created a platform for buying, selling, and renting agricultural tools using React, Redux, Node.js, and MongoDB.",
      25,
      340
    );
    doc.text("- Ensured accessibility and usability for all users.", 25, 350);

    doc.text("3. VisCart Application:", 20, 365);
    doc.text(
      "- Built an e-commerce platform with user authentication, product listing, and payment gateway integration.",
      25,
      375
    );
    doc.text("- Technologies used: React, Redux, Node.js.", 25, 385);

    // Achievements Section
    doc.setFontSize(12);
    doc.text("Achievements:", 20, 400);
    doc.setFontSize(11);
    doc.text(
      "- Served as Class Representative for three consecutive years.",
      20,
      410
    );
    doc.text(
      "- Completed professional certifications in frontend development (Great Learning, Simplilearn).",
      20,
      420
    );

    // Save the PDF
    doc.save("Syamala_Vishnu_Vardhan_Reddy_Resume.pdf");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
        gap: isMobile ? "1.5rem" : "2rem",
      }}
    >
      <motion.div
        initial={{ x: isMobile ? 0 : "-50vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 10 }}
      >
        <Box
          component="img"
          src="/assets/logo/vishnu.jpg"
          alt="Profile"
          sx={{
            width: isMobile ? "200px" : "300px",
            height: isMobile ? "200px" : "300px",
            borderRadius: "50%",
            border: "5px solid #FFC107",
            margin: isMobile ? "0 auto" : "0",
          }}
        />
      </motion.div>

      <motion.div
        initial={{ x: isMobile ? 0 : "50vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 10 }}
      >
        <Box>
          <Typography
            variant={isMobile ? "h5" : "h3"}
            sx={{ fontWeight: "bold", marginBottom: "1rem" }}
          >
            Vishnu Vardhan Reddy
          </Typography>
          <Typography
            variant={isMobile ? "body2" : "subtitle1"}
            sx={{
              marginBottom: "2rem",
              maxWidth: isMobile ? "90%" : "600px",
              marginX: "auto",
            }}
          >
            I’m a passionate front-end developer specializing in creating
            interactive, responsive, and user-friendly web applications. I bring
            designs to life with HTML, CSS, JavaScript, and React.
          </Typography>
          <Box sx={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleDownloadCV}
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
              <GitHubIcon
                sx={{ color: "#FFF", fontSize: isMobile ? "1.5rem" : "2rem" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/vishnu-syamala-8b12972ba/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon
                sx={{ color: "#FFF", fontSize: isMobile ? "1.5rem" : "2rem" }}
              />
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
            label="Job Description"
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
          <Button variant="outlined">Send</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Home;
