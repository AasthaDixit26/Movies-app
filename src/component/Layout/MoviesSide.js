import React, { useEffect, useState } from "react";
import MovieCard from "../Movies/MovieCard"; 
import { Box } from "@mui/material";

const MoviesSide = () => {
  const [movies, setMovies] = useState([]); 

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
        console.log(data, "movies");
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}> 
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard 
            key={movie.imdbID} 
            title={movie.Title} 
         
            released={movie.Year}
            
            poster={movie.Poster} 
          />
        ))
      ) : (
        <p>Loading movie data.....</p>
      )}
    </Box>
  );
};

export default MoviesSide;
