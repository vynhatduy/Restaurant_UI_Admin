// Login.js
import React, { useState } from "react";
import { TextField, Button, Box, Typography, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Importing AuthContext

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // To show error messages
  const navigate = useNavigate();
  const { login } = useAuth(); // Get login function from AuthContext

  const handleLogin = () => {
    // Clear previous error messages
    setErrorMessage("");

    // Perform form validation
    if (!username || !password) {
      setErrorMessage("Both fields are required!");
      return;
    }

    // Mock login check (this can be replaced by an actual API call)
    if (username === "admin" && password === "admin123") {
      login(); // Call login function from AuthContext
      navigate("/"); // Redirect to dashboard on successful login
    } else {
      setErrorMessage("Invalid credentials!"); // Display error message for invalid credentials
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{ padding: 2 }}
    >
      <Typography variant="h4" gutterBottom>
        Admin Login
      </Typography>

      {errorMessage && (
        <Alert severity="error" sx={{ width: "100%", marginBottom: 2 }}>
          {errorMessage}
        </Alert>
      )}

      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogin}
        fullWidth
        sx={{ marginTop: 2 }}
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
