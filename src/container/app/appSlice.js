import { createSlice } from "@reduxjs/toolkit";
import { getConfig, getMovieNowPlaying } from "./appThunk";

const initAppState = {
  config: {},
  movies: []
};

const appSlice = createSlice({
    name: "app",
    initialState: initAppState,
    reducers: {
      updateConfig: (state, action) => {
        console.log(state, action)
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(getConfig.pending, (state, action) => {
          console.log('pending', state, action);
        })
        .addCase(getConfig.fulfilled, (state, action) => {
          const { payload } = action;
          state.config = payload
          console.log(state, payload)
        })
        .addCase(getConfig.rejected, (state, action) => {
          console.log('rejected', state, action);
        })
        // getMovieNowPlaying
        .addCase(getMovieNowPlaying.pending, (state, action) => {
          console.log('pending', state, action);
        })
        .addCase(getMovieNowPlaying.fulfilled, (state, action) => {
          const { payload } = action;
          state.movies = payload
          console.log(state, payload)
        })
        .addCase(getMovieNowPlaying.rejected, (state, action) => {
          console.log('rejected', state, action);
        })
    }
})

export const { updateConfig } = appSlice.actions;
export default appSlice.reducer;