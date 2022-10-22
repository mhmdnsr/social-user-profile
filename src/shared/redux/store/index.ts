import {configureStore} from "@reduxjs/toolkit";
import {likesSlice} from "../slices/likes.slice";

const store = configureStore({
    reducer: {
        [likesSlice.name]: likesSlice.reducer,
    },
    devTools: true,
});


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;
