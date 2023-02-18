import { createSlice } from "@reduxjs/toolkit"
import { getTopRatedMovie } from "./topratedThunk"

const initMovieState = {
  movies: [],
  loading: false,
  query: {
    page: 1,
  },
  type: 'grid'
};

const topratedMovieSlice = createSlice({
  name: "movie",
  initialState: initMovieState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTopRatedMovie.fulfilled, (state, action) => {
        const { payload } = action
        const { page, total_pages, total_results, results } = payload
        state.movies = results
        state.query = {
          page, total_pages, total_results
        }
        state.loading = false;
      })
  }
})

export const { setLoading, setType, setQuery } = topratedMovieSlice.actions;
export default topratedMovieSlice.reducer;