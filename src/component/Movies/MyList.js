import React, { useState } from "react";
import { useSelector } from "react-redux";
import {Box,TextField,Typography} from '@mui/material';
import MovieCard from "./MovieCard";

const MyList=()=>{
  const myList = useSelector((state) => state.watchList.movies);
  const [searchMovies,setSearchMovies]=useState('')

  const filteredList =myList.filter((movie) =>
    movie.Title.toLowerCase().includes(searchMovies.toLowerCase())
  );

  return(<>
    <Typography><h3>MyList Is :</h3></Typography>
    <TextField 
        label="Search Movies in My List" 
        variant="outlined" 
        fullWidth 
        value={searchMovies}
        onChange={(e) => setSearchMovies(e.target.value)} 
        sx={{ mb: 4 }}
      />
    <Box className="container" sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, marginLeft: '1px' }}> 
        {filteredList.length > 0 ? (
          filteredList.map((movie) => (
            <MovieCard 
              key={movie.imdbID} 
              title={movie.Title} 
              released={movie.Year}  
              poster={movie.Poster} 
            />
          ))
      ) : (
        <p>No movie in MyList data.....</p>
      )}
    </Box>
    </>);
}
export default MyList;