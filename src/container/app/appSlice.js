import { createSlice } from "@reduxjs/toolkit";
import { getConfig } from "./appThunk";

const initAppState = {
  config: {},
  movies: [],
  loading: true,
};

const appSlice = createSlice({
    name: "app",
    initialState: initAppState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getConfig.fulfilled, (state, action) => {
          const { payload } = action;
          state.config = payload
          state.loading = false
        })
    }
})

// export const { updateConfig } = appSlice.actions;
export default appSlice.reducer;