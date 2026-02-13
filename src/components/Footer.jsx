import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Box
      sx={{
        mt: 10,
        pt: 8,
        pb: 4,
        background:
          "linear-gradient(180deg, #1B102B, #2A143D, )",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* BRAND */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Playfair Display, serif",
                letterSpacing: "2px",
                fontWeight: 700,
                mb: 2,
              }}
            >
              Planora{" "}
              <span style={{ color: "#b42576", fontWeight: 900 }}>
                EVENTS
              </span>
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "#e0d7e8",
                lineHeight: 1.9,
                maxWidth: 320,
              }}
            >
              We design elegant, meaningful, and flawlessly executed events.
              From luxury weddings to corporate gatherings, Planora Events
              transforms moments into unforgettable memories.
            </Typography>
          </Grid>

          {/* QUICK LINKS */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle1"
              sx={{
                mb: 3,
                letterSpacing: "2px",
                fontWeight: 600,
                color: "#f1c6e7",
              }}
            >
              QUICK LINKS
            </Typography>

            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <Typography
                key={link.name}
                component={Link}
                to={link.path}
                sx={{
                  display: "block",
                  mb: 1.5,
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#ddd",
                  width: "fit-content",
                  position: "relative",
                  transition: "0.3s",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: -4,
                    width: "0%",
                    height: "2px",
                    backgroundColor: "#b42576",
                    transition: "0.3s",
                  },
                  "&:hover": {
                    color: "#fff",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                }}
              >
                {link.name}
              </Typography>
            ))}
          </Grid>

          {/* CONTACT INFO */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle1"
              sx={{
                mb: 3,
                letterSpacing: "2px",
                fontWeight: 600,
                color: "#f1c6e7",
              }}
            >
              CONTACT US
            </Typography>

            <Typography sx={{ color: "#ddd", mb: 1.5 }}>
              🎗 Pakistan
            </Typography>
            <Typography sx={{ color: "#ddd", mb: 1.5 }}>
              📞 +92 0000 0000
            </Typography>
            <Typography sx={{ color: "#ddd" }}>
              🧧 info@planoraevents.com
            </Typography>
          </Grid>
        </Grid>

        {/* DIVIDER */}
        <Box
          sx={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, #b42576, transparent)",
            my: 4,
          }}
        />

        {/* BOTTOM BAR */}
        <Typography
          align="center"
          sx={{
            color: "#ccc",
            fontSize: "0.85rem",
            letterSpacing: "1px",
          }}
        >
          © 2026 Planora Events. Crafted with elegance & passion.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
