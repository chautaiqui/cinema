import { createAsyncThunk } from "@reduxjs/toolkit";
import MoviesApi from "@/api/movies";

const getMovieDetail = createAsyncThunk(
  'movie/getMovieDetail',
  async (param) => {
    const movieApi = new MoviesApi();
    const newParam = {}
    const { id } = param
    for (const [key, value] of Object.entries(param)) {
      if (key !== 'id') newParam[key] = value
    }
    const req = await movieApi.getNowPlaying(`movie/${id}`, newParam);
    return req;
  }
)
export { getMovieDetail };