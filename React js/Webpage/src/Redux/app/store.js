import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../feature/search"
import cartReducer from "../feature/cartSlice";
export const store = configureStore({
    reducer: {
        searchReducer: searchReducer,
        cartReducer: cartReducer
    }
})