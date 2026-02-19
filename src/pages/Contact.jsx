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
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required";
        else if (value.trim().length < 3)
          error = "Name must be at least 3 characters";
        break;

      case "email":
        if (!value) error = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Enter a valid email address";
        break;

      case "phone":
        if (!value) error = "Phone number is required";
        else if (!/^[0-9]{10,15}$/.test(value))
          error = "Enter valid phone number (10-15 digits)";
        break;

      case "eventType":
        if (!value) error = "Please select an event type";
        break;

      case "eventDate":
        if (!value) error = "Event date is required";
        else if (new Date(value) < new Date().setHours(0, 0, 0, 0))
          error = "Event date cannot be in the past";
        break;

      case "message":
        if (!value.trim()) error = "Message is required";
        else if (value.trim().length < 10)
          error = "Message must be at least 10 characters";
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    if (touched[name]) {
      setErrors({
        ...errors,
        [name]: validateField(name, value),
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    setTouched({ ...touched, [name]: true });

    setErrors({
      ...errors,
      [name]: validateField(name, value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    Object.keys(form).forEach((key) => {
      newErrors[key] = validateField(key, form[key]);
    });

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      eventType: true,
      eventDate: true,
      message: true,
    });

    const isValid = Object.values(newErrors).every((err) => err === "");

    if (isValid) {
      alert("Form submitted successfully!");
      setForm({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        message: "",
      });
      setTouched({});
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

      <form onSubmit={handleSubmit} noValidate>
        <TextField
          fullWidth
          name="name"
          label="Name"
          margin="normal"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={!!errors.name}
          helperText={errors.name}
        />

        <TextField
          fullWidth
          name="email"
          label="Email"
          margin="normal"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={!!errors.email}
          helperText={errors.email}
        />

        <TextField
          fullWidth
          name="phone"
          label="Phone Number"
          margin="normal"
          value={form.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          error={!!errors.phone}
          helperText={errors.phone}
        />

        <TextField
          select
          fullWidth
          name="eventType"
          label="Event Type"
          margin="normal"
          value={form.eventType}
          onChange={handleChange}
          onBlur={handleBlur}
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
          name="eventDate"
          label="Event Date"
          type="date"
          margin="normal"
          InputLabelProps={{ shrink: true }}
          value={form.eventDate}
          onChange={handleChange}
          onBlur={handleBlur}
          error={!!errors.eventDate}
          helperText={errors.eventDate}
        />

        <TextField
          fullWidth
          name="message"
          label="Additional Details / Message"
          margin="normal"
          multiline
          rows={5}
          value={form.message}
          onChange={handleChange}
          onBlur={handleBlur}
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
