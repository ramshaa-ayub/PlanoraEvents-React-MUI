import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  Grow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// ======== GALLERY IMAGES  ========
const galleryImages = [
  "/images/gallery-1.jpg",
  "/images/gallery-8.jpg",
  "/images/service-1.jpg",
  "/images/gallery-25.jpg",
  "/images/gallery-24.jpg",
  "/images/gallery-22.jpg",
  // "/images/gallery-15.jpg",
  "/images/service-2.jpg",
  // "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
 
  "/images/gallery-7.jpg",
];

function Home() {
  const navigate = useNavigate(); // for redirect buttons

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-out-cubic", once: true });
  }, []);

  // ================= COUNTERS =================
  const counters = [
    { label: "Events Completed", value: 250 },
    { label: "Years Experience", value: 12 },
    { label: "Happy Clients", value: 100 },
  ];

  const [countValues, setCountValues] = useState(counters.map(() => 0));
  const counterRef = useRef(null);
  const [counterStarted, setCounterStarted] = useState(false);

  // ================= ABOUT SCROLL =================
  const aboutRef = useRef(null);
  const [aboutVisible, setAboutVisible] = useState(false);

  // Scroll-trigger for about & counters
  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const top = aboutRef.current.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) setAboutVisible(true);
      }

      if (counterRef.current) {
        const top = counterRef.current.getBoundingClientRect().top;
        if (top < window.innerHeight && !counterStarted) setCounterStarted(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [counterStarted]);

  // Counter increment effect
  useEffect(() => {
    if (!counterStarted) return;

    const intervals = counters.map((c, i) =>
      setInterval(() => {
        setCountValues((prev) => {
          const next = [...prev];
          if (next[i] < c.value) next[i] += 1;
          return next;
        });
      }, 20)
    );

    return () => intervals.forEach(clearInterval);
  }, [counterStarted]);

  return (
    <>
      {/* ================= HERO ================= */}
      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage: "url(/images/hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(36,0,70,0.75)",
          }}
        />
        <Container sx={{ position: "relative", zIndex: 1 }}>
          {[0, 1, 2].map((i) => (
            <Grow in key={i} timeout={1000 + i * 700}>
              <Box sx={{ mb: i === 2 ? 0 : 3 }}>
                {i === 0 && (
                  <Typography
                    variant="h2"
                    sx={{
                      color: "#fff",
                      fontFamily: "Playfair Display, serif",
                      fontWeight: 700,
                      fontSize: { xs: "2rem", md: "3.5rem" }, // responsive
                      lineHeight: { xs: 1.2, md: 1.3 },
                    }}
                  >
                    Turning Moments Into <br /> Unforgettable Events
                  </Typography>
                )}
                {i === 1 && (
                  <Typography
                    sx={{
                      color: "#ddd",
                      maxWidth: 600,
                      fontSize: { xs: "1rem", md: "1.25rem" }, // responsive
                    }}
                  >
                    Elegant weddings, luxury events & corporate experiences crafted
                    to perfection.
                  </Typography>
                )}
                {i === 2 && (
                  <Button
                    onClick={() => navigate("/services")} // redirect
                    sx={{
                      backgroundColor: "#b42576",
                      color: "#fff",
                      px: { xs: 3, md: 5 },
                      py: { xs: 1.2, md: 1.8 },
                      fontSize: { xs: "0.9rem", md: "1.1rem" },
                      "&:hover": { backgroundColor: "#FBCFE8", color: "#240046" },
                    }}
                  >
                    Explore Services
                  </Button>
                )}
              </Box>
            </Grow>
          ))}
        </Container>
      </Box>

      {/* ================= ABOUT ================= */}
      <Grow in={aboutVisible} timeout={1000}>
        <Container ref={aboutRef} sx={{ py: 10 }}>
          <Box sx={{ maxWidth: 900, mx: "auto", textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 700,
                mb: 3,
                color: "#b42576",
              }}
            >
              About Planora Events
            </Typography>
            <Typography
              sx={{
                lineHeight: 1.9,
                color: "#ffffff",
                fontSize: { xs: "1rem", md: "1.125rem" }, // responsive
              }}
            >
              Planora Events is a professional event management company known for
              designing and delivering exceptional experiences with elegance and
              precision. We specialize in weddings, corporate events, and private
              celebrations, carefully crafting each event to reflect our clients’
              unique vision and style.
              <br />
              <br />
              Our approach combines creativity, strategic planning, and flawless
              execution. From décor and ambiance to coordination and timing,
              every detail is managed with care. Whether it’s an intimate gathering
              or a grand celebration, Planora Events turns moments into
              unforgettable memories.
            </Typography>
          </Box>
        </Container>
      </Grow>

      {/* ================= PARALLAX IMAGE ================= */}
      <Box
        sx={{
          height: "60vh",
          backgroundImage: "url(/images/service-2.jpg)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* ================= COUNTERS ================= */}
      <Box ref={counterRef} sx={{ py: 10, background: "rgba(255,255,255,0.04)" }}>
        <Container>
          <Grid container spacing={4} justifyContent="center">
            {counters.map((c, i) => (
              <Grid item xs={12} md={3} key={i} data-aos="zoom-in">
                <Typography
                  variant="h3"
                  sx={{ color: "#b42576", fontWeight: 700 }}
                >
                  {countValues[i]}
                  {c.label === "Happy Clients" ? "%" : "+"}
                </Typography>
                <Typography sx={{ color: "#ccc" }}>{c.label}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ================= PARALLAX IMAGE ================= */}
      <Box
        sx={{
          height: "60vh",
          backgroundImage: "url(/images/service-3.jpg)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* ================= IMAGE GALLERY ================= */}
      <Box sx={{ py: 10 }}>
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontFamily: "Playfair Display, serif",
            mb: 6,
            color: "#b42576",
          }}
        >
          Our Event Gallery
        </Typography>

        <Grid
          container
          spacing={3}
          sx={{
            margin: 8,
          }}
        >
          {galleryImages.slice(0, 12).map((img, i) => (
            <Grid item xs={12} sm={4} md={4} lg={4} key={i} data-aos="zoom-in">
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

        <Box
          sx={{
            height: "60vh",
            backgroundImage: "url(/images/gallery-14.jpg)",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: "rgba(36,0,70,0.65)",
            }}
          />

          {/* Content */}
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              textAlign: "center",
              maxWidth: 700,
              px: 2,
            }}
            data-aos="fade-up"
          >
            <Typography sx={{ color: "#ddd", mb: 2 }}>
              Explore our beautifully curated events and discover how Planora Events
              transforms visions into unforgettable experiences.
            </Typography>

            <Button
              onClick={() => navigate("/about")} // redirect
              sx={{
                backgroundColor: "#b42576",
                color: "#fff",
                px: 4,
                py: 1.5,
                fontSize: { xs: "0.9rem", md: "1.1rem" }, // responsive
                "&:hover": {
                  backgroundColor: "#FBCFE8",
                  color: "#240046",
                },
              }}
            >
              See More About Us
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Home;
