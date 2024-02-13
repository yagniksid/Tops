import { createSlice } from "@reduxjs/toolkit";


const pointSlice = createSlice({
    name: "point",
    initialState: { point: 500 },
    reducers: {
        incrementTenPoint: (state, action) => {
            state.point += 10
        },
        decrementTenPiont: (state, action) => {
            state.point -= 10
        }
    }
})

export default pointSlice.reducer
export const { incrementTenPoint, decrementTenPiont } = pointSlice.actions