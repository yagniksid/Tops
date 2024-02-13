import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
    name: "name",
    initialState: { name: [] },
    reducers: {
        addUserName: (state, action) => {
            state.name.push(action.payload)
        }, removeUserName: (state, action) => {
            state.name.pop(state.payload)
        }, editUserName: (state, action) => {
            console.log("🚀 ~ action:", action)
            state.name[action.payload.index] = action.payload.name
        }
    }

})

export default inputSlice.reducer
export const { addUserName, removeUserName, editUserName } = inputSlice.actions
