import { configureStore } from "@reduxjs/toolkit";
import authSlicereducer from './AuthSlice';
import watchListSlicereducer from './WatchListSlice';

const Store=configureStore({
    reducer:{
        auth:authSlicereducer,
        wacthList:watchListSlicereducer,
    }
});

export default Store;