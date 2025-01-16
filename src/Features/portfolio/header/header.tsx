import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Popover,
  Box,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Header = () => {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // Media Query for Mobile
  const isMobile = useMediaQuery("(max-width:600px)");

  const styles = {
    avatar: { marginLeft: "16px", cursor: "pointer" },
    popoverAvatar: { width: "100px", height: "100px", margin: "auto" },
    navButton: { textTransform: "none" },
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          {/* Title */}
          <Button color="inherit" component={Link} to="/" sx={styles.navButton}>
            <Typography variant="h6">My Portfolio</Typography>
          </Button>

          {/* Spacer for Alignment */}
          <div style={{ flexGrow: 1 }} />

          {/* Navigation Links */}
          {!isMobile && (
            <>
              <Button
                color="inherit"
                component={Link}
                to="/"
                variant={location.pathname === "/" ? "outlined" : "text"}
              >
                Home
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/about"
                variant={location.pathname === "/about" ? "outlined" : "text"}
              >
                About
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/skills"
                variant={location.pathname === "/skills" ? "outlined" : "text"}
              >
                Skills
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/projects"
                variant={
                  location.pathname === "/projects" ? "outlined" : "text"
                }
              >
                Projects
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/contact"
                variant={location.pathname === "/contact" ? "outlined" : "text"}
              >
                Contact
              </Button>
            </>
          )}

          {/* Avatar */}
          <Avatar
            alt="Syamala Vishnu Vardhan Reddy"
            src="/assets/logo/project.jpg"
            style={styles.avatar}
            onClick={handleAvatarClick}
          />
        </Toolbar>
      </AppBar>

      {/* Popover for Avatar */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box sx={{ p: 2, textAlign: "center" }}>
          <Avatar
            alt="Syamala Vishnu Vardhan Reddy"
            src="/assets/logo/project.jpg"
            style={styles.popoverAvatar}
          />
          <Typography variant="h6" sx={{ mt: 1 }}>
            Syamala Vishnu Vardhan Reddy
          </Typography>
          <Typography variant="body1">Frontend Developer</Typography>
          <Typography variant="body2" color="textSecondary">
            vvishnusyamala@gmail.com
          </Typography>
          <Box
            sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 1 }}
          >
            <IconButton
              color="primary"
              href="mailto:vvishnusyamala@gmail.com"
              aria-label="email"
            >
              <EmailIcon />
            </IconButton>
            <IconButton
              color="primary"
              href="tel:8978712843"
              aria-label="phone"
            >
              <PhoneIcon />
            </IconButton>
            <IconButton
              color="primary"
              href="https://www.linkedin.com/in/vishnu-syamala-8b12972ba/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="primary"
              href="https://github.com/syamala-vishnu-vardhan-reddy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </IconButton>
          </Box>
          <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
            +91 8978712843
          </Typography>
        </Box>
      </Popover>
    </>
  );
};

export default Header;
