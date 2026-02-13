import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

function About() {
  return (
    <Box sx={{ backgroundColor: "#1B102B", color: "#fff", overflow: "hidden" }}>

      {/* HERO SECTION */}
      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage: "url(/images/gallery-2.jpg)",
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
            background: "rgba(27,16,43,0.82)",
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
              fontWeight: 900,
              color: "#b42576",
              mb: 4,
              letterSpacing: "2px",
            }}
          >
            About Planora Events
          </Typography>

          <Typography
            sx={{
              maxWidth: 900,
              mx: "auto",
              fontSize: "19px",
              lineHeight: 2.3,
              color: "#f1f1f1",
            }}
          >
            Planora Events is a luxury event management brand dedicated to
            creating extraordinary experiences.  
            We transform ideas into unforgettable celebrations by blending
            creativity, elegance, and flawless execution.
          </Typography>
        </Container>
      </Box>

      {/* CENTER DESCRIPTION SECTION */}
      <Box sx={{ py: 16 }}>
        <Container
          sx={{
            textAlign: "center",
            animation: "fadeUp 1.6s ease forwards",
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "#b42576", fontWeight: 700, mb: 4 }}
          >
            Our Vision & Passion
          </Typography>

          <Typography
            sx={{
              maxWidth: 900,
              mx: "auto",
              lineHeight: 2.3,
              color: "#ddd",
              fontSize: "17px",
              mb: 3,
            }}
          >
            At Planora Events, we believe every event carries emotion and meaning.
            Our vision is to design celebrations that reflect your personality,
            your story, and your dreams curated with precision and heart.
          </Typography>

          <Typography
            sx={{
              maxWidth: 900,
              mx: "auto",
              lineHeight: 2.3,
              color: "#ddd",
              fontSize: "17px",
            }}
          >
            From elegant weddings to high-end corporate gatherings,
            our team focuses on detail, creativity, and seamless planning
            to deliver experiences that remain unforgettable long after
            the event ends.
          </Typography>
        </Container>
      </Box>

      {/* IMAGE SECTION */}
      <Box sx={{ pb: 18 }}>
        <Container>
          <Box
            sx={{
              height: 500,
              borderRadius: "26px",
              backgroundImage: "url(/images/gallery-8.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 35px 70px rgba(0,0,0,0.65)",
              animation: "zoomIn 1.6s ease forwards",
              transition: "0.8s",
              "&:hover": {
                transform: "scale(1.06)",
              },
            }}
          />
        </Container>
      </Box>

      {/* PARALLAX CENTER TEXT */}
      <Box
        sx={{
          py: 18,
          backgroundImage: "url(/images/gallery-19.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
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
            animation: "fadeUp 1.6s ease forwards",
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "#b42576", fontWeight: 700, mb: 4 }}
          >
            Why Choose Planora?
          </Typography>

          <Typography
            sx={{
              maxWidth: 900,
              mx: "auto",
              lineHeight: 2.4,
              color: "#eee",
              fontSize: "17px",
            }}
          >
            We don’t just plan events, we curate emotions.
            With a passion for elegance, a commitment to perfection,
            and a deep understanding of our clients’ vision,
            Planora Events ensures every celebration feels magical,
            meaningful, and beautifully executed.
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

          @keyframes zoomIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
        `}
      </style>

    </Box>
  );
}

export default About;
