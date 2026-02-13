import React, { useState } from "react";
import { TextField, Button, Box, Typography, MenuItem } from "@mui/material";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email is invalid";
    if (!form.phone) newErrors.phone = "Phone number is required";
    if (!form.eventType) newErrors.eventType = "Please select an event type";
    if (!form.eventDate) newErrors.eventDate = "Event date is required";
    if (!form.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      setForm({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        message: "",
      });
    }
  };

  const eventOptions = [
    "Wedding",
    "Corporate Event",
    "Birthday Party",
    "Private Celebration",
    "Party",
    "Other",
  ];

  return (
    
    <Box sx={{ border: "2px solid #b42576", borderRadius: 2 ,maxWidth: 700, mx: "auto", mt: 2, px: 2 }}>
      <Typography color="#b42576" variant="h4" mt={1} gutterBottom>
        Plan Your Event
      </Typography>
      {/* <Typography sx={{ mb: 3, color: "#bebebe" }}>
        Fill out the form below and our team will get back to you to make your event unforgettable!
      </Typography> */}

      <form onSubmit={handleSubmit} noValidate>
        <TextField
          fullWidth
          label="Name"
          margin="normal"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          fullWidth
          label="Phone Number"
          margin="normal"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          error={!!errors.phone}
          helperText={errors.phone}
        />
        <TextField
          select
          fullWidth
          label="Event Type"
          margin="normal"
          value={form.eventType}
          onChange={(e) => setForm({ ...form, eventType: e.target.value })}
          error={!!errors.eventType}
          helperText={errors.eventType}
        >
          {eventOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          label="Event Date"
          type="date"
          margin="normal"
          InputLabelProps={{ shrink: true }}
          value={form.eventDate}
          onChange={(e) => setForm({ ...form, eventDate: e.target.value })}
          error={!!errors.eventDate}
          helperText={errors.eventDate}
        />
        <TextField
          fullWidth
          label="Additional Details / Message"
          margin="normal"
          multiline
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          error={!!errors.message}
          helperText={errors.message}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 2,
            mb: 2,
            backgroundColor: "#1B102B",
            color: "#fff",
            border: "3px solid #b42576",
            borderRadius: 4,            
            px: 5,
            py: 1.5,
            fontWeight: 600,
            letterSpacing: "1px",
            transition: "0.3s",
            boxSizing: "border-box",

            "&:hover": {
              backgroundColor: "#b42576",
              color: "#240046",
            },
          }}
        >
          Submit
        </Button>


      </form>
    </Box>
  );
}

export default Contact;
