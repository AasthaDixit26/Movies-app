import React from "react";
import { useSelector } from "react-redux";
import {Box,Typography} from '@mui/material';
import MovieCard from "./MovieCard";

const MyList=()=>{
  const myList = useSelector((state) => state.watchList.movies);
  // const [searchTerm,setSearchTerm]=useState([]);

  return(<>
    <Typography><h3>MyList Is :</h3></Typography>
         <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}> 
      {myList.length > 0 ? (
        myList.map((movie) => (
          <MovieCard 
            key={movie.imdbID} 
            title={movie.Title} 
            released={movie.Year}  
            poster={movie.Poster} 
            // onAddToMyList={()=>handleAddMovie(list)}
          />
        ))
      ) : (
        <p>No movie in MyList data.....</p>
      )}
    </Box>
    </>);
}
export default MyList;