import { configureStore } from "@reduxjs/toolkit";
import appReducer from "@/container/app/appSlice";

const store = configureStore({
    reducer: {
        appReducer
    },
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;