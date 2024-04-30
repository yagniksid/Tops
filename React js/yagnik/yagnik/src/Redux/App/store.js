import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../Features/todo.js";

export const store = configureStore({
    reducer: {
        todoSlice
    }
})