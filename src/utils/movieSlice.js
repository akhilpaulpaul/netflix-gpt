import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlaying: null,
        trailer: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlaying = action.payload;
        },
        addTrailerDetails: (state, action) => {
            state.trailer = action.payload;
        }
    }
});

export const { addNowPlayingMovies, addTrailerDetails } = movieSlice.actions;
export default movieSlice.reducer;