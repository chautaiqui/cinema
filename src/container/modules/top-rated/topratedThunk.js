import { createAsyncThunk } from "@reduxjs/toolkit";
import MoviesApi from "@/api/movies";

const getTopRatedMovie = createAsyncThunk(
  'toprated/getMovie',
  async (param) => {
    const movieApi = new MoviesApi();
    const req = await movieApi.getNowPlaying('movie/top_rated', param);
    return req;
  }
)
export { getTopRatedMovie };