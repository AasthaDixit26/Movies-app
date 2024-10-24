import React from 'react';
import image from "../../assests/WatchList.png";
import { Box } from '@mui/material';

const SideBar=()=>{
    return(
        <>
            <div className="sidebar">

                <img src={image} sx={{height: '10px', width: '10px'}} alt="Logo"/>
            <p>hiftygh</p>
            <Box
            component="img"
            sx={{
            height: 64,
            }}
            alt="Your logo."
            src={image}
        />
            </div>
        </>
    )

 };
 export default SideBar;