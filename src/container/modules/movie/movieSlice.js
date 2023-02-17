import { createSlice } from "@reduxjs/toolkit"
import { getMovieDetail } from "./movieThunk"

const initMovieState = {
  detail: {},
  loading: true
};

const movieSlice = createSlice({
  name: "movie",
  initialState: initMovieState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovieDetail.pending, (state, action) => {
        // console.log('pending', state, action);
      })
      .addCase(getMovieDetail.fulfilled, (state, action) => {
        const { payload } = action
        console.log('fulfilled', state, payload)
      })
      .addCase(getMovieDetail.rejected, (state, action) => {
        // console.log('rejected', state, action);
      })
  }
})

export const { setLoading } = movieSlice.actions;
export default movieSlice.reducer;