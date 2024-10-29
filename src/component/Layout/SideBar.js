import React from "react";
import image from "../../assests/WatchList.png";
import { Box, CardHeader, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Col } from "react-bootstrap";
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { useSelector } from "react-redux";

const SideBar = () => {
  const user=useSelector((state)=>state.auth.user);
  const userEmail = user?.email || 'Guest'; 
  const avatarAlphabet=userEmail.charAt(0).toUpperCase();

  return (
    <Col 
      className="sidebar" 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '20px', 
        height: '100vh'  
      }} 
    > 
      <Box
        component="img"
        sx={{
          height: 200,
          marginTop: "-60px", 
          marginLeft: "25px",
        }}
        alt="WatchListLogo"
        src={image}
      />
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{ paddingX: '20px', marginTop: "-80px", marginLeft: "30px", width: '100%', marginRight: '20px' }} 
      />   

      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '10px', 
          marginTop: '20px', 
          width: '100%', 
          padding: '12px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#FFEEE9',
            border: '1px solid #FF5257',
            borderRadius: '5px',
            padding: '8px 10px',
            marginBottom: '10px',
            marginLeft: '35px',
          }}
        >
          <HomeIcon sx={{ color: "#FF5257", marginX: 'px' }} />
          <Link to="/" style={{ textDecoration: "none", color: "#FF5257", marginLeft: '55px' }}>Home</Link>
        </Box>

        <Box
          sx={{
            backgroundColor: '#FFEEE9',
            border: '1px solid #FF5257',
            borderRadius: '5px',
            padding: '8px 12px',
            marginLeft: '35px',
          }}
        >
          <Link to='/MyList' style={{ textDecoration: "none", color: "#FF5257" }}>My List</Link>
        </Box>
      </Box>

      <Box sx={{ marginTop: '220px', width: '100%' }}> 
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#ff5257" }} aria-label="recipe">
              {avatarAlphabet}
            </Avatar>
          }
        
          title={userEmail}
          subheader="User"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        />
      </Box>
    </Col>
  );
};

export default SideBar;
