import { createSlice } from "@reduxjs/toolkit";
import { getMovieNowPlaying } from "./nowPlayingThunk";

const initMoviesState = {
  movies: [],
  query: {
    endpoint: 'movie/now_playing'
  },
  loading: true,
  type: 'grid'
};

const nowplayingSlice = createSlice({
  name: "now-playing",
  initialState: initMoviesState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovieNowPlaying.fulfilled, (state, action) => {
        const { payload } = action
        const { dates, page, total_pages, total_results, results, endpoint } = payload
        state.movies = results
        state.loading = false
        state.query = {
          dates, page, total_pages, total_results, endpoint
        }
      })
  }
})

export const { setLoading, setType } = nowplayingSlice.actions;
export default nowplayingSlice.reducer;