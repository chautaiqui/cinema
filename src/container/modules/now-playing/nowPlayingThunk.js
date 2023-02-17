import { createAsyncThunk } from "@reduxjs/toolkit";
import MoviesApi from "@/api/movies";

const getMovieNowPlaying = createAsyncThunk(
  'now-playing/getMovieNowPlaying',
  async (param) => {
    const movieApi = new MoviesApi();
    const newParam = {}
    const { endpoint } = param;
    for (const [key, value] of Object.entries(param)) {
      if (key !== 'endpoint') newParam[key] = value
    }
    const req = await movieApi.getNowPlaying(endpoint, newParam);
    return { ...req, endpoint };
  }
)
export { getMovieNowPlaying };