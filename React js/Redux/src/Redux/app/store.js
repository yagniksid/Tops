import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/count/counter";
import amountReducer from "../feature/amount/amount";
import pointReducer from "../feature/point/point";
import nameReducer from "../feature/input/input"
import userReducer from "../feature/user/user";

export const store = configureStore({
    reducer: {
        counterReducer: counterReducer,
        amountReducer: amountReducer,
        pointReducer: pointReducer,
        nameReducer: nameReducer,
        userReducer: userReducer
    }
})