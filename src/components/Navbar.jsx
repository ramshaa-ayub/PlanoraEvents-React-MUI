import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import { NavLink } from "react-router-dom";
import LoginModal from "../components/LoginModal";


// const [openLogin, setOpenLogin] = React.useState(false);


const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Drawer content for mobile
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h5"
        sx={{
          my: 2,
          fontFamily: "Playfair Display, serif",
          fontWeight: 600,
          color: "#b42576",
        }}
      >
        Planora EVENTS
      </Typography>
      <Divider sx={{ backgroundColor: "#b42576" }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.path}
              sx={{
                textAlign: "center",
                color: "#fff",
                "&.active": { color: "#b42576" },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              setOpenLogin(true);
              setMobileOpen(false);
            }}
            sx={{
              textAlign: "center",
              mt: 1,
              border: "2px solid #b42576",
              borderRadius: 2,
              color: "#FBCFE8",
              "&:hover": { backgroundColor: "#b42576", color: "#240046" },
            }}
          >
            <LoginIcon sx={{ mr: 1 }} />
            <Typography>Login</Typography>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: "transparent",
          backdropFilter: "blur(6px)",
        }}
      >
        <Toolbar
          sx={{
            px: { xs: 2, md: 6 },
            minHeight: { xs: 70, md: 100 },
            display: "flex",
          }}
        >
          {/* LOGO */}
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 600,
                letterSpacing: "2px",
              }}
            >
              Planora{" "}
              <span
                style={{
                  color: "#b42576",
                  fontWeight: 1000,
                  fontSize: "1.9rem",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                EVENTS
              </span>
            </Typography>
          </Box>

          {/* DESKTOP NAV */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 2,
              justifyContent: "center",
              gap: 3,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={NavLink}
                to={item.path}
                sx={{
                  color: "#fff",
                  fontSize: "0.85rem",
                  letterSpacing: "1.5px",
                  position: "relative",
                  transition: "0.3s",
                  "&:hover": { color: "#FBCFE8" },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "0%",
                    height: "2px",
                    bottom: -4,
                    left: 0,
                    backgroundColor: "#b42576",
                    transition: "0.3s",
                  },
                  "&:hover::after": { width: "100%" },
                  "&.active": { color: "#b42576" },
                  "&.active::after": { width: "100%" },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* DESKTOP LOGIN BUTTON */}
          <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1, justifyContent: "flex-end" }}>
            <Button onClick={() => setOpenLogin(true)}
              sx={{
                color: "#FBCFE8",
                border: "3px solid #b42576",
                borderRadius: 4,
                px: 2,
                transition: "0.3s",
                "&:hover": { backgroundColor: "#b42576", color: "#240046" },
              }}
            >
              <LoginIcon sx={{ mr: 1 }} />
              Login
            </Button>
          </Box>

          {/* MOBILE HAMBURGER */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 1 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: { backgroundColor: "#1B102B", color: "#fff", width: 250 },
        }}
      >
        {drawer}
      </Drawer>
      <LoginModal
        open={openLogin}
        onClose={() => setOpenLogin(false)}
      />

    </>
  );
}

export default Navbar;
