import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: "counter",
    initialState: { count: 100 },
    reducers: {
        incrementFive: (state, action) => {
            state.count += 5
        },
        incrementOne: (state, action) => {
            state.count++
        },
        incremenByInput: (state, action) => {
            console.log("🚀 ~ action:", action)
            state.count += action.payload

        }
    }, extraReducers: (builder) => {
        builder.addCase("amountCounter/incrementAmount5", (state, action) => {
            state.count += 5
        }).addCase("amountCounter/incrementAmount1", (state, action) => {
            let amountState = action.payload?.amountReducer.amount
            console.log("🚀 ~ builder.addCase ~ amountState:", amountState)
            console.log("🚀 ~ builder.addCase ~ amountState+1 % 5 === 0:", (amountState + 1) % 5)
            if ((amountState + 1) % 5 === 0) {
                state.count++
            }
        })
    }
});

export default countSlice.reducer
export const { incrementFive, incremenByInput } = countSlice.actions
export const { incrementOne } = countSlice.actions