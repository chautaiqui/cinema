import { configureStore } from "@reduxjs/toolkit"
import appReducer from "@/container/app/appSlice"
import nowplayingReducer from "@/container/modules/now-playing/nowplayingSlice"
import movieReducer from "@/container/modules/movie/movieSlice"
import topratedReducer from "@/container/modules/top-rated/topratedSlice"

const store = configureStore({
    reducer: {
        appReducer, nowplayingReducer, movieReducer, topratedReducer
    },
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;