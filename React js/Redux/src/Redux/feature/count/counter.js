import { createSlice } from "@reduxjs/toolkit";


const countSlice = createSlice({
    name: "counter",
    initialState: { count: 100 },
    reducers: {
        incrementOne: (state, action) => {
            state.count++
        }
    }
});

export default countSlice.reducer
export const { incrementOne } = countSlice.actions