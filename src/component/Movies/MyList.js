import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MovieCard from "./MovieCard";

const MyList = () => {
  const myList = useSelector((state) => state.watchList.movies);
  const [searchMovies, setSearchMovies] = useState('');
  const navigate = useNavigate();

  const filteredList = myList.filter((movie) =>
    movie.Title.toLowerCase().includes(searchMovies.toLowerCase())
  );

  return (
    <>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
        My <span style={{ color: 'red', fontFamily: 'Playfair Display, serif' }}>Watchlist</span>
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <TextField 
          label="Search Movies" 
          variant="outlined" 
          value={searchMovies}
          onChange={(e) => setSearchMovies(e.target.value)} 
          sx={{ width: '50%' }}
        />
        <Button 
          variant="contained" 
          sx={{ background: '#FF4F54', ml: 1, height: '56px' }}
        >
          Search
        </Button>
        <Button 
          variant="contained" 
          sx={{ background: '#FF4F54', ml: 1, height: '56px' }} 
          onClick={() => navigate('/')}
        >
          Home
        </Button>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3,
          justifyContent: 'center',
          alignItems: 'center',
          mt: 2,
          padding: 2,
          backgroundColor: '#f9f9f9',
          borderRadius: '8px'
        }}
      >
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
          <Typography variant="body1" color="textSecondary">
            No movies in My List.
          </Typography>
        )}
      </Box>
    </>
  );
}

export default MyList;
