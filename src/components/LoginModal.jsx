import React, { useState } from "react";
import {
  Box,
  Modal,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function LoginModal({ open, onClose }) {
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // VALIDATION
  const validate = () => {
    let temp = {};
    if (isSignup && !form.name.trim()) temp.name = "Name is required";
    if (!form.email) temp.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) temp.email = "Email is invalid";
    if (!form.password) temp.password = "Password is required";
    else if (form.password.length < 6) temp.password = "Minimum 6 characters";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    if (!validate()) return;

    console.log(isSignup ? "SIGN UP DATA" : "LOGIN DATA", form);
    setForm({ name: "", email: "", password: "" }); // reset form
    setErrors({});
    setShowPassword(false);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: 420 },
          p: 4,
          borderRadius: "22px",
          background: "rgba(27,16,43,0.95)",
          backdropFilter: "blur(14px)",
          border: "2px solid #b42576",
          color: "#fff",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          sx={{ color: "#b42576", mb: 3, fontWeight: 700 }}
        >
          {isSignup ? "Create Account" : "Welcome Back"}
        </Typography>

        {/* NAME (SIGNUP ONLY) */}
        {isSignup && (
          <TextField
            fullWidth
            name="name"
            label="Full Name"
            value={form.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            sx={inputStyle}
          />
        )}

        {/* EMAIL */}
        <TextField
          fullWidth
          name="email"
          label="Email"
          value={form.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          sx={inputStyle}
        />

        {/* PASSWORD */}
        <TextField
          fullWidth
          name="password"
          type={showPassword ? "text" : "password"}
          label="Password"
          value={form.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
          sx={inputStyle}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  sx={{ color: "#b42576" }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* BUTTON */}
        <Button
          type="submit"
          fullWidth
          sx={{
            mt: 3,
            py: 1.2,
            border: "2px solid #b42576",
            borderRadius: "30px",
            backgroundColor: "#b42576", 
            color: "#fff",
            fontWeight: 600,
            letterSpacing: "1px",
            transition: "0.3s",
            "&:hover": { 
              backgroundColor: "#1B102B", 
              color: "#b42576", 
            },
          }}
        >
          {isSignup ? "Sign Up" : "Login"}
        </Button>

        {/* TOGGLE */}
        <Typography
          align="center"
          sx={{
            mt: 3,
            fontSize: "14px",
            cursor: "pointer",
            color: "#FBCFE8",
            "& span": {
              color: "#b42576",
              fontWeight: 600,
              transition: "0.3s",
            },
            "& span:hover": {
              color: "#b42576", 
            },
          }}
          onClick={() => {
            setErrors({});
            setForm({ name: "", email: "", password: "" }); // clear fields when switching
            setIsSignup(!isSignup);
            setShowPassword(false);
          }}
        >
          {isSignup ? (
            <>
              Already have an account? <span>Login</span>
            </>
          ) : (
            <>
              Don’t have an account? <span>Sign Up</span>
            </>
          )}
        </Typography>
      </Box>
    </Modal>
  );
}

const inputStyle = {
  mt: 2,
  "& label": { color: "#ccc" },
  "& input": { color: "#fff" },
  "& label.Mui-focused": { color: "#b42576" },
  "& .MuiOutlinedInput-root": {
    borderRadius: "30px",
    "& fieldset": { borderColor: "#b42576" },
    "&:hover fieldset": { borderColor: "#FBCFE8" },
  },
};
