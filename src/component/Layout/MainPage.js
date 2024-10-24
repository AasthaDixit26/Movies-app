import React from "react";
import SideBar from "./SideBar";
import MoviesSide from "./MoviesSide";
import {  Grid2 } from "@mui/material";

const MainPage=()=>{

    return(
        <>
        <Grid2>
            <Grid2 sx={3} container>
              <SideBar/>
            </Grid2>
            <Grid2 sx={9} container>
<MoviesSide/>
            </Grid2>
        </Grid2>

        </>
    )

}
export default MainPage;
