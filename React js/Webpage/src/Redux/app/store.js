import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../feature/search"
export const store = configureStore({
    reducer: {
        searchReducer: searchReducer
    }
})