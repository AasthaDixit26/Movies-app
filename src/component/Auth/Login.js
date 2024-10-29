import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from '../../store/AuthSlice';
import { Box, Button, TextField, Typography } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email) {
      dispatch(login({ email }));
      alert("Logged in Successfully");
      navigate('/main');
    }
  };

  return (
    <Box 
      sx={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh" 
      }}
    >
      <Box 
        sx={{ 
          width: "300px", 
          padding: "20px", 
          border: "1px solid #FF5257", 
          borderRadius: "8px", 
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)" 
        }}
      >
        <form onSubmit={handleLogin}>
          <Typography 
            variant="h5" 
            gutterBottom 
            sx={{ color: "#FF5257", textAlign: "center" }}
          >
            LOGIN
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={handleEmail}
            sx={{ marginBottom: "16px" }}
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{ backgroundColor: "#FF5257" }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
