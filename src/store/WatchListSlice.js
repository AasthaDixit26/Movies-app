import { createSlice } from "@reduxjs/toolkit";
const watchListSlice=createSlice({
    name:'watchList',
    initialState:{movies:[]},
    reducers:{
        addToWatchList:(state,action)=>{
            state.movies.push(action.payload);
        },
        removeFromWatchList:(state,action)=>{
            state.movies=state.movies.filter(movie=>state.movie.imdbID!==action.payload.imdbID);
        }

    }
});
export const {addToWatchList,removeFromWatchList}=watchListSlice.actions;
export default watchListSlice.reducer;
