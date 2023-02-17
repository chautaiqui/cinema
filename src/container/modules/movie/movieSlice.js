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
      .addCase(getMovieDetail.fulfilled, (state, action) => {
        const { payload } = action
        state.detail = payload
        state.loading = false;
      })
  }
})

export const { setLoading } = movieSlice.actions;
export default movieSlice.reducer;