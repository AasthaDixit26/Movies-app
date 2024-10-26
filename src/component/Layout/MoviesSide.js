import React, { useEffect, useState } from "react";
import MovieCard from "../Movies/MovieCard"; 
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import {addToWatchList} from '../../store/WatchListSlice';

const MoviesSide = () => {
  const [movies, setMovies] = useState([]); 
  const dispatch=useDispatch();

  const handleAddMovie=(movie)=>{
    dispatch(addToWatchList(movie));
  }
  

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
            onAddToMyList={()=>handleAddMovie(movie)}
          />
        ))
      ) : (
        <p>Loading movie data.....</p>
      )}
    </Box>
  );
};

export default MoviesSide;
