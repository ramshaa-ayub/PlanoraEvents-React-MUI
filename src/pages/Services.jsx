import React from "react";
import { Box, Typography, Container, Grid, Card } from "@mui/material";

// ======== GALLERY IMAGES ========
const galleryImages = [
  "/images/gallery-2.jpg",
  "/images/service-3.jpg",
  "/images/gallery-22.jpg",
  "/images/gallery-23.jpg",
  "/images/gallery-19.jpg", 
  "/images/gallery-25.jpg",
  "/images/gallery-24.jpg",
  "/images/gallery-15.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
  "/images/gallery-7.jpg",
];

const services = [
  {
    title: "Luxury Weddings",
    desc: "Bespoke wedding experiences designed with elegance, emotion, and flawless execution.",
  },
  {
    title: "Corporate Events",
    desc: "High-end corporate gatherings crafted to impress, inspire, and deliver impact.",
  },
  {
    title: "Private Celebrations",
    desc: "Intimate birthdays, anniversaries, and celebrations personalized to perfection.",
  },
  {
    title: "Event Styling & Decor",
    desc: "Luxury themes, floral artistry, and aesthetic designs that elevate every space.",
  },
  {
    title: "Venue Management",
    desc: "Complete venue coordination ensuring seamless guest flow and experience.",
  },
  {
    title: "End-to-End Planning",
    desc: "From concept to execution we manage every detail so you don’t have to.",
  },
];

function Services() {
  return (
    <Box sx={{ backgroundColor: "#1B102B", color: "#fff", overflow: "hidden" }}>

      {/* HERO SECTION */}
      <Box
        sx={{
          minHeight: "70vh",
          backgroundImage: "url(/images/gallery-19.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(27,16,43,0.85)",
          }}
        />

        <Container
          sx={{
            position: "relative",
            zIndex: 2,
            animation: "fadeSlide 1.6s ease forwards",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#b42576",
              fontWeight: 900,
              letterSpacing: "2px",
              mb: 3,
            }}
          >
            Our Services
          </Typography>

          <Typography
            sx={{
              maxWidth: 800,
              mx: "auto",
              lineHeight: 2.2,
              fontSize: "18px",
              color: "#eee",
            }}
          >
            A complete range of luxury event management services designed
            to transform your vision into an unforgettable experience.
          </Typography>
        </Container>
      </Box>

      {/* SERVICES GRID */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} justifyContent="center">
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    height: "100%",
                    p: 5,
                    borderRadius: "22px",
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(10px)",
                    border: "4px solid #b42576", 
                    textAlign: "center",
                    animation: "fadeUp 1.4s ease forwards",
                    transition: "0.6s",
                    "&:hover": {
                      transform: "translateY(-14px)",
                      boxShadow: "0 35px 70px rgba(0,0,0,0.6)",
                      background: "rgba(180,37,118,0.12)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#b42576",
                      fontWeight: 700,
                      fontSize: "18px",
                      letterSpacing: "1px",
                      mb: 2,
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#ddd",
                      lineHeight: 2,
                      fontSize: "15.5px",
                    }}
                  >
                    {service.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* GALLERY SECTION */}
      <Box sx={{ py: 6 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            sx={{
              color: "#b42576",
              fontWeight: 700,
              mb: 3,
              letterSpacing: "1px",
            }}
          >
            Event Gallery
          </Typography>

          <Typography
            align="center"
            sx={{
              color: "#ddd",
              maxWidth: 700,
              mx: "auto",
              mb: 8,
              lineHeight: 2,
            }}
          >
            A glimpse into the elegance, creativity, and unforgettable moments
            we craft for every celebration.
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {galleryImages.map((img, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Card
                  sx={{
                    overflow: "hidden",
                    cursor: "pointer",
                    "&:hover img": {
                      transform: "scale(1.15)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={img}
                    sx={{
                      width: "100%",
                      height: 260,
                      objectFit: "cover",
                      transition: "0.6s ease",
                    }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* BOTTOM STATEMENT */}
      <Box
        sx={{
          py: 14,
          textAlign: "center",
          background: "linear-gradient(180deg, #1B102B, #240046)",
        }}
      >
        <Container sx={{ animation: "fadeUp 1.5s ease forwards" }}>
          <Typography
            variant="h4"
            sx={{ color: "#b42576", fontWeight: 700, mb: 3 }}
          >
            Designed With Passion. Delivered With Perfection.
          </Typography>

          <Typography
            sx={{
              maxWidth: 850,
              mx: "auto",
              lineHeight: 2.3,
              color: "#eee",
              fontSize: "17px",
            }}
          >
            At Planora Events, every service is thoughtfully crafted to deliver
            elegance, emotion, and excellence — ensuring your event is nothing
            short of extraordinary.
          </Typography>
        </Container>
      </Box>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes fadeSlide {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(60px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </Box>
  );
}

export default Services;
