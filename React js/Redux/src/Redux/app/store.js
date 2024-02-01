import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../feature/count/counter"
import amountReducer from "../../feature/amount/amount";
import pointReducer from "../../feature/point/point";

export const store = configureStore({
    reducer: {
        counterReducer: counterReducer,
        amountReducer: amountReducer,
        pointReducer: pointReducer
    }
})