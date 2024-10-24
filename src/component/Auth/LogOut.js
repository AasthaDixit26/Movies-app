import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Login from "./Login";

const LogOut=()=>{
    const user=useSelector((state)=>state.auth.user);
        return(
        <>
        <Box sx={{textAlign: 'center',paddingTop: '10px'}}>
        {user?(
            <>
            <Typography variant='h5' gutterBottom>
                Welcome {user}
            </Typography>
            </>
        ):(
            <Login/>
        )}
</Box>
        </>
    )
}
export default LogOut;