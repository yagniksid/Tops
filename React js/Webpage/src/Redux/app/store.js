import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../feature/search"
import previewReducer from "../feature/preview";
import cartReducer from "../feature/cartSlice";
export const store = configureStore({
    reducer: {
        searchReducer: searchReducer,
        previewReducer: previewReducer,
        cartReducer: cartReducer
    }
})