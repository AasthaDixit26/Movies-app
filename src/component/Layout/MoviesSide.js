import React, { useEffect, useState } from "react";
import MovieCard from "../Movies/MovieCard"; 
import { Box, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import {addToWatchList} from '../../store/WatchListSlice';

const MoviesSide = () => {
  const [movies, setMovies] = useState([]); 
  const dispatch=useDispatch();

  const handleAddMovie=(movie)=>{
    dispatch(addToWatchList(movie));
  }

  const [searchMovies,setSearchMovies]=useState('')

  

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

  const filteredList = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(searchMovies.toLowerCase())
  );


  return (<>
   <TextField 
        label="Search Movies in My List" 
        variant="outlined" 
        fullWidth 
        value={searchMovies}
        onChange={(e) => setSearchMovies(e.target.value)} 
        sx={{ mb: 4 }}
      />

       <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}> 
      {filteredList.length > 0 ? (
        filteredList.map((movie) => (
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
  </>
 
  );
};

export default MoviesSide;
