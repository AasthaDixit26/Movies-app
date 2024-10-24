import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { login } from "../../store/AuthSlice";
import {login} from '../../store/AuthSlice';
import { Box, Button, TextField, Typography } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleEmail=(e)=>{
    setEmail(e.target.value);
  }
  const handleLogin = (e) => {
    e.preventDefault();
    if (email) {
      dispatch(login(email));
      console.log(email,"hhhhh");
      alert("Logged in Successfully");
    }
  };
  return (
    <>
      <Box sx={{ width: "300px", margin: "auto", padding: "5px" }}>
        <form onSubmit={handleLogin}>
          <Typography variant="h5" gutterBottom>
            LOGIN
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={handleEmail}
            sx={{ marginBottom: "5px" }}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ marginBottom: "5px" }}
          >
            Login
          </Button>
        </form>
      </Box>
    </>
  );
};
export default Login;
