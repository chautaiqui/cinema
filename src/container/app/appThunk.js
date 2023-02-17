import { createAsyncThunk } from "@reduxjs/toolkit";
import ConfigAPI from "@/api/config";
import MoviesApi from "@/api/movies";

const getConfig = createAsyncThunk(
  'app/config',
  async (param) => {
    const configApi = new ConfigAPI();
    const configData = await configApi.getConfig('configuration', param || {});
    return configData;
  }
)

const getMovieNowPlaying = createAsyncThunk(
  'app/movienowplaying',
  async (param) => {
    const movieApi = new MoviesApi();
    const req = await movieApi.getNowPlaying('movie/now_playing', param);
    return req;
  }
)
export { getConfig, getMovieNowPlaying };