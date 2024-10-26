import { configureStore } from "@reduxjs/toolkit";
import authSlicereducer from './AuthSlice';
import watchListSlicereducer from './WatchListSlice';

const Store=configureStore({
    reducer:{
        auth:authSlicereducer,
        watchList:watchListSlicereducer,
    }
});

export default Store;