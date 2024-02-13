import { createSlice } from "@reduxjs/toolkit";

const amountSlice = createSlice({
    name: "amountCounter",
    initialState: { amount: 200 },
    reducers: {
        incrementAmount5: (state, action) => {
            // console.log("....................>>>>>>:", action)
            state.amount += 5
        },
        incrementAmount1: (state, action) => {
            state.amount++
        }
    }
});

export default amountSlice.reducer
export const { incrementAmount5, incrementAmount1 } = amountSlice.actions