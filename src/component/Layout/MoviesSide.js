import React, { useEffect, useState } from "react";
import { Box, TextField, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToWatchList } from '../../store/WatchListSlice';
import image from '../../assests/WatchList.png'

const MoviesSide = () => {
  const [movies, setMovies] = useState([]); 
  const dispatch = useDispatch();

  const handleAddMovie = (movie) => {
    dispatch(addToWatchList(movie));
  };

  const [searchMovies, setSearchMovies] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("https://www.omdbapi.com/?s=Guardians&apikey=26f59a9");
        const data = await response.json();
        if (data.Search) {
          setMovies(data.Search); 
        } else {
          console.error("No movies found");
        }
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };
    fetchMovies();
  }, []);

  const filteredList = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(searchMovies.toLowerCase())
  );

  return (
    <>
      <Box sx={{border:'1px solid red', p:4, textAlign: 'center', borderRadius: 2 ,m:4}}>
      <Typography variant="h4" component="h1" color="primary" sx={{ marginTop:'-60px',marginBottom:'-60px',fontWeight: 'bold' }}>
        Welcome to{' '}
        <img
          src={image}
          alt="Watchlist Logo"
          style={{ height: '6.5em', verticalAlign: 'middle' }}
        />
      </Typography>

        <Typography variant="body1" sx={{  color: '#555' }}>
          Browse movies, add them to watchlists, and share them with friends.
          <br />
          Just click the <strong>+</strong> to add a movie, the poster to see more details, or <strong>✓</strong> to mark the movie as watched.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <TextField 
          label="Search Movies" 
          variant="outlined" 
          value={searchMovies}
          onChange={(e) => setSearchMovies(e.target.value)} 
          sx={{ width: '50%' }}
        />
        <Button variant="contained" sx={{background:'#FF4F54', ml: 1, height: '56px' }}>
          Search
        </Button>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}> 
        {filteredList.length > 0 ? (
          filteredList.map((movie) => (
            <Card key={movie.imdbID} sx={{ width: 200, boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="300"
                image={movie.Poster}
                alt={movie.Title}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" component="p" sx={{ fontWeight: 'bold', fontSize: '16px' }}>
                  {movie.Title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {movie.Year}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => handleAddMovie(movie)}
                  sx={{ mt: 2 }}
                >
                  + Add to Watchlist
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography variant="body1">Loading movie data.....</Typography>
        )}
      </Box>
    </>
  );
};

export default MoviesSide;
