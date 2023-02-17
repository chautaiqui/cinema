import { createSlice } from "@reduxjs/toolkit";
import { getConfig, getMovieNowPlaying } from "./appThunk";

const initAppState = {
  config: {},
  movies: [],
  loading: true,
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
          state.loading = false
        })
        .addCase(getConfig.rejected, (state, action) => {
          console.log('rejected', state, action);
        })
    }
})

export const { updateConfig } = appSlice.actions;
export default appSlice.reducer;